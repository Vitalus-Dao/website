import { Page } from '@components/Page';
import { TeamProfile } from '@components/TeamProfile';
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
          <div style={{ width: '550px' }} className="dark:bg-green-900 flex justify-center">
            <div className="mx-8 flex flex-wrap justify-center">
              <div className="text-center mt-4">
                <div className="text-2xl font-bold">
                  This is Vitalus
                </div>
                <div className="text-lg font-semibold tracking-widest">
                  Welcome to the Jungle
                </div>
              </div>
              <div className="text-lg mb-4 grow">
                <div className="">
                  Vitalus aims to develop a neighbourhood with unique identity and culture. Rich, Magnetic, Charismatic 
                  natural performers with striking passion that dominates attention! We are VITALIANS !
                </div>
                <div className="mt-4">
                Our community is overwhelmed with joy and laughters enjoying myriad of interactions within our beloved Vitalus neighbourhood. 
                It is just a beginning of our journey but we are all looking forward to share the glory of success with everyone in Vitalus! 
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
                <li>- Online Networking Event </li> 
                <li>- Alpha Channel for Vitalians to explore NFT/ crypto world </li>
                <li>- Vitalian-Support-Vitalian (Channels to show support to fellow Vitalians in any matters) </li>
                <li>- Bonus rewards for active engagement & contributions </li>
                <li>- Partnership with NFT OG or Celebrities </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <Image src="/imgs/panther-logo.png" width={200} height={200} />
          </div>
        </div>
        <div className="mt-36 flex justify-center">
          <div className="">
            <div className="text-center font-bold text-2xl mb-4">
              About MetaVillage
            </div>
            <div className="grid grid-cols-4 justify-items-center">
              <div className="flex items-center">
                <Image src="/imgs/villa1.jpeg" width={250} height={250} />
              </div>
              <div className="text-lg col-span-2">
                <div className="flex flex-wrap space-y-2">
                  <div>
                    Metavillage gives you a high-fidelity way to express your digital identity through the 
                    <span className="font-semibold"> Villa Page</span>. 
                    It will allow you to convey their digital persona, a way to broadcast yourself -- your interests,
                    your hobbies -- to anyone willing to listen. This will enable Villagers to interact on a deeper 
                    level than just nicknames and singular PFPs.
                  </div>
                  <div>
                    The Villa Page will provide a worldwide connection to not only those with common interest, 
                    but anyone looking to get to know you. It will allow Villagers to connect to find various things: 
                    job opportunities, assistance/advice, potential customers, your new best friend, etc.. Your Villa Page will 
                    enable you to show the world who you are truly are and find others of the same creed.
                  </div>
                </div>
                <div className="mt-8 flex justify-center flex-wrap text-lg">
                  <div>
                    <div className="font-semibold">
                      Specifically, owning a Villa will alow you to: 
                    </div>
                    <ul className="mt-2">
                      <li>- Display your NFT collection in your Villa Art Gallery</li>
                      <li>- Link to your Metaverse homes. Let people jump in your Sandbox, Decentraland, Portal, and other homes</li>
                      <li>- Sign one another’s Villa Guestbooks</li>
                      <li>- Customize with fun themes, colors, fonts, and details</li>
                      <li>- Showcase your social links and embeds: (Twitter, Discord, Spotify, Twitch, etc.)</li>
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
            <div className="font-bold text-xl">
              Other Key Features the Vitalus Community is Working on:
            </div>
            <div className="mt-2">
              <div className="font-bold">Vitalus City Hall</div>
              Vitalus City Hall is an exclusive member club for our beloved Vitalians! 
              You will be enjoying collab social events and meet different people here 
              from other legit NFT projects!
            </div>
            <div className="mt-2">
              <div className="font-bold">VitalusDao</div>
              VitalusDAO aims at building a strong sense of belongings and collective 
              ownership via community governance, incentivising Vitalians and exclusive 
              access to VitalusDAO related activities/ events 
            </div>
            <div className="mt-2">
              <div className="font-bold">Vitalus Council</div>
              Vitalus Council is a conceptual way to describe the Vitalus-Round-Table.  
              Adhere to our vision of "Community governance governed by the community", 
              we are dedicated to utilise every talent of our Vitalians. Every Vitalian 
              are welcome to volunteer for any kind of works needed for Vitalus development 
              such as managing social media accounts, digital design, engineering, 
              partnership & networking, event planning, merchandising, and more!
            </div>
          </div>
        </div>
        <div className="mt-32 flex justify-center">
          <div className="w-2/3">
            <div className="text-center font-bold text-lg">
              Vitalus Contributors
            </div>
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
                imgSrc="/imgs/missing.jpg"
              />
              <TeamProfile 
                name="mf777"
                role="Developer"
                imgSrc="/imgs/missing.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;
