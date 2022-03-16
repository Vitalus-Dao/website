import { Button } from "@components/Button";
import { GOVERNANCE_PROGRAM_ADDRESS, VITALUS_TOKEN_MINT } from "@helpers/constants";
import { createAndSendTx, getProvider } from "@helpers/mixins";
import { getRealmPDA, getSingleUsePDA } from "@helpers/pdas";
import { 
  CreateTokenOwnerRecord,
  DepositGoverningTokens,
  GetOrCreateAssociatedTokenAccount,
  MintMembershipToken,
  WithdrawGoverningTokens,
} from "@instructions";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";
import { Wallet } from "@project-serum/anchor";
import { 
  getTokenOwnerRecordForRealm, 
  TokenOwnerRecord 
} from "@solana/spl-governance";
import { getAssociatedTokenAddress } from "@solana/spl-token";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { 
  PublicKey, 
  TransactionInstruction 
} from "@solana/web3.js";
import { 
  FC, 
  useCallback, 
  useEffect, 
  useState 
} from "react";

interface TokenBalanceArgs {
  villaList: {
    metadata: Metadata;
    tokenAccount: PublicKey;
    mint: PublicKey;
  }[]
}

export const TokenBalance: FC<TokenBalanceArgs> = ({ villaList }) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const wallet = useAnchorWallet();
  const [tokenOwnerRecord, setTokenOwnerRecord] = useState<TokenOwnerRecord>(null);
  const [walletBalance, setWalletBalance] = useState<number>(0);

  const mintToken = async () => {
    const unused = villaList.filter((villa) => {
      let used: boolean;

      getSingleUsePDA(
        VITALUS_TOKEN_MINT,
        villa.mint
      ).then((ret) => {
        connection.getAccountInfo(ret.singleUseAccount)
          .then((acc) => {
            used = !!acc;
          });
      });


      return !used;
    });

    if(unused.length < 1){
      throw new Error("Membership tokens for all villas have already been claimed.");
    }
    // const nftNft = unused[0].mint;


    const ixs: TransactionInstruction[] = [];

    const provider = getProvider(
      connection,
      wallet as Wallet,
    );

    const tokAcnt = await GetOrCreateAssociatedTokenAccount(
      connection,
      publicKey,
      ixs,
    );

    await MintMembershipToken(
      publicKey,
      tokAcnt,
      unused[0].mint,
      unused[0].tokenAccount,
      provider,
      ixs,
    );

    if(!tokenOwnerRecord){
      await CreateTokenOwnerRecord(
        publicKey,
        ixs,
      );
    }

    console.log(ixs)

    await createAndSendTx(
      ixs, 
      connection, 
      publicKey,
      sendTransaction,
    );
  }

  const depositTokens = async () => {
    const ixs: TransactionInstruction[] = [];
    
    const tokAcnt = await GetOrCreateAssociatedTokenAccount(
      connection,
      publicKey,
      ixs,
    );

    if(!tokenOwnerRecord){
      await CreateTokenOwnerRecord(
        publicKey,
        ixs,
      );
    }

    await DepositGoverningTokens(
      publicKey,
      ixs,
      tokAcnt,
      walletBalance,
    );

    await createAndSendTx(
      ixs,
      connection,
      publicKey,
      sendTransaction,
    );

    setTimeout(initialize, 2000);
  }

  const withdrawTokens = async () => {
    const ixs: TransactionInstruction[] = [];
    
    const tokAcnt = await GetOrCreateAssociatedTokenAccount(
      connection,
      publicKey,
      ixs,
    );

    await WithdrawGoverningTokens(
      publicKey,
      ixs,
      tokAcnt,
    );

    await createAndSendTx(
      ixs,
      connection,
      publicKey,
      sendTransaction,
    );

    setTimeout(initialize, 2000);
  }

  const getWalletTokenBalance = useCallback(async () => {
    const tokAcnt = await getAssociatedTokenAddress(VITALUS_TOKEN_MINT, publicKey);

    if(!tokAcnt){
      throw new Error(`No token accounts found`);
    }

    const amount = await connection.getTokenAccountBalance(
      tokAcnt,
    );

    return amount.value.uiAmount;

  }, [connection, publicKey]);

  const getTokenOwnerRecord = useCallback(async () => {
    try {
      const rec = await getTokenOwnerRecordForRealm(
        connection,
        GOVERNANCE_PROGRAM_ADDRESS,
        await getRealmPDA(),
        VITALUS_TOKEN_MINT,
        publicKey,
      );

      return rec.account;
    } catch (e) {
      console.log(e);
    }
  }, [connection, publicKey]);

  const initialize = useCallback(async () => {
    const rec = await getTokenOwnerRecord()
    setTokenOwnerRecord(rec)
    
    const amnt = await getWalletTokenBalance()
    setWalletBalance(amnt);
  }, 
  [
    publicKey,
    connection, 
    getTokenOwnerRecord,
    getWalletTokenBalance,
  ]);

  useEffect(() => {
    if(connection){
      initialize();
    }
  }, [initialize, connection]);

  return (
    <div>
      {!tokenOwnerRecord && 
        <div>
          <div>Mint Vitalus DAO Membersip Token</div>
          <button onClick={mintToken}>Mint</button>
        </div>
      }
      {tokenOwnerRecord &&
        <div className="bg-secondary rounded-lg flex flex-col justify-center pt-3 pb-6 px-4">
          <div className="mx-auto font-semibold text-xl">Your Tokens</div>
          <div className="flex space-x-8 justify-evenly px-4 mt-6">
            <div className="bg-primary/40 px-3 py-1 rounded-xl">
              Deposited: {tokenOwnerRecord.governingTokenDepositAmount.toNumber()}
            </div>
            <div className="bg-primary/40 px-3 py-1 rounded-xl">
              In Wallet: {walletBalance}
            </div>
          </div>
          <div className="flex space-x-4 justify-evenly mt-8">
            <Button onClick={depositTokens}>Deposit</Button>
            <Button onClick={withdrawTokens}>Withdraw</Button>
          </div>
        </div>
      }
    </div>
  );
};
