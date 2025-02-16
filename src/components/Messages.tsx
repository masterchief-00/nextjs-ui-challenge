import { BiMessageSquareAdd } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { TimeSeparator } from "./ui/TimeSeparator";
import { MessageBrief } from "./MessageBrief";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect, useState } from "react";
import { toggleSidebar } from "@/lib/features/sidebar/sidebarSlice";
import { FaChevronRight } from "react-icons/fa";
import messages from "@/constants/messages.json";
import { formatTime, retrieveMessagesByCategory } from "@/lib/Utils";
import { setCurrentChat } from "@/lib/features/messages/loadChatSlice";

export const Messages = () => {
  const sidebarOpen = useAppSelector((state) => state.sidebarOpener.open);
  const activeChat = useAppSelector((state) => state.activeChat.currentChat);
  const dispatch = useAppDispatch();
  const categories: (keyof typeof categoryCount)[] = [
    "Today",
    "Yesterday",
    "Older",
  ];

  const [categoryCount, setCategoryCounter] = useState({
    Today: 0,
    Yesterday: 0,
    Older: 0,
  });
  const [messagesByCategory, setMessagesByCategory] = useState<SortedMessage[]>(
    []
  );

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  const loadChat = (selectedChat: Message) => {
    dispatch(
      setCurrentChat({
        id: selectedChat.id,
        photo: selectedChat.user.photo,
        names: selectedChat.user.names,
        handle: selectedChat.user.user_name,
        tag: selectedChat.tag,
        timestamp: selectedChat.timestamp,
        content: selectedChat.content,
      })
    );
  };

  const sortMessagesByCategories = (messages: Message[]) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    let sortedMessages = [];

    const lastWeek = new Date(today);
    lastWeek.setDate(lastWeek.getDate() - 7);

    let categoriesCounter = {
      Today: 0,
      Yesterday: 0,
      Older: 0,
    };

    for (const message of messages) {
      let messageDate = new Date(message.timestamp);

      let obj: SortedMessage = {
        category: null,
        message,
      };

      if (messageDate >= today) {
        obj.category = "Today";
        categoriesCounter.Today += 1;
      } else if (messageDate >= yesterday) {
        obj.category = "Yesterday";
        categoriesCounter.Yesterday += 1;
      } else {
        obj.category = "Older";
        categoriesCounter.Older += 1;
      }
      sortedMessages.push(obj);
    }
    setMessagesByCategory(sortedMessages);
    setCategoryCounter(categoriesCounter);
  };

  useEffect(() => {
    if (messagesByCategory.length > 0) {
      loadChat(messagesByCategory[0].message);
    }
  }, [messagesByCategory]);

  useEffect(() => {
    sortMessagesByCategories(messages);
  }, []);

  return (
    <div className="flex flex-col w-[28%] pt-4 px-4 gap-3 border-r-[0.5px] border-[rgba(255,255,255,0.4)]">
      {!sidebarOpen && (
        <div className="absolute left-0 top-28 z-10">
          <button
            onClick={handleToggle}
            className="flex justify-center items-center p-1 rounded-tr-full rounded-br-full border-l-0 border-[0.5px] border-border_main"
          >
            <FaChevronRight color="white" size={25} />
          </button>
        </div>
      )}

      <div className="flex flex-row justify-between items-center">
        <label>Message</label>
        <button className="flex justify-center items-center p-2 rounded-full border-[0.5px] border-border_main">
          <BiMessageSquareAdd color="white" size={16} />
        </button>
      </div>
      <div className="flex flex-row items-center gap-2 justify-between p-2 w-full bg-background_var_01 rounded-full border-[0.5px] border-border_main">
        <IoSearch color="white" size={20} />
        <input
          className="flex flex-grow w-5/6 bg-transparent outline-none placeholder:text-white placeholder:font-extralight placeholder:text-sm"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto">
        {categories.map(
          (category) =>
            categoryCount[category] > 0 && (
              <React.Fragment key={category}>
                <TimeSeparator day={category} />
                <div className="flex flex-col w-full gap-2 justify-center">
                  {retrieveMessagesByCategory(category, messagesByCategory).map(
                    (message) => (
                      <MessageBrief
                        key={message.message.id}
                        photo={message.message.user.photo}
                        names={message.message.user.names}
                        timestamp={formatTime(message.message.timestamp)}
                        message={message.message.content}
                        isActive={activeChat.id === message.message.id}
                        handleChatLoad={() => loadChat(message.message)}
                      />
                    )
                  )}
                </div>
              </React.Fragment>
            )
        )}
        <div className="w-full my-3" />
      </div>
    </div>
  );
};
