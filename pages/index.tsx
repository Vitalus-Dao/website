import { BottomNav } from '@components/BottomNav';
import { Navbar } from '@components/Navbar';
import { Page } from '@components/Page';
import { TeamProfile } from '@components/TeamProfile';
import { Wallet } from '@components/Wallet';
import Image from 'next/image';
import { FC } from 'react';

const Home: FC = () => {
  const villaSize = 450;

  return (
    <Page>
      <div>
        <div className="mt-12 mb-8 flex justify-center space-x-16">
          <div className="my-auto">
            <Image src="/imgs/vitalus-villa.jpeg" width={villaSize} height={villaSize} />
          </div>
          <div
            style={{ width: '550px' }}
            className="dark:bg-green-900 flex justify-center">
            <div className="mx-8 flex flex-wrap justify-center">
              <div className="text-center mt-4">
                <div className="text-2xl font-bold">This is Vitalus</div>
                <div className="text-lg font-semibold tracking-widest">
                  Welcome to the Jungle
                </div>
              </div>
              <div className="text-lg mb-4 grow">
                <div className="">
                  Vitalus aims to develop a neighbourhood with unique identity and
                  culture. Rich, Magnetic, Charismatic natural performers with striking
                  passion that dominates attention! We are VITALIANS !
                </div>
                <div className="mt-4">
                  Our community is overwhelmed with joy and laughters enjoying myriad of
                  interactions within our beloved Vitalus neighbourhood. It is just a
                  beginning of our journey but we are all looking forward to share the
                  glory of success with everyone in Vitalus!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-16 mt-24">
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
        </div>
        <div className="mt-36 flex justify-center">
          <div className="">
            <div className="text-center font-bold text-2xl mb-4">About MetaVillage</div>
            <div className="grid grid-cols-4 justify-items-center">
              <div className="flex items-center">
                <Image src="/imgs/villa1.jpeg" width={250} height={250} />
              </div>
              <div className="text-lg col-span-2">
                <div className="flex flex-wrap space-y-2">
                  <div>
                    Metavillage gives you a high-fidelity way to express your digital
                    identity through the
                    <span className="font-semibold"> Villa Page</span>. It will allow you
                    to convey their digital persona, a way to broadcast yourself -- your
                    interests, your hobbies -- to anyone willing to listen. This will
                    enable Villagers to interact on a deeper level than just nicknames and
                    singular PFPs.
                  </div>
                  <div>
                    The Villa Page will provide a worldwide connection to not only those
                    with common interest, but anyone looking to get to know you. It will
                    allow Villagers to connect to find various things: job opportunities,
                    assistance/advice, potential customers, your new best friend, etc..
                    Your Villa Page will enable you to show the world who you are truly
                    are and find others of the same creed.
                  </div>
                </div>
                <div className="mt-8 flex justify-center flex-wrap text-lg">
                  <div>
                    <div className="font-semibold">
                      Specifically, owning a Villa will alow you to:
                    </div>
                    <ul className="mt-2">
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
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Image src="/imgs/villa2.jpeg" width={250} height={250} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 flex justify-center">
          <div className="w-2/3">
            <div className="font-bold text-2xl">
              Other Key Features in the Works:
            </div>
            <div className="mt-2">
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
            </div>
          </div>
        </div>
        <div className="mt-32 flex justify-center">
          <div className="w-2/3">
            <div className="text-center font-bold text-2xl">Vitalus Contributors</div>
            <div className="mt-8 grid grid-cols-4 gap-y-4 justify-items-center">
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
        </div>
      </div>
    </Page>
  );
};

export default Home;
