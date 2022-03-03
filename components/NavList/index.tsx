import { NavLink } from "@components/NavLink";
import { FC } from "react";


export const NavList: FC = ({ children }) => {


  return (
    <ul className="flex flex-col md:flex-row mt-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <NavLink
        name={"Address Book"}
        link={"address_book"}
      />
      <NavLink
        name={"Jungle Club"}
        link={"jungle_club"}
      />
      {children}
    </ul>
  );
};
