import { trimMessage } from "@/lib/Utils";
import Image from "next/image";

export const MessageBrief = ({
  names,
  message,
  timestamp,
  photo,
  isActive,
  handleChatLoad,
}: MessageBriefProps) => {
  return (
    <div
      onClick={handleChatLoad}
      className={`flex flex-row w-full gap-3 px-2 py-3 rounded-lg border-border_main hover:cursor-pointer hover:bg-gradient-to-r from-[rgba(75,231,182,0.01)] via-[rgba(47,237,212,0.08)] to-[rgba(81,213,218,0.18)] ${
        isActive
          ? "bg-gradient-to-r from-[rgba(52,158,124,0.01)] via-[rgba(34,174,156,0.08)] to-[rgba(58,154,158,0.18)] border-[1.5px]"
          : "bg-background_var_01 border-[0.5px]"
      }`}
    >
      <Image
        src={photo}
        width={36}
        height={36}
        alt="avatar2"
        className="h-9 w-9 rounded-full"
      />
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <label>{names.split(" ")[0] ?? names}</label>
          <label className="text-xs text-secondary_text">{timestamp}</label>
        </div>
        <label className="text-xs">{trimMessage(message, 30)}</label>
      </div>
    </div>
  );
};
