import { Navbar } from '../components/Navbar'
import { Wallet } from '../components/Wallet'
import Image from 'next/image';

const Home = () => {
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        <hr />
        <div>

        </div>
      </Wallet>
    </>
  )
}


export default Home;