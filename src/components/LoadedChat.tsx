"use client";

import { trimMessage } from "@/lib/Utils";
import Image from "next/image";
import { MessageFull } from "./MessageFull";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { PiMicrophoneBold } from "react-icons/pi";
import { IoIosSend } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { sendReply } from "@/lib/features/messages/repliesSlice";

export const LoadedChat = () => {
  const activeChat = useAppSelector((state) => state.activeChat.currentChat);
  const replies = useAppSelector((state) => state.chatReply.replies);
  const dispatch = useAppDispatch();

  const [text, setText] = useState("");
  const [repliesToCurrentMessage, setRepliesToCurrentMessage] = useState<
    ChatReply[]
  >([]);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSend = () => {
    let uuid = crypto.randomUUID();

    if (text) {
      dispatch(
        sendReply({
          id: uuid,
          photo: "/a1.jpg",
          names: "Naimur Rahman",
          handle: "naimurahman",
          tag: activeChat.tag,
          content: text,
          timestamp: new Date(Date.now()).toISOString(),
          parent_message_id: activeChat.id,
        })
      );

      setText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

  useEffect(() => {
    if (replies.length > 0) {
      let currentReplies = [];
      for (const reply of replies) {
        if (reply.parent_message_id === activeChat.id) {
          currentReplies.push(reply);
        }
      }

      setRepliesToCurrentMessage(currentReplies);
    }
  }, [replies, activeChat.id]);

  return (
    <div className="flex flex-col gap-3 items-center flex-grow p-5 h-full">
      {activeChat.id ? (
        <>
          <div className="flex flex-col justify-center items-center gap-2 mt-4">
            <Image
              src={activeChat.photo || "/a1.jpg"}
              width={45}
              height={45}
              alt="user"
              className="h-14 w-14 rounded-full"
            />
            <label className="font-bold">{activeChat.names}</label>
            <label className="text-sm text-secondary_text">
              {trimMessage(activeChat.content, 40)}
            </label>
            <label className="text-sm text-secondary_text">
              By @{activeChat.handle}
            </label>
          </div>
          <div className="flex flex-1 flex-col gap-5 mt-6 w-full overflow-y-auto">
            <MessageFull
              names={activeChat.names || "..."}
              photo={activeChat.photo || "/a1.jpg"}
              tag={activeChat.tag || "..."}
              timestamp={activeChat.timestamp || "..."}
              message={activeChat.content || "..."}
              isReply={false}
            />

            {repliesToCurrentMessage.map((reply) => (
              <MessageFull
                key={reply.id}
                names={reply.names || "..."}
                photo={reply.photo || "/a1.jpg"}
                tag={reply.tag || "..."}
                timestamp={reply.timestamp || "..."}
                message={reply.content || "..."}
                isReply={true}
              />
            ))}
          </div>
          <div className="flex flex-col p-3 justify-end w-full rounded-xl bg-background_var_01 z-10">
            <textarea
              ref={textareaRef}
              placeholder="Type here..."
              className="text-sm placeholder:text-white bg-transparent outline-none resize-none"
              value={text}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
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
              <button
                onClick={handleSend}
                className="flex justify-center items-center p-1 rounded-full border-[0.5px] border-border_main"
              >
                <IoIosSend color="white" size={18} />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center">
          <label>No chat selected</label>
        </div>
      )}
    </div>
  );
};
