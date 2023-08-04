import Image from "next/image";
import Login from "./Login";

export default function LoggedOutHeader() {
  return (
    <div className="p-2">
      <div className="flex">
          <a
            className="rounded p-2 m-2 bg-slate-700 hover:bg-slate-800"
            href="https://github.com/oxidalwave/shiny-grid"
          >
            <Image
              height={28}
              width={28}
              alt="github"
              src="/icons/github.png"
            />
          </a>
          <Login />
        </div>
    </div>
  )
}