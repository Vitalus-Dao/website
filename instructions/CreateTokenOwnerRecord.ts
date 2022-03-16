import  {
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";
import { 
  withCreateTokenOwnerRecord,
} from "@solana/spl-governance";
import { GOVERNANCE_PROGRAM_ADDRESS, VITALUS_TOKEN_MINT } from "@helpers/constants";
import { 
  getRealmPDA, 
  getTokenOwnerRecordPDA 
} from "@helpers/pdas";

export const CreateTokenOwnerRecord = async (
  user: PublicKey, 
  ixs: TransactionInstruction[]
) => {  
  const realm = await getRealmPDA();
  const tokenOwnerRecord = await getTokenOwnerRecordPDA(
    realm,
    VITALUS_TOKEN_MINT,
    user,
  );

  await withCreateTokenOwnerRecord(
    ixs, GOVERNANCE_PROGRAM_ADDRESS, 
    realm, user, VITALUS_TOKEN_MINT, 
    user,
  );

  return tokenOwnerRecord;
}
