import { Navbar } from '@components/Navbar';
import { Wallet } from '@components/Wallet';
import { JungleClub } from '@components/JungleClub';
import Image from 'next/image';
import { FC } from 'react';
import { Page } from '@components/Page';

const JungleClubShell: FC = () => {
  return (
    <Page>
      <JungleClub />
    </Page>
  );
};

export default JungleClubShell;
