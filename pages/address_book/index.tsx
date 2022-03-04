import { Page } from '@components/Page';
import { VITALUS_ARWEAVE_LINK } from '@helpers/constants';
import { titlize } from '@helpers/mixins';

export const getStaticProps = async () => {
  const res = await fetch(VITALUS_ARWEAVE_LINK);
  const metadata = await res.json();

  return {
    props: { metadata },
  };
};

function AddressBook({ metadata }) {
  return (
    <Page>
      <div className="container mx-auto">
        <div className="mt-4 ml-2 font-bold text-xl">District</div>
        <div className="mt-2 ml-2">
          {Object.keys(metadata).map((district) => (
            // <Link href={`/address_book/${district}`} key={district}>
            <a href={`/address_book/${district}`} key={district}>
              <div className="text-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                {titlize(district)}
              </div>
            </a>
            // </Link>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default AddressBook;
