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
          <Image src="/imgs/vitalus-villa.jpeg" width={villaSize} height={villaSize} />
          <div className="max-w-lg dark:bg-green-900 w-2/3">
            <div className="text-center mt-8">
              <div className="text-2xl font-bold">
                This is Vitalus
              </div>
              <div className="text-lg font-semibold tracking-widest">
                Welcome to the Jungle
              </div>
            </div>
            <div className="text-center text-sm mt-8">
              A place where the charismatic thrive, their passion as persistent as the
              towering trees that surround them.
            </div>
            <div className="text-center text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, condimentum bibendum purus amet. 
              A ut elit in nascetur consectetur vitae. Nec viverra a ornare viverra. Sollicitudin orci ornare
               eget faucibus eget. Ut quis vitae orci nisl scelerisque ipsum tellus tristique.
            </div>
            <div className="text-center text-sm mt-4">
              Aenean aliquet egestas facilisi odio volutpat convallis dictumst eu ut. 
              In vitae massa vestibulum consectetur ultricies in odio. Tristique nec 
              ornare purus pretium nisl turpis lacus, metus. Aliquet nunc, proin amet 
              amet velit nulla libero. Eleifend commodo neque ornare sed amet pretium 
              ultrices. Lectus eu est id neque gravida.
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="w-2/3 ">
            <div className="text-center font-bold text-2xl">
              About MetaVillage
            </div>
            <div className="text-center mt-4">
              Mattis justo, gravida ut adipiscing nulla auctor dictumst lobortis. Iaculis
               consectetur eget gravida leo faucibus et vitae hendrerit. At enim, amet 
               malesuada sem amet id faucibus ut blandit. Congue tellus morbi nec nullam. 
               Consequat ut ultrices interdum iaculis gravida aliquam orci ac massa. Sit 
               egestas fames lectus semper viverra pellentesque sollicitudin. Blandit massa, 
               dui mi, in blandit. Ac facilisis malesuada pharetra nunc sed. Turpis vitae 
               blandit faucibus semper felis posuere. Ullamcorper magna nulla adipiscing fringilla 
               quis iaculis nibh ut erat. Duis in nunc amet, amet. Faucibus volutpat tellus, 
               dignissim quam. Turpis accumsan nisi, enim pellentesque leo. Pretium nisi, 
               sit malesuada sit nec pharetra, quisque placerat nunc. Dolor nec in sem senectus 
               nisl urna dignissim fames. Porttitor blandit et eu eu nascetur vitae, massa massa. 
               Dictumst blandit ultrices praesent eget. Amet quis nulla purus aliquet habitant 
               massa varius turpis ut.        
            </div>
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
