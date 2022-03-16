import { 
  Provider, 
  Program, 
  Idl,
  setProvider,
  Wallet
} from '@project-serum/anchor';
import {
  Connection, PublicKey, Transaction, TransactionInstruction,
} from '@solana/web3.js';
import { 
  TOKEN_MINTING_PROGRAM_ADDRESS 
} from './constants';
import idl from '@idls/token-minting-program.json';

/**
 * Changes the first letter of every word to an upper case character
 * @param str
 */
export const titlize = (str: string) => {
  let words = str.includes(" ") ? str.split(" ") : str.split("_");
  let cappedWords = words.map((w) => {
      return w[0].toUpperCase() + w.slice(1);
  });

  return cappedWords.join(" ");
}

export const getStateString = (num: number) => {
  switch(num) {
    case 0: {
      return "Draft";  
    }
    case 1: {
      return "Signing Off";  
    }
    case 2: {
      return "Voting";  
    }
    case 3: {
      return "Succeeded";  
    }
    case 4: {
      return "Executing";  
    }
    case 5: {
      return "Completed";  
    }
    case 6: {
      return "Cancelled";  
    }
    case 7: {
      return "Defeated";  
    }
    case 8: {
      return "Executing With Errors";  
    }
  }
}

export const getProgram = (
  provider: Provider,
) => {
  const program = new Program(
    idl as Idl, 
    TOKEN_MINTING_PROGRAM_ADDRESS, 
    provider,
  );

  return program;
}

export const getProvider = (
  connection: Connection,
  wallet: Wallet,
) => {
  const opts = Provider.defaultOptions();
  const provider = new Provider(connection, wallet, opts);
  setProvider(provider);

  return provider;
}

export const createAndSendTx = async (
  ixs: TransactionInstruction[],
  connection: Connection,
  user: PublicKey,
  sendTransaction: Function,
) => {
  const tx = new Transaction({
    recentBlockhash: (await connection.getLatestBlockhash()).blockhash,
    feePayer: user,
  });
  ixs.forEach(ix => {
    tx.add(ix);
  });

  const sig = await sendTransaction(tx, connection);

  console.log(sig);

  return sig;
}