"use client";

import { LoadedChat } from "@/components/LoadedChat";
import { Messages } from "@/components/Messages";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-dvh w-full">
      <main className="flex flex-row w-full py-3 px-5 gap-4 overflow-hidden">
        <Sidebar />
        <div className="flex flex-row flex-grow backdrop-blur-lg bg-background rounded-2xl border-[0.5px] border-border_main">
          <Messages />
          <LoadedChat />
        </div>
      </main>
    </div>
  );
}
