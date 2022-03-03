import { FC } from "react";


interface NavLinkProps {
  name: string,
  link: string,
};

export const NavLink: FC<NavLinkProps> = ({ name, link }) => {


  return(
    <li className="p-4 md:p-0">
      <a href={link} className="ml-2 my-auto hover:text-green-500">
        {name}
      </a>
    </li>
  );
};
