"use client";

import { MessageFull } from "@/components/MessageFull";
import { Messages } from "@/components/Messages";
import { Sidebar } from "@/components/Sidebar";
import { trimMessage } from "@/lib/Utils";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";
import { PiMicrophoneBold } from "react-icons/pi";

export default function Home() {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

  return (
    <div className="flex h-dvh w-full">
      <main className="flex flex-row w-full py-3 px-5 gap-4 overflow-hidden">
        <Sidebar />
        <div className="flex flex-row flex-grow backdrop-blur-lg bg-background rounded-2xl border-[0.5px] border-border_main">
          <Messages />
          <div className="flex flex-col gap-3 items-center flex-grow p-5 h-full">
            <div className="flex flex-col justify-center items-center gap-2 mt-4">
              <Image
                src={"/a1.jpg"}
                width={45}
                height={45}
                alt="avatar1"
                className="h-14 w-14 rounded-full"
              />
              <label className="font-bold">Collen Mosses</label>
              <label className="text-sm text-secondary_text">
                {trimMessage(
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quos perspiciatis neque vero quasi fugit fugiat, laudantium est cum alias explicabo tempore vel non! Ipsa amet eum atque officia nulla.",
                  40
                )}
              </label>
              <label className="text-sm text-secondary_text">
                By @collen420
              </label>
            </div>
            <div className="flex flex-1 flex-col gap-5 mt-6 w-full overflow-y-auto">
              <MessageFull
                names="Collen Mosses"
                photo="/a1.jpg"
                tag="k.ai"
                timestamp="Sunday 11:40 am"
                message="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Deserunt consectetur voluptates veritatis mollitia in
                      ducimus est ex modi, nihil nostrum quos corporis, ullam
                      aliquid! Ab adipisci a corrupti tempore consequuntur!"
              />
              <MessageFull
                names="Kristin Kroenke"
                photo="/a3.jpg"
                tag="ui.4i"
                timestamp="Monday 11:40 am"
                message="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Deserunt consectetur voluptates veritatis mollitia in
                      ducimus est ex modi, nihil nostrum quos corporis, ullam
                      aliquid! Ab adipisci a corrupti tempore consequuntur!"
              />
            </div>
            <div className="flex flex-col p-3 justify-end w-full rounded-xl bg-background_var_01 z-10">
              <textarea
                ref={textareaRef}
                placeholder="Type here..."
                className="text-sm placeholder:text-white bg-transparent outline-none resize-none"
                value={text}
                onChange={handleChange}
              ></textarea>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                  <button>
                    <GrAttachment color="white" size={18} />
                  </button>
                  <button>
                    <PiMicrophoneBold color="white" size={18} />
                  </button>
                </div>
                <button className="flex justify-center items-center p-1 rounded-full border-[0.5px] border-border_main">
                  <IoIosSend color="white" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
