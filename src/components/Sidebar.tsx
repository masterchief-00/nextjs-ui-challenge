"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BigButton } from "./ui/BigButton";
import { GoPlus } from "react-icons/go";
import { MenuButton } from "./ui/MenuButton";
import { TbHome2 } from "react-icons/tb";
import { RiSparkling2Fill, RiUserAddLine } from "react-icons/ri";
import { MdOutlineSms } from "react-icons/md";
import { AppStoreButton } from "./ui/AppStoreButton";
import { CurrentUser } from "./CurrentUser";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleSidebar } from "@/lib/features/sidebar/sidebarSlice";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const sidebarOpen = useAppSelector((state) => state.sidebarOpener.open);
  const dispatch = useAppDispatch();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  useEffect(() => {
    if (!sidebarOpen) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setIsHidden(true);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setIsHidden(false);
      setIsAnimating(false);
    }
  }, [sidebarOpen]);

  return (
    <div
      className={`flex flex-col gap-3 h-full ${sidebarOpen ? "w-1/5" : "w-0"} ${
        isHidden && "hidden"
      } p-4 bg-background backdrop-blur-lg rounded-2xl border-[0.5px] border-border_main transition-all duration-300 overflow-hidden`}
    >
      {!isAnimating && (
        <>
          <div className="flex flex-row w-full justify-between mb-2">
            <label className="font-bold text-lg">KCHAT</label>
            <button
              onClick={handleToggle}
              className="flex justify-center items-center p-1 rounded-full border-[0.5px] border-border_main"
            >
              <FaChevronLeft color="white" size={14} />
            </button>
          </div>
          <BigButton
            label="New Chat"
            icon={<GoPlus color="white" size={18} />}
          />
          <div className="flex flex-col mt-6 gap-2">
            <label className="text-sm font-extralight">MAIN MENU</label>
            <div className="flex flex-col w-full gap-2">
              <MenuButton
                label="Home"
                icon={<TbHome2 color="white" size={18} />}
              />
              <MenuButton
                label="Invitation"
                icon={<RiUserAddLine color="white" size={18} />}
              />
            </div>

            <BigButton
              label="Message"
              icon={<MdOutlineSms color="white" size={18} />}
            />
          </div>
          <div className="flex flex-1 flex-col gap-4 justify-end w-full">
            <AppStoreButton />
            <div className="flex flex-col gap-3 justify-center items-center p-3 rounded-2xl border-[0.5px] border-border_main gradient-background">
              <label className="font-bold text-xl">Go to Pro</label>
              <p className="w-full text-center">
                Try your experience for using more features
              </p>
              <button className="flex flex-row items-center gap-3 py-1 px-3 justify-center w-full rounded-lg bg-[rgba(255,255,255,0.08)] border-[0.5px] border-border_main hover:bg-gradient-to-b from-[rgba(75,231,182,0.01)] via-[rgba(47,237,212,0.08)] to-[rgba(81,213,218,0.18)]">
                <RiSparkling2Fill color="greenyellow" size={20} />
                Upgrade Pro
              </button>
            </div>
            <CurrentUser names="Naimur Rahman" photo={"/a1.jpg"} />
          </div>
        </>
      )}
    </div>
  );
};
