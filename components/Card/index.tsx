import { FC } from 'react';
import Image from 'next/image';

interface CardProps {
  title: string,
  imgSrc: string,
}

export const Card: FC<CardProps> = ({ title, imgSrc, children }) => {

  return (
    <div className="flex bg-dark-1 h-56 rounded-lg border-4 border-dark-2/75">
      <div className="flex flex-col w-96 pl-4 pt-4">
        <div className="text-2xl">
          {title}
        </div>
        <div className="mt-2">
          {children}
        </div>
      </div>
      <div className="my-auto pr-4">
        <Image src={imgSrc} width={200} height={200} />
      </div>
    </div>
  );
};
