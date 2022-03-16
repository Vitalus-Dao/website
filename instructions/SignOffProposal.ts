import  {
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";
import { 
  PROGRAM_VERSION_V2,
  withSignOffProposal
} from "@solana/spl-governance";
import { VITALUS_TOKEN_MINT } from "@helpers/constants";
import { 
  getMintGovernancePDA, 
  getProposalAccountPDA, 
  getRealmPDA, 
  getTokenOwnerRecordPDA 
} from "@helpers/pdas";

export const SignOffProposal = async (
  programId: PublicKey, 
  user: PublicKey, 
  ixs: TransactionInstruction[], 
  proposalIndex: number
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

  
  withSignOffProposal(
    ixs, programId, PROGRAM_VERSION_V2, realm, mintGov,
    propAcnt, user,  undefined/* !! */,
    tokenOwnerRecord,
  );
}
