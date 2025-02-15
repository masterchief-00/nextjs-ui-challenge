import { Sidebar } from "@/components/Sidebar";
import { BiMessageSquareAdd } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex h-dvh w-full">
      <main className="flex flex-row w-full p-3 gap-4">
        <Sidebar />
        <div className="flex flex-row flex-grow backdrop-blur-lg bg-background rounded-2xl border-[0.5px] border-border_main">
          <div className="flex flex-col w-1/4 p-4 gap-3 border-r-[0.5px] border-[rgba(255,255,255,0.4)]">
            <div className="flex flex-row justify-between items-center">
              <label>Message</label>
              <button className="flex justify-center items-center p-2 rounded-full border-[0.5px] border-border_main">
                <BiMessageSquareAdd color="white" size={16} />
              </button>
            </div>
            <div className="flex flex-row items-center gap-2 justify-between p-2 w-full bg-[rgba(255,255,255,0.08)] rounded-full border-[0.5px] border-border_main">
              <IoSearch color="white" size={20} />
              <input
                className="flex flex-grow w-5/6 bg-transparent outline-none placeholder:text-white placeholder:font-extralight placeholder:text-sm"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
