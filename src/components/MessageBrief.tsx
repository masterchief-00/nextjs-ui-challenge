import { trimMessage } from "@/lib/Utils";
import Image from "next/image";

export const MessageBrief = ({
  names,
  message,
  timestamp,
  photo,
}: MessageBriefProps) => {
  return (
    <div className="flex flex-row w-full gap-3 bg-background_var_01 px-2 py-3 rounded-lg border-[0.5px] border-border_main">
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
          <label className="text-xs">{timestamp}</label>
        </div>
        <label className="text-xs">{trimMessage(message, 30)}</label>
      </div>
    </div>
  );
};
