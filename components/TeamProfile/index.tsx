import { FC } from 'react';
import Image from 'next/image';

export interface ProfileArgs {
  name: string,
  imgSrc: string,
  role: string,
};

export const TeamProfile: FC<ProfileArgs> = ({ imgSrc, name, role }) => {
  const scale = 100;

  return (
    <div style={{ width: '100px' }} className="">
      <Image src={imgSrc} width={scale} height={scale} />
      <div className="text-center">{name}</div>
      <div className="text-center">{role}</div>
    </div>
  );
};
