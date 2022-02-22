import { Navbar } from '../../components/Navbar'
import { Wallet } from '../../components/Wallet'
import { JungleClub } from '../../components/JungleClub'
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Wallet>
        <Navbar />
        <JungleClub />
      </Wallet>
    </>
  )
}


export default Home;