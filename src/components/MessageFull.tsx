import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export const MessageFull = ({
  photo,
  timestamp,
  message,
  tag,
  names,
}: MessageFullProps) => {
  return (
    <div className="flex flex-row gap-4 justify-start items-start w-full">
      <Image
        src={photo}
        width={35}
        height={35}
        alt="avatar1"
        className="h-11 w-11 rounded-full"
      />
      <div className="flex flex-col gap-2 w-fit">
        <div className="flex flex-row flex-grow gap-2 items-center justify-between">
          <div className="flex flex-row gap-4 items-center">
            <label>{names.split(" ")[0] ?? names}</label>
            <label className="text-sm px-2 bg-background_var_01 rounded-md">
              {tag}
            </label>
            <button>
              <FaPlay color="white" size={14} />
            </button>
          </div>
          <label className="flex text-sm text-secondary_text">
            {timestamp}
          </label>
        </div>
        <div className="flex flex-col max-w-prose justify-end items-end p-2 rounded-lg bg-background_var_01 border-[0.5px] border-border_main">
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};
