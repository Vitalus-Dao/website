import  {
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";
import  {
  createMintToInstruction,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import BN from "bn.js";
import { 
  AccountMetaData,
  InstructionData,
  PROGRAM_VERSION_V2,
  withInsertTransaction
} from "@solana/spl-governance";
import { VITALUS_TOKEN_MINT } from "@helpers/constants";
import { 
  getMintGovernancePDA, 
  getProposalAccountPDA, 
  getRealmPDA, 
  getTokenOwnerRecordPDA 
} from "@helpers/pdas";


export const InsertTransaction = async (
  programId: PublicKey, 
  user: PublicKey, 
  tokAcnt: PublicKey,
  ixs: TransactionInstruction[],
  proposalIndex: number,
  optionIndex: number,
  transactionIndex: number,
  amount: number,
) => {  
  const realm = await getRealmPDA(programId);
  const mintGov = await getMintGovernancePDA(
    programId,
    realm,
    VITALUS_TOKEN_MINT,
  );
  const tokenOwnerRecord = await getTokenOwnerRecordPDA(
    programId,
    realm,
    VITALUS_TOKEN_MINT,
    user,
  );
  const propAcnt = await getProposalAccountPDA(
    programId,
    mintGov,
    VITALUS_TOKEN_MINT,
    proposalIndex,
  );

  const ixData: InstructionData[] = [];

  const accounts: AccountMetaData[] = [
    new AccountMetaData({ 
      pubkey: VITALUS_TOKEN_MINT,
      isSigner: false,
      isWritable: true, 
    }),
    new AccountMetaData({
      pubkey: tokAcnt,
      isSigner: false,
      isWritable: true,
    }),
    new AccountMetaData({ 
      pubkey: mintGov,
      isSigner: true,
      isWritable: false, 
    }),
  ];

  const mintToIx = new InstructionData({
    programId: TOKEN_PROGRAM_ID,
    accounts: accounts,
    data: Buffer.concat([
      Buffer.from(new Uint8Array([7])), 
      Buffer.from(new BN(amount).toArray("le", 8)),
    ]),
  });

  ixData.push(mintToIx);

  await withInsertTransaction(
    ixs, programId, PROGRAM_VERSION_V2, mintGov, 
    propAcnt, tokenOwnerRecord, user,
    transactionIndex, optionIndex, 10 * 60, ixData, user
  );

  return propAcnt;
}
