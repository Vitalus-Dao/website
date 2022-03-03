import { Navbar } from '@components/Navbar';
import { TeamProfile } from '@components/TeamProfile';
import { Wallet } from '@components/Wallet';
import Image from 'next/image';
import { FC } from 'react';

const Home: FC = () => {
  const villaSize = 500;

  return (
    <>
      <Wallet>
        <Navbar />
        <div className="mt-12 mb-8 flex justify-center">
          <div className="my-auto">
            <Image src="/imgs/vitalus-villa.jpeg" width={villaSize} height={villaSize} />
          </div>
          <div className="max-w-lg dark:bg-green-900 w-2/3">
            <div className="text-center mt-8">
              <div className="text-2xl font-bold">
                This is Vitalus
              </div>
              <div className="text-lg font-semibold tracking-widest">
                Welcome to the Jungle
              </div>
            </div>
            <div className="text-center text-sm mt-4">
              Vitalus aims to develop a neighbourhood with unique identity and culture. Rich, Magnetic, Charismatic 
              natural performers with striking passion that dominates attention! We are VITALIANS !
            </div>
            <div className="text-center text-sm mt-4">
            Our community is overwhelmed with joy and laughters enjoying myriad of interactions within our beloved Vitalus neighbourhood. 
            It is just a beginning of our journey but we are all looking forward to share the glory of success with everyone in Vitalus! 
            </div>
            <div className="text-sm mt-4">
              We will strive to accumulate Vitalus' social capital through:
              <ul>
                <li>- Poker Nights </li>
                <li>- Online Networking Event </li> 
                <li>- Alpha Channel for Vitalians to explore NFT/ crypto world </li>
                <li>- Vitalian-Support-Vitalian (Channels to show support to fellow Vitalians in any matters) </li>
                <li>- Bonus rewards for active engagement & contributions </li>
                <li>- Partnership with NFT OG or Celebrities </li>
             </ul>
            </div>
            {/* <div className="text-center text-sm mt-4">
              Aenean aliquet egestas facilisi odio volutpat convallis dictumst eu ut. 
              In vitae massa vestibulum consectetur ultricies in odio. Tristique nec 
              ornare purus pretium nisl turpis lacus, metus. Aliquet nunc, proin amet 
              amet velit nulla libero. Eleifend commodo neque ornare sed amet pretium 
              ultrices. Lectus eu est id neque gravida.
            </div> */}
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="w-2/3 ">
            <div className="text-center font-bold text-2xl">
              About MetaVillage
            </div>
            <div className="text-center mt-4">
              The major feature of MV is the Villa Page. The hub for your crypto identity. 
              As the Metaverse grows, you will have many collectibles, homes, and identities. 
              The Villa page will allow you to show the world who you are and what you are 
              interested in one synthesized platform. Think Linktree, but for your crypto identity. 
              Unlock further personalization and functionality for your page by buying 
              Upgrades with Coins.         
            </div>
            <div className="text-center mt-4">
              Having a higher-fidelity way of expressing your digital identity will allow Villagers 
              to interact at a deeper level than just nicknames and singular PFPs. It will be like 
              your Facebook / Twitter/ LinkedIn profile but ALL-IN-ONE Village Page providing worldwide 
              connection of people not only those with common interest but also connections that will 
              help you on various of things: assistance, advices, job opportunities, potential customers, 
              etc.. Your Villa Page will show the world who you are. People will be able to get to know 
              more about you and projects you have participated in via your Villa Page.
            </div>
            <div className="mt-4">
              Key features of owning a Villa: 
              <ul>
                <li>- Display your NFT collection in your Villa Art Gallery</li>
                <li>- Link to your Metaverse homes. Let people jump in your Sandbox, Decentraland, Portal, and other homes</li>
                <li>- Sign one another’s Villa Guestbooks</li>
                <li>- Customize with fun themes, colors, fonts, and details</li>
                <li>- Showcase your social links and embeds: (Twitter, Discord, Spotify, YouTube, SoundCloud, Twitch)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          Other Key Features the Vitalus Community is Workin on:
          <div>
            <div className="font-bold">Vitalus City Hall</div>
            Vitalus City Hall is an exclusive member club for our beloved Vitalians! 
            You will be enjoying collab social events and meet different people here 
            from other legit NFT projects!
          </div>
          <div>
            <div className="font-bold">VitalusDao</div>
            VitalusDAO aims at building a strong sense of belongings and collective 
            ownership via community governance, incentivising Vitalians and exclusive 
            access to VitalusDAO related activities/ events 
          </div>
          <div>
            <div className="font-bold">Vitalus Council</div>
            Vitalus Council is a conceptual way to describe the Vitalus-Round-Table.  
            Adhere to our vision of "Community governance governed by the community", 
            we are dedicated to utilise every talent of our Vitalians. Every Vitalian 
            are welcome to volunteer for any kind of works needed for Vitalus development 
            such as managing social media accounts, digital design, engineering, 
            partnership & networking, event planning, merchandising, and more!
          </div>
        </div>
        <div>
          <TeamProfile 
            name="nibbus"
            role="Dev Lead"
            imgSrc="/imgs/profiles/nibbus.png"
          />
        </div>
      </Wallet>
    </>
  );
};

export default Home;
