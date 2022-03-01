import { Wallet } from '../Wallet';
import Link from 'next/link';
import Image from 'next/image';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import {Logo} from "@components/Logo";

export const Navbar: FC = () => {
  function doToggleMenu() {
    const menu = document.querySelector('#mobile-menu'); // Menu
    menu.classList.toggle('hidden');
  }

  return (
    <>
      <nav className="border-b-gray-200 px-2 sm:px-4 py-2.5 md:m-4 rounded bg-white dark:bg-green-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="my-auto md:flex text-slate-900 dark:text-white">
            {/* <Link href="/"> */}
            <a href="/" className="ml-2 font-mono text-2xl hover:underline">
              <Logo />
            </a>
            {/* </Link> */}
            <div className="text-xs mt-3 ml-1">
              of
              <a
                href="https://metavillage.app/"
                target="_blank"
                rel="noreferrer"
                className="ml-1 hover:underline">
                Metavillage
              </a>
            </div>
          </div>
          <div className="flex md:order-2">
            {/* </Link> */}
            <div className="mr-4 flex items-center">
              <a
                href="https://twitter.com/VitalusLife"
                target="_blank"
                rel="noreferrer"
                className="my-auto p-2">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size={'2x'}
                  className="text-slate-900 dark:text-white"
                />
              </a>
              <a
                href="https://t.co/rq760C14KB"
                target="_blank"
                rel="noreferrer"
                className="my-auto p-2">
                <FontAwesomeIcon
                  icon={faDiscord}
                  size={'2x'}
                  className="text-slate-900 dark:text-white"
                />
              </a>
            </div>
            <div className="hidden md:block">
              <WalletMultiButton className="!bg-green-700" />
            </div>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="mobile-menu-button inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={doToggleMenu}>
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} size={'2x'} />
            </button>
          </div>
          <div
            className="text-slate-900 dark:text-white justify-between w-full hidden md:flex md:w-auto md:items-center md:order-1"
            id="mobile-menu">
            <ul className="flex flex-col md:flex-row mt-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              {/* <Link href="/address_book"> */}
              <li className="p-4 md:p-0">
                <a href="/address_book" className="ml-2 my-auto hover:text-green-500">
                  Address Book
                </a>
              </li>
              {/* </Link> */}
              {/* <Link href="/jungle_club"> */}
              <li className="p-4 md:p-0">
                <a href="/jungle_club" className="ml-2 my-auto hover:text-green-500">
                  Jungle Club
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
