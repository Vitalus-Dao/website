import { getStateString } from "@helpers/mixins";
import { Proposal } from "@solana/spl-governance";
import { FC } from "react";

interface ProposalCardArgs {
  proposal: Proposal,
}

export const ProposalCard: FC<ProposalCardArgs> = ({ proposal }) => {

  return (
    <div className="bg-primary/30 rounded-md flex flex-col py-1 px-2">
      <div className="flex justify-between">
        <div>{proposal.name}</div>
        <div>{getStateString(proposal.state)}</div>
      </div>
      <div>

      </div>
    </div>
  );
};
