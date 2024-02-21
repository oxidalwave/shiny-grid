import Image from "next/image";
import Logout from "./Logout";
import Share from "./Share";

export interface LoggedInHeaderProps {
  seed: string;
}

export default function LoggedInHeader({ seed }: LoggedInHeaderProps) {
  return (
    <div className="p-2">
      <div className="flex">
        <a
          className="m-2 rounded bg-slate-700 p-2 hover:bg-slate-800"
          href="https://github.com/oxidalwave/shiny-grid"
        >
          <Image height={48} width={48} alt="github" src="/icons/github.png" />
        </a>
        <Share seed={seed} />
        <Logout />
      </div>
    </div>
  );
}
