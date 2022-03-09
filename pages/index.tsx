import { Page } from '@components/Page';
import { TeamProfile } from '@components/TeamProfile';
import Image from 'next/image';
import { FC } from 'react';
import { Logo } from '@components/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Card } from '@components/Card';
// import { Swiper, SwiperSlide } from 'swiper/';
// import { Navigation } from 'swiper';

// import "swiper/css";
// import "swiper/css/navigation";

const Home: FC = () => {
  const villaSize = 450;

  return (
    <div>
      {/* <SplashPage src="/imgs/splash0.png"> */}
      <Page>
        <div>
          <section className="">
            <div className="">
              {/* <div className="absolute w-full">
                  <Logo />
                </div> */}
              {/* <img id="splashPage" src="/imgs/splash1.png" /> */}
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
                <div className="bg-secondary/50 mt-4 rounded-lg flex space-x-16 px-8 py-3">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/VitalusLife">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size={'2x'}
                      className="text-slate-900 dark:text-white"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/vitaluslife/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size={'2x'}
                      className="text-slate-900 dark:text-white"
                    />
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://t.co/rq760C14KB">
                    <FontAwesomeIcon
                      icon={faDiscord}
                      size={'2x'}
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
                    {/* <div className="text-lg font-semibold tracking-widest">
                        Welcome to the Jungle
                      </div> */}
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
          {/* <div className="flex justify-center space-x-24 mt-24">
              <div className="dark:bg-green-900 flex justify-around">
                <div className="text-md my-4 mx-6">
                  <div className="font-semibold text-lg">
                    We will strive to accumulate Vitalus' social capital through:
                  </div>
                  <ul className="mt-2">
                    <li>- Poker Nights </li>
                    <li>- Online Networking Events </li>
                    <li>- Alpha Channel for Vitalians to explore NFT/ crypto world </li>
                    <li>
                      - Vitalian-Support-Vitalian (Channels to show support to fellow
                      Vitalians in any matters){' '}
                    </li>
                    <li>- Bonus rewards for active engagement & contributions </li>
                    <li>- Partnership with NFT OGs or Celebrities </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center">
                <Image src="/imgs/panther-logo.png" width={200} height={200} />
              </div>
            </div> */}
          <section className="bg-accent  py-12 flex flex-col justify-center text-black">
            <div className="flex flex-col mx-auto container">
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
                          rel="norefferer">
                          whitepaper
                        </a>
                      </div>
                      {/* <ul className="mt-2">
                          <li>- Display your NFT collection in your Villa Art Gallery</li>
                          <li>
                            - Link to your Metaverse homes. Let people jump in your Sandbox,
                            Decentraland, Portal, and other homes
                          </li>
                          <li>- Sign one another’s Villa Guestbooks</li>
                          <li>- Customize with fun themes, colors, fonts, and details</li>
                          <li>
                            - Showcase your social links and embeds: (Twitter, Discord,
                            Spotify, Twitch, etc.)
                          </li>
                        </ul> */}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 mt-8 mx-auto">
                  <div className="flex items-center">
                    <Image src="/imgs/villa2.jpeg" width={200} height={200} />
                  </div>
                  <div className="flex items-center">
                    <Image src="/imgs/villa1.jpeg" width={200} height={200} />
                  </div>
                  <div className="flex items-center">
                    <Image src="/imgs/villa2.jpeg" width={200} height={200} />
                  </div>
                  <div className="flex items-center">
                    <Image src="/imgs/villa1.jpeg" width={200} height={200} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-secondary  py-12 flex justify-center">
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
                  will be  able to stay up to dateand gain access to everything that is happening in Vitalus.
                  This will include things like partnerships, special events, and anything else 
                  our community decides to take on. This will be a major source of value for the 
                  Vitalus community!
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
                    only be able to happne through vote.
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
                {/* <TeamProfile name="mf777" role="Developer" imgSrc="/imgs/missing.jpg" /> */}
              </div>
            </div>
          </section>
        </div>
      </Page>
      {/* </SplashPage> */}
    </div>
  );
};

export default Home;
