import { Address } from '@components/Address';
import { FC } from 'react';
import { VITALUS_ARWEAVE_LINK } from '@helpers/constants';
import { VillaData } from '@types';
import { Page } from '@components/Page';

export const getStaticPaths = async () => {
  const res = await fetch(VITALUS_ARWEAVE_LINK);
  const metadata = await res.json();
  const paths = [];

  Object.keys(metadata).forEach((district) => {
    Object.keys(metadata[district]).forEach((block) => {
      Object.keys(metadata[district][block]).forEach((num) => {
        // let i = addr.metadata.name.indexOf(" ");
        paths.push({
          params: {
            block: block,
            district: district,
            address: num,
          },
        });
      });
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(VITALUS_ARWEAVE_LINK);
  const metadata = await res.json();
  const block = context.params.block;
  const district = context.params.district;
  const num = context.params.address;

  const address = metadata[district][block][num];
  // const imgRes = await fetch(address.metadata.image);
  // const imgBuf = await imgRes.arrayBuffer();
  // const imgSrc = URL.createObjectURL(imgBlob);

  return {
    props: {
      data: address,
      // imgSrc: ,
    },
  };
};

const AddressShell: FC<{ data: VillaData }> = ({ data }) => {
  // const router = useRouter();

  return (
    <Page>
      <Address data={data} />
    </Page>
  );
};

export default AddressShell;
