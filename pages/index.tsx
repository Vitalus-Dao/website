import { Navbar } from '@components/Navbar';
import { Wallet } from '@components/Wallet';
import Image from 'next/image';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <Wallet>
        <Navbar />
        <div className="mt-12 mb-8 flex justify-center">
          <div className="max-w-lg flex-items-center">
            <div className="text-center text-2xl font-semibold">
              Welcome to the Jungle
            </div>
            <div className="text-center text-sm mt-4">
              A place where the charismatic thrive, their passion as persistent as the
              towering trees that surround them.
            </div>
          </div>
        </div>
        <hr />
        <div></div>
      </Wallet>
    </>
  );
};

export default Home;
