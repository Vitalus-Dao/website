import { useState, useEffect, useCallback, FC } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Metadata, MetadataProgram } from '@metaplex-foundation/mpl-token-metadata';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';
import { TEST_CANDY_MACHINE, VITALUS_CANDY_MACHINE } from '@helpers/constants';
import { TokenBalance } from '@components/TokenBalance';
import { Proposals } from '@components/Proposals';
// import 'dotenv/config';

export const JungleClub: FC = () => {
  const [villas, setVillas] = useState([]);
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  // const play = async () => {
  //   const res = await fetch("https://api-mainnet.magiceden.dev/v2/collections/metavillage/listings?offset=0&limit=20");
  //   const data = await res.json();

  //   const res1 = await fetch("https://api-mainnet.magiceden.dev/v2/collections/metavillage/activities?offset=0&limit=20");
  //   const data1 = await res1.json();

  //   const res2 = await fetch("https://api-mainnet.magiceden.dev/v2/collections/metavillage/stats");
  //   const data2 = await res2.json();

  //   console.log(data,data1, data2);
  // }

  const getVillas = useCallback(async () => {
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
      programId: TOKEN_PROGRAM_ID,
    });

    const nfts = tokenAccounts.value
      .filter((acc) => {
        const amnt = acc.account.data.parsed.info.tokenAmount;
        return amnt.decimals === 0 && amnt.uiAmount === 1;
      })
      .map((acc) => {
        return {
          tokenAccount: acc.pubkey,
          mint: new PublicKey(acc.account.data.parsed.info.mint),
        };
      });

    const promises = nfts.map(async (acc) => {
      const [mtdtAcnt] = await MetadataProgram.findMetadataAccount(acc.mint);
      // console.log(mtdtAcnt);
      try {
        const metadata = await Metadata.load(connection, mtdtAcnt);
        // nfts.push(metadata);
        return {
          ...acc,
          metadata: metadata,
        };
      } catch (e) {
        return null;
      }
    });

    const villaList = (await Promise.all(promises)).filter((item) => {
      return (
        item && item.metadata.data.data.creators &&
        // item.metadata.data.data.creators[0].address === VITALUS_CANDY_MACHINE.toString()
        item.metadata.data.data.creators[0].address === TEST_CANDY_MACHINE.toString()
      );
    });

    return villaList;
  }, [connection, publicKey]);

  // const mint = async () => {
  //   const accounts = await connection.getParsedProgramAccounts(
  //     new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),
  //     // { filters: [
  //     //   {
  //     //     memcmp: {
  //     //       offset: 0,
  //     //       bytes: "5", // Uint8Array.from([4])
  //     //     }  
  //     //   }
  //     // ]}
  //   );

  //   console.log(accounts);
  // }

  const renderPageForVillaOwner = () => {

    return (
      <div className="w-full flex justify-between space-x-8">
        {/* <button 
          className="text-lg bg-secondary py-2 px-4 text-white rounded-lg hover:bg-accent/25"
          onClick={mint}
        >
          Mint
        </button> */}
        <Proposals />
        <div>
          <TokenBalance villaList={villas} />
        </div>
      </div>
    )
  }

  useEffect(() => {
    if (publicKey) {
      getVillas().then((villaList) => {
        setVillas(villaList);
      });
    }
  }, [getVillas, publicKey]);

  return (
    <div className="container mx-auto">
      {/* <div className="font-bold text-xl">This page is currently under construction!</div> */}
      {!publicKey && <div>Please connect wallet</div>}
      {publicKey && !villas[0] && (
        <div>Seems that you do not have a Vitalus villa :/</div>
      )}
      {publicKey && villas[0] && renderPageForVillaOwner()}
    </div>
  );
};
