import { web3 } from '@project-serum/anchor';
import { useState, useEffect, useCallback } from 'react';
import { useConnection, useWallet, useAnchorWallet } from '@solana/wallet-adapter-react';
import { Metadata, MetadataProgram } from "@metaplex-foundation/mpl-token-metadata";
import {
  TOKEN_PROGRAM_ID,
 } from '@solana/spl-token'
import { PublicKey } from '@solana/web3.js';
// import 'dotenv/config';

export const JungleClub = () => {
  const [villas, setVillas] = useState([]);
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const getVillas = useCallback(async () => {
    let tokenAccounts = await connection.getParsedTokenAccountsByOwner(
      publicKey, 
      { 
        programId: TOKEN_PROGRAM_ID,
      }
    );

    let nfts = tokenAccounts.value.filter((acc) => {
      let amnt = acc.account.data.parsed.info.tokenAmount;
      return amnt.decimals === 0 && amnt.uiAmount === 1;
    }).map((acc) => {
      return {
        address: acc.pubkey,
        mint: new PublicKey(acc.account.data.parsed.info.mint),
      }
    });

    let promises = nfts.map(async (acc) => {
      let [mtdtAcnt, bump] = await MetadataProgram.find_metadata_account(acc.mint);
      // console.log(mtdtAcnt);
      try {
        let metadata = await Metadata.load(connection, mtdtAcnt);
        // nfts.push(metadata);
        acc['metadata'] = metadata;
        return acc;
      } catch(e) {
        return null;
      }
    });

    let villas = (await Promise.all(promises)).filter((item) => {
      // console.log(item.metadata.data.data.creators[0].address, process.env.VITALUS_CANDY_MACHINE)
      return item && item.metadata.data.data.creators[0].address === process.env.VITALUS_CANDY_MACHINE;
    });

    console.log(villas);
    return villas;
  }, [connection, publicKey]);

  useEffect(() => {
    if(publicKey){
      getVillas()
        .then((villas) => {
          setVillas(villas);
        });
    }
  }, [getVillas, publicKey])

  return (
    <>
      { !publicKey && 
        <div>
          Please connect wallet
        </div>
      }
      { publicKey && !villas[0] && 
        <div>
          Seems that you do not have a Vitalus villa :/
        </div>
      }
      { publicKey && villas[0] &&
        <div>
          *Private content for holders only ;)*
        </div>
      }
    </>
  )
}