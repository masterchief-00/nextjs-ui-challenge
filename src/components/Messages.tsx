import { BiMessageSquareAdd } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { TimeSeparator } from "./ui/TimeSeparator";
import { MessageBrief } from "./MessageBrief";

export const Messages = () => {
  return (
    <div className="flex flex-col w-[28%] pt-4 px-4 gap-3 border-r-[0.5px] border-[rgba(255,255,255,0.4)]">
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
        <TimeSeparator day="Today" />
        <div className="flex flex-col w-full gap-2 justify-center">
          <MessageBrief
            photo="/a2.jpg"
            names="Colleen Shane"
            timestamp="03:54 PM"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi provident possimus minus, inventore doloremque hic quibusdam sed, fuga et architecto assumenda obcaecati eos? Minus magni sequi ab nam deserunt!"
          />
          <MessageBrief
            photo="/a3.jpg"
            names="Max Cleen"
            timestamp="03:54 PM"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi provident possimus minus, inventore doloremque hic quibusdam sed, fuga et architecto assumenda obcaecati eos? Minus magni sequi ab nam deserunt!"
          />
          <MessageBrief
            photo="/a4.jpg"
            names="Soham Jane"
            timestamp="03:54 PM"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi provident possimus minus, inventore doloremque hic quibusdam sed, fuga et architecto assumenda obcaecati eos? Minus magni sequi ab nam deserunt!"
          />
          <MessageBrief
            photo="/a5.jpg"
            names="Kristin John"
            timestamp="03:54 PM"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi provident possimus minus, inventore doloremque hic quibusdam sed, fuga et architecto assumenda obcaecati eos? Minus magni sequi ab nam deserunt!"
          />
          <MessageBrief
            photo="/a9.jpg"
            names="Eduardo Jenkins"
            timestamp="03:54 PM"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi provident possimus minus, inventore doloremque hic quibusdam sed, fuga et architecto assumenda obcaecati eos? Minus magni sequi ab nam deserunt!"
          />

          <TimeSeparator day="Yesterday" />

          <MessageBrief
            photo="/a6.jpg"
            names="Dainne Kroenke"
            timestamp="03:54 PM"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi provident possimus minus, inventore doloremque hic quibusdam sed, fuga et architecto assumenda obcaecati eos? Minus magni sequi ab nam deserunt!"
          />
          <MessageBrief
            photo="/a7.jpg"
            names="Arlene Glazer"
            timestamp="03:54 PM"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi provident possimus minus, inventore doloremque hic quibusdam sed, fuga et architecto assumenda obcaecati eos? Minus magni sequi ab nam deserunt!"
          />
          <MessageBrief
            photo="/a8.jpg"
            names="Shane McDane"
            timestamp="03:54 PM"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi provident possimus minus, inventore doloremque hic quibusdam sed, fuga et architecto assumenda obcaecati eos? Minus magni sequi ab nam deserunt!"
          />
          <div className="w-full my-3" />
        </div>
      </div>
    </div>
  );
};
