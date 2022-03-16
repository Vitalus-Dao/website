import  {
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";
import { 
 withWithdrawGoverningTokens,
} from "@solana/spl-governance";
import { GOVERNANCE_PROGRAM_ADDRESS, VITALUS_TOKEN_MINT } from "@helpers/constants";
import { 
  getRealmPDA, 
} from "@helpers/pdas";

export const WithdrawGoverningTokens = async (
  user: PublicKey, 
  ixs: TransactionInstruction[],
  tokAcnt: PublicKey,
) => {
  const realm = await getRealmPDA();

  await withWithdrawGoverningTokens(
    ixs, GOVERNANCE_PROGRAM_ADDRESS,
    realm, tokAcnt, VITALUS_TOKEN_MINT, 
    user,
  );

}
