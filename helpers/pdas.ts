import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { 
  GOVERNANCE_PROGRAM_ADDRESS, 
  REALM_NAME, 
  TOKEN_METADATA_PROGRAM_ADDRESS, 
  TOKEN_MINTING_PROGRAM_ADDRESS 
} from "./constants";

export const getRealmPDA = async () => {
  const [realm] = await PublicKey.findProgramAddress(
    [
      Buffer.from("governance"),
      Buffer.from(REALM_NAME),
    ],
    GOVERNANCE_PROGRAM_ADDRESS,
  );

  return realm;
}

export const getMintGovernancePDA = async (
  realm: PublicKey,
  mint: PublicKey,
) => {
  const [mintGov] = await PublicKey.findProgramAddress(
    [
      Buffer.from("mint-governance"),
      realm.toBuffer(),
      mint.toBuffer(),
    ],
    GOVERNANCE_PROGRAM_ADDRESS,
  );

  return mintGov;
}

export const getTokenOwnerRecordPDA = async (
  realm: PublicKey,
  mint: PublicKey,
  user: PublicKey,
) => {
  const [tokenOwnerRecord] = await PublicKey.findProgramAddress(
    [
      Buffer.from("governance"),
      realm.toBuffer(),
      mint.toBuffer(),
      user.toBuffer(),
    ],
    GOVERNANCE_PROGRAM_ADDRESS,
  );

  return tokenOwnerRecord;
}

export const getTokenHoldingAccountPDA = async (
  realm: PublicKey,
  mint: PublicKey,
) => {
  const [tokHoldAcnt] = await PublicKey.findProgramAddress(
    [
      Buffer.from("governance"),
      realm.toBuffer(),
      mint.toBuffer(),
    ],
    GOVERNANCE_PROGRAM_ADDRESS,
  );

  return tokHoldAcnt;
}

export const getProposalAccountPDA = async (
  governance: PublicKey,
  mint: PublicKey,
  index: number,
) => {
  const [propAcnt] = await PublicKey.findProgramAddress(
    [
      Buffer.from("governance"),
      governance.toBuffer(),
      mint.toBuffer(),
      Buffer.from(new Uint8Array(new BN(index).toArray("le", 4))),
    ],
    GOVERNANCE_PROGRAM_ADDRESS,
  );

  return propAcnt;
}

export const getProposalTransactionAccontPDA = async (
  propAcnt: PublicKey,
  optionIndex: number,
  transactionIndex: number,
) => {
  const [propTxAcnt] = await PublicKey.findProgramAddress(
    [
      Buffer.from("governance"),
      propAcnt.toBuffer(),
      Buffer.from(new Uint8Array(new BN(optionIndex).toArray("le", 1))),
      Buffer.from(new Uint8Array(new BN(transactionIndex).toArray("le", 2))),
    ],
    GOVERNANCE_PROGRAM_ADDRESS,
  );

  return propTxAcnt;
}

export const getProgramGovPDA =  async () => {
  const [programGovernance] = await PublicKey.findProgramAddress(
    [
      Buffer.from("program-governance"),
      (await getRealmPDA()).toBuffer(),
      TOKEN_MINTING_PROGRAM_ADDRESS.toBuffer(),
    ],
    GOVERNANCE_PROGRAM_ADDRESS,
  );

  return programGovernance;
}

export const getMintGovPDA = async (
  mint: PublicKey,
) => {
  const [mintGovernance, govNonce] = await PublicKey.findProgramAddress(
    [
      Buffer.from("mint-gov"),
      mint.toBuffer(),
    ],
    TOKEN_MINTING_PROGRAM_ADDRESS,
  );

  return { 
    mintGovernance, 
    bump: govNonce,
  };
}

export const getMetadataAccountPDA = async (
  mint: PublicKey,
) => {
  const [metadataAccount, bump] = await PublicKey.findProgramAddress(
    [
      Buffer.from("metadata"),
      TOKEN_METADATA_PROGRAM_ADDRESS.toBuffer(),
      mint.toBuffer()
    ],
    TOKEN_METADATA_PROGRAM_ADDRESS,
  );

  return { 
    metadataAccount, 
    bump,
  };
}

export const getSingleUsePDA = async (
  mint: PublicKey,
  nftMint: PublicKey,
) => {
  const [singleUseAccount, bump] = await PublicKey.findProgramAddress(
    [
      Buffer.from("single use"),
      mint.toBuffer(),
      nftMint.toBuffer()
    ],
    TOKEN_MINTING_PROGRAM_ADDRESS,
  );

  return { 
    singleUseAccount, 
    bump,
  };
}