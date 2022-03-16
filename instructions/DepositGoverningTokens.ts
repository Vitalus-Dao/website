import  {
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";
import { 
 PROGRAM_VERSION_V2, 
 withDepositGoverningTokens,
} from "@solana/spl-governance";
import BN from "bn.js";
import { VITALUS_TOKEN_MINT, REALM_NAME, GOVERNANCE_PROGRAM_ADDRESS } from "@helpers/constants";
import { 
  getRealmPDA, 
} from "@helpers/pdas";

export const DepositGoverningTokens = async (
  user: PublicKey, 
  ixs: TransactionInstruction[],
  tokAcnt: PublicKey,
  amount: number,
) => {
  const realm = await getRealmPDA();

  await withDepositGoverningTokens(
    ixs, GOVERNANCE_PROGRAM_ADDRESS, 
    PROGRAM_VERSION_V2, realm, 
    tokAcnt, VITALUS_TOKEN_MINT, 
    user, user, user,
    new BN(amount),
  );

}
