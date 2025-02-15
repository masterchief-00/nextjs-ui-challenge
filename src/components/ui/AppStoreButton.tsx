import { FaApple } from "react-icons/fa";

export const AppStoreButton = () => {
  return (
    <button className="flex flex-row items-center gap-2 p-2 justify-start w-full rounded-lg bg-[rgba(255,255,255,0.08)] border-[0.5px] border-border_main hover:bg-gradient-to-r from-[rgba(75,231,182,0.01)] via-[rgba(47,237,212,0.08)] to-[rgba(81,213,218,0.18)]">
      <FaApple color="white" size={35} />
      <span className="flex flex-col">
        <label className="text-xs text-secondary_text text-left w-full">
          Download on the
        </label>
        <label className="text-md font-bold text-left w-full hover:cursor-pointer">
          App Store
        </label>
      </span>
    </button>
  );
};
