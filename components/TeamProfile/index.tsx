import { FC } from "react";
import { ProfileArgs } from "@types";
import Image from "next/image";

export const TeamProfile: FC<ProfileArgs> = (
  { 
    imgSrc,
    name,
    role,
  }
) => {
  const scale = 100;

  return (
    <div style={{width: "100px"}} className="">
      <Image src={imgSrc} width={scale} height={scale} />
      <div className="text-center">
        {name}
      </div>
      <div className="text-center">
        {role}
      </div>
    </div>
  );
}