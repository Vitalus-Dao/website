import { Wallet } from '../Wallet';
import Link from 'next/link';
import Image from 'next/image';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FC } from 'react';

export const Navbar: FC = () => {
  return (
    <>
      <nav className="border-b-gray-200 px-2 sm:px-4 py-2.5 md:m-4 rounded bg-white dark:bg-green-900">
        <div className="container flex justify-between items-center mx-auto">
          <div className="my-auto md:flex text-slate-900 dark:text-white">
            {/* <Link href="/"> */}
            <a href="/" className="ml-2 font-mono text-2xl hover:underline">
              Vitalus
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
            <WalletMultiButton className="!bg-green-700" />
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          {/*TODO: add mobile menu toggle*/}
          <div
            className=" text-slate-900 dark:text-white hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              {/* <Link href="/address_book"> */}
              <li>
                <a href="/address_book" className="ml-2 my-auto hover:text-green-500">
                  Address Book
                </a>
              </li>
              {/* </Link> */}
              {/* <Link href="/jungle_club"> */}
              <li>
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
