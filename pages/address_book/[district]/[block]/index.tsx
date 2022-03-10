import { useRouter } from 'next/router';
import { AddressLink } from '@components/AddressLink';
import { titlize } from '@helpers/mixins';
import { VITALUS_ARWEAVE_LINK } from '@helpers/constants';
import { Page } from '@components/Page';

export const getStaticPaths = async () => {
  const res = await fetch(VITALUS_ARWEAVE_LINK);
  const metadata = await res.json();
  const paths = [];

  Object.keys(metadata).forEach((district) => {
    Object.keys(metadata[district]).forEach((block) => {
      paths.push({
        params: { block: block, district: district },
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

  return {
    props: {
      data: metadata[district][block],
    },
  };
};

const Block = ({ data }): JSX.Element => {
  const router = useRouter();

  return (
    <Page splash={false}>
      <div className="container mx-auto">
        <div className="mt-4 ml-2 font-bold text-xl">
          {titlize(router.query.block as string)}
        </div>
        <div>
          {Object.keys(data).map((k) => {
            return <AddressLink data={data[k]} idx={k} key={k} />;
          })}
        </div>
      </div>
    </Page>
  );
};

export default Block;
