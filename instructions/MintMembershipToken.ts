import  {
  PublicKey,
  SystemProgram,
  TransactionInstruction,
} from "@solana/web3.js";
import {
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token"
import { VITALUS_TOKEN_MINT } from "@helpers/constants";
import { 
  getMetadataAccountPDA,
  getMintGovPDA, 
  getSingleUsePDA
} from "@helpers/pdas";
import { getProgram, getProvider } from "@helpers/mixins";
import { Provider } from "@project-serum/anchor";

export const MintMembershipToken = async (
  user: PublicKey,
  userTokAcnt: PublicKey,
  nftMint: PublicKey,
  nftTokAcnt: PublicKey,
  provider: Provider,
  ixs: TransactionInstruction[]
) => {
  const program = getProgram(provider);
  const { metadataAccount }  = await getMetadataAccountPDA(nftMint);
  const { singleUseAccount } = await getSingleUsePDA(VITALUS_TOKEN_MINT, nftMint);
  const { mintGovernance, bump } = await getMintGovPDA(VITALUS_TOKEN_MINT);


  const ix = program.instruction.mintCommunityTokenToNftHolder(
    bump,
    {
      accounts: {
        payer: user,
        tokenMint: VITALUS_TOKEN_MINT,
        userTokenAccount: userTokAcnt,
        user: user,
        mintGovernance: mintGovernance,
        nftMint: nftMint,
        nftTokenAccount: nftTokAcnt,
        nftMetadataAccount: metadataAccount,
        once: singleUseAccount,
        tokenProgram: TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
      },
      signers: [],
    }
  );

  ixs.push(ix);
}
