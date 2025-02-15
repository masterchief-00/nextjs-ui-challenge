import { MessageBrief } from "@/components/MessageBrief";
import { Messages } from "@/components/Messages";
import { Sidebar } from "@/components/Sidebar";
import { TimeSeparator } from "@/components/ui/TimeSeparator";
import { trimMessage } from "@/lib/Utils";
import Image from "next/image";
import { BiMessageSquareAdd } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex h-dvh w-full">
      <main className="flex flex-row w-full p-3 gap-4 overflow-hidden">
        <Sidebar />
        <div className="flex flex-row flex-grow backdrop-blur-lg bg-background rounded-2xl border-[0.5px] border-border_main">
          <Messages />
        </div>
      </main>
    </div>
  );
}
