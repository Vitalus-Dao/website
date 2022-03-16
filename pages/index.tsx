import { Page } from '@components/Page';
import { TeamProfile } from '@components/TeamProfile';
import Image from 'next/image';
import { FC } from 'react';
import { Logo } from '@components/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Card } from '@components/Card';

const Home: FC = () => {
  const villaSize = 450;

  return (
    <div>
      <Page splash={true}>
        <div>
          <section className="">
            <div className="">
              <div
                style={{
                  backgroundImage: "url('/imgs/splash1.png')",
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',
                }}
                className="h-screen w-full flex flex-col justify-center items-center">
                <div className="mx-auto">
                  <Logo height={125} />
                  <div className="flex justify-center text-3xl font-light tracking-widest mt-2">
                    WELCOME TO THE JUNGLE
                  </div>
                </div>
                <div className="bg-secondary/50 mt-4 rounded-lg flex space-x-16 px-12 py-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/VitalusLife">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size={'3x'}
                      className="text-slate-900 dark:text-white"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/vitaluslife/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size={'3x'}
                      className="text-slate-900 dark:text-white"
                    />
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://t.co/rq760C14KB">
                    <FontAwesomeIcon
                      icon={faDiscord}
                      size={'3x'}
                      className="text-slate-900 dark:text-white"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className=" mt-12 mb-8 flex flex-col items-center">
            <div className="flex mx-auto container justify-around">
              <div style={{ width: '550px' }} className="flex justify-center">
                <div className="mx-8 flex flex-col justify-center">
                  <div className="text-center mt-4">
                    <div className="text-2xl font-bold">This is Vitalus</div>
                  </div>
                  <div className="text-lg my-4 grow">
                    <div className="">
                      Vitalus aims to develop a neighbourhood with unique identity and
                      culture. Rich, Magnetic, Charismatic natural performers with
                      striking passion that dominates attention! We are VITALIANS !
                    </div>
                    <div className="mt-4">
                      Our community is overwhelmed with joy and laughters enjoying myriad
                      of interactions within our beloved Vitalus neighbourhood. It is just
                      a beginning of our journey but we are all looking forward to share
                      the glory of success with everyone in Vitalus!
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-auto">
                <Image
                  src="/imgs/vitalus-villa.jpeg"
                  width={villaSize}
                  height={villaSize}
                />
              </div>
            </div>
          </section>
          <section className="bg-secondary py-12 flex flex-col justify-center">
            <div className="container mx-auto flex flex-col">
              <div className="flex justify-evenly items-center text-4xl">
                <div>VITALUS</div>
                <div className="flex flex-col justify-center">
                  <div className="mx-auto">600</div>
                  <div>NEIGHBORS</div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mx-auto">4</div>
                  <div>DISTRICTS</div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mx-auto">40</div>
                  <div>STREETS</div>
                </div>
              </div>
              <a
                href="https://magiceden.io/marketplace/metavillage"
                target="_blank"
                rel="noreferrer"
                className="bg-accent-1 rounded-full mt-12 mx-auto px-12 py-4 text-2xl hover:bg-accent-2">
                Join Us and Move in to a Beuatiful Villa
              </a>
              <div className="flex space-x-12 mt-16 mx-auto">
                <div className="flex items-center">
                  <Image src="/imgs/villa2.jpeg" width={300} height={300} />
                </div>
                <div className="flex items-center">
                  <Image src="/imgs/villa1.jpeg" width={300} height={300} />
                </div>
                <div className="flex items-center">
                  <Image src="/imgs/villa2.jpeg" width={300} height={300} />
                </div>
                <div className="flex items-center">
                  <Image src="/imgs/villa1.jpeg" width={300} height={300} />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-accent-1  py-12 flex justify-center">
            <div className="">
              <div className="mx-auto container font-bold text-2xl">
                Highlighted Features of Vitalus
              </div>
              <div className="flex overflow-x-auto space-x-8 mt-4 container">
                <Card title="Poker Nights" imgSrc="/imgs/villa1.jpeg"></Card>
                <Card title="Jungle Club" imgSrc="/imgs/villa1.jpeg"></Card>
                <Card title="Partnerships" imgSrc="/imgs/villa1.jpeg"></Card>
                <Card title="Vitalus DAO" imgSrc="/imgs/villa1.jpeg"></Card>
                <Card title="Job Board" imgSrc="/imgs/villa1.jpeg"></Card>
              </div>
              {/* <div className="mt-2">
                  <div className="font-bold text-lg">Vitalus Jungle Club</div>
                  This will be an exclusive club for our beloved Vitalians! Here you 
                  will be  able to stay up to date and gain access to everything that is happening in Vitalus.
                  This will include things like partnerships, special events, and anything else 
                  our community decides to take on. This will be a major source of value for the 
                  Vitalus accent-1!
                </div>
                <div className="mt-2">
                  <div className="font-bold text-lg">Vitalus DAO</div>
                  <div>
                    Vitalus DAO will be an on-chain multi-sig DAO (Decentralized Autonomous Organization) that will
                    control community funds stored in its treasury accounts. DAO members will be able to create and
                    vote on proposals for what to do with these funds. Whether that will be risking it all on Degen Coin Flip,
                    or investing in other Vitalus villas to raise floor price; the community will decide!
                  </div>
                  <div className="mt-1">
                    Any and all activities the DAO takes on, as well as any funds that it controls will be made public!
                    The community will ALWAYS know exactly what assets the DAO holds, and the trading of these assets will 
                    only be able to happen through vote.
                  </div>
                </div>
                <div className="mt-2">
                  <div className="font-bold text-lg">Vitalus Job Board</div>
                  <div>
                    We recognize that all Vitalians have unique skills and talents. We would like to make use of all of 
                    them in order help Vitalus reach its full potential. The Vitalus Job Board will be a place for 
                    community members to offer and request specific services from other members. Those who help out will 
                    receive MV coins or other rewards for their services.
                  </div>
                  <div className="mt-1">
                    Services can be simple like creating a graphic to post on our social accounts, or more complex
                    helping another Vitalian file their taxes... The idea here is that just about anything that 2 
                    people can agree on can be rewarded. We want the Vitalus community to thrive both socially and
                    economically, and we will do what we can to facilitate this goal.
                  </div>
                </div> */}
            </div>
          </section>
          <section className="bg-secondary py-12 flex flex-col justify-center text-white">
            <div className="flex flex-col mx-auto container lg:max-w-screen-xl">
              <div className="text-center font-bold text-3xl mb-4">About MetaVillage</div>
              <div className="flex flex-col">
                <div className="text-md">
                  <div className="flex flex-col space-y-2 mx-4 justify-center">
                    <div>
                      Metavillage gives you a high-fidelity way to express your digital
                      identity through the
                      <span className="font-semibold"> Villa Page</span>. It will allow
                      you to convey their digital persona, a way to broadcast yourself --
                      your interests, your hobbies -- to anyone willing to listen. This
                      will enable Villagers to interact on a deeper level than just
                      nicknames and singular PFPs.
                    </div>
                    <div>
                      The Villa Page will provide a worldwide connection to not only those
                      with common interest, but anyone looking to get to know you. It will
                      allow Villagers to connect to find various things: job
                      opportunities, assistance/advice, potential customers, your new best
                      friend, etc.. Your Villa Page will enable you to show the world who
                      you are truly are and find others of the same creed.
                    </div>
                  </div>
                  <div className="mt-8 flex justify-center flex-wrap text-lg">
                    <div>
                      <div className="">
                        Learn more about Metavillage and Villa Pages by reading the
                        <a
                          href="https://whitepaper.metavillage.app/"
                          target="_blank"
                          rel="norefferer"
                          className="font-bold hover:underline pl-1">
                          whitepaper
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section></section>
          <section className=" pt-12 flex justify-center">
            <div className="container mx-8">
              <div className="text-center font-bold text-2xl">Vitalus Contributors</div>
              <div className="mt-8 grid grid-cols-4 gap-x-24 gap-y-8 justify-items-center">
                <TeamProfile
                  name="SOL"
                  role="Vitalus Lead"
                  imgSrc="/imgs/profiles/sol.png"
                />
                <TeamProfile
                  name="nibbus"
                  role="Dev Lead"
                  imgSrc="/imgs/profiles/nibbus.png"
                />
                <TeamProfile
                  name="DSamuraiM"
                  role="Advisory Mod"
                  imgSrc="/imgs/profiles/dsm.jpg"
                />
                <TeamProfile
                  name="Drayke"
                  role="Developer"
                  imgSrc="/imgs/profiles/Drayke.png"
                />
                <TeamProfile
                  name="Cadevon"
                  role="Vitalus Sage"
                  imgSrc="/imgs/profiles/cadevon.png"
                />
                <TeamProfile
                  name="Apocryphus"
                  role="Creative Mod"
                  imgSrc="/imgs/profiles/apoc.png"
                />
                <TeamProfile
                  name="Wetiko"
                  role="Media Mod"
                  imgSrc="/imgs/profiles/wetiko.png"
                />
              </div>
            </div>
          </section>
        </div>
      </Page>
    </div>
  );
};

export default Home;
