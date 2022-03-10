import { useState, useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { VillaData } from '@types';

export const AddressLink: FC<{ data: VillaData; idx: string }> = ({ data, idx }) => {
  const [imgSrc, setImgSrc] = useState('/imgs/missing.jpg');
  const router = useRouter();

  useEffect(() => {
    fetch(data.metadata.image)
      .then((imgRes) => imgRes.blob())
      .then((imgBlob) => {
        setImgSrc(URL.createObjectURL(imgBlob));
      });
    // eslint-disable-next-line
  }, []);

  return (
    // <Link href={`/address_book/${router.query.district}/${router.query.block}/${idx}`}>
    <a href={`/address_book/${router.query.district}/${router.query.block}/${idx}`}>
      <div className="flex my-2 hover:bg-gray-100 dark:hover:bg-accent/25">
        <div className="ml-2">
          <Image src={imgSrc} width={50} height={50} alt={'Villa address link image'} />
        </div>
        <div className="my-auto ml-6">{data.metadata.name}</div>
      </div>
    </a>
    // </Link>
  );
};
