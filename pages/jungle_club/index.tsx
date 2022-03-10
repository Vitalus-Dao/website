import { JungleClub } from '@components/JungleClub';
import { FC } from 'react';
import { Page } from '@components/Page';

const JungleClubShell: FC = () => {
  return (
    <Page splash={false}>
      <JungleClub />
    </Page>
  );
};

export default JungleClubShell;
