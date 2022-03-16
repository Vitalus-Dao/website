import { ProposalCard } from "@components/ProposalCard";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GOVERNANCE_PROGRAM_ADDRESS } from "@helpers/constants";
import { getRealmPDA } from "@helpers/pdas";
import { getAllProposals, Proposal } from "@solana/spl-governance";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { FC, useCallback, useEffect, useState } from "react";


export const Proposals: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [proposals, setProposals] = useState<Proposal[]>([])

  const getProposals = useCallback(async () => {
    const props = await getAllProposals(
      connection,
      GOVERNANCE_PROGRAM_ADDRESS,
      await getRealmPDA(),
    );
    
    let ret: Proposal[] = [];

    props.forEach((prop) => {
      ret = ret.concat(
        prop.map((p) => {
          // console.log(p.owner.toString())
          return p.account;
        }),
      );
    });

    return ret;
  }, [connection, publicKey]);

  useEffect(() => {
    if(connection){
      getProposals().then((props) => {
        setProposals(props);
      })
    }
  }, [connection]);

  return (
    <div className="bg-secondary rounded-lg flex flex-col justify-center px-8 pt-4 pb-6 grow">
      <div className="font-semibold text-xl">Proposals:</div>
      <div className="flex justify-between items-center">
        <div className="ml-2">{proposals.length} Proposals</div>
        <div className="space-x-2">
          <button className="bg-accent-1 rounded-full py-2 px-4 font-semibold hover:bg-accent-2">
            New
          </button>
          <button className="bg-primary/40 rounded-md p-2 font-semibold hover:bg-primary/60">
            Filter 
            <FontAwesomeIcon
              icon={faAngleDown}
              size={'xs'}
              className="pl-2"
            />
          </button>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        {proposals.map((prop, i) => {
          return (
            <ProposalCard proposal={prop} key={i} />
          )
        })}
      </div>
    </div>
  );
};
