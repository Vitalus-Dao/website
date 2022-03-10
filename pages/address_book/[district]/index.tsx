import { useRouter } from 'next/router';
import { VITALUS_ARWEAVE_LINK } from '@helpers/constants';
import { titlize } from '@helpers/mixins';
import { Page } from '@components/Page';

export const getStaticPaths = async () => {
  const res = await fetch(VITALUS_ARWEAVE_LINK);
  const metadata = await res.json();

  const paths = Object.keys(metadata).map((district) => {
    return {
      params: { district: district },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(VITALUS_ARWEAVE_LINK);
  const metadata = await res.json();
  const district = context.params.district;

  return {
    props: {
      data: metadata[district],
      // district: district,
    },
  };
};

const District = ({ data }) => {
  const router = useRouter();

  return (
    <Page splash={false}>
      <div className="container mx-auto">
        <div className="mt-4 ml-2 font-bold text-xl">
          {titlize(router.query.district as string)}
        </div>
        <div className="mt-2">
          {Object.keys(data).map((block) => {
            return (
              /* <Link href={`/address_book/${router.query.district}/${block}`} key={block}> */
              <a href={`/address_book/${router.query.district}/${block}`} key={block}>
                <div className="ml-2 p-2 hover:bg-gray-100 dark:hover:bg-accent/25">
                  {titlize(block)}
                </div>
              </a>
              /* </Link> */
            );
          })}
        </div>
      </div>
    </Page>
  );
};

export default District;
