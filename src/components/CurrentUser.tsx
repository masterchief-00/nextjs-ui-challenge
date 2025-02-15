import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

export const CurrentUser = ({ names, photo }: CurrentUserProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-4">
        <Image
          src={photo}
          width={40}
          height={40}
          alt="avatar1"
          className="h-12 w-12 rounded-full"
        />
        <label>{names}</label>
      </div>

      <button className="flex justify-center items-center p-1 rounded-full border-[0.5px] border-border_main">
        <FaAngleDown color="white" size={18} />
      </button>
    </div>
  );
};
