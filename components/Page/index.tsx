import { BottomNav } from "@components/BottomNav";
import { Navbar } from "@components/Navbar";
import { Wallet } from "@components/Wallet";
import { FC } from "react";

export const Page: FC = ({ children }) => {
  return (
    <Wallet>
      <div className="flex flex-col min-h-screen bg-primary">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <BottomNav />
      </div>
    </Wallet>
  );
};
