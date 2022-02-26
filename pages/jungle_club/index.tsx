import { Navbar } from '../../components/Navbar'
import { Wallet } from '../../components/Wallet'
import { JungleClub } from '../../components/JungleClub'
import Image from 'next/image';
import { FC } from 'react';

const JungleClubShell: FC = () => {
  return (
    <>
      <Wallet>
        <Navbar />
        <JungleClub />
      </Wallet>
    </>
  )
}


export default JungleClubShell;