import { Wallet  } from "../Wallet";
import Link from "next/link";
import Image from "next/image";
import {
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { FC } from "react";

export const Navbar: FC = () => {

  return (
    <>
      <nav className="flex justify-between h-16">
        <div className="my-auto flex">
          {/* <Link href="/"> */}
            <a href="/" className="ml-2 font-mono text-2xl hover:underline">
              Vitalus
            </a>
          {/* </Link> */}
          <div className="text-xs mt-3 ml-1">
            of 
            <a href="https://metavillage.app/" target="_blank" rel="noreferrer" className="ml-1 hover:underline">
              Metavillage
            </a>
          </div>
        </div>
        <div className="flex justify-evenly gap-x-2">
          <div className="my-auto">
            <WalletMultiButton/>
          </div>
          {/* <Link href="/address_book"> */}
            <a href="/address_book" className="ml-2 text-sm my-auto hover:underline">
              Aderess Book
            </a>
          {/* </Link> */}
          {/* <Link href="/jungle_club"> */}
            <a href="/jungle_club" className="ml-2 text-sm my-auto hover:underline">
              Jungle Club
            </a>
          {/* </Link> */}
          <a href="https://twitter.com/VitalusLife" target="_blank" rel="noreferrer" className="my-auto">
            <Image src="/imgs/twitter-logo.svg" width={50} height={50} />
          </a>
          <a href="https://t.co/rq760C14KB" target="_blank" rel="noreferrer" className="my-auto mr-2">
            <Image src="/imgs/discord-logo.svg" width={45} height={45} />
          </a>
        </div>
      </nav>
      <hr />
    </>
  );
}