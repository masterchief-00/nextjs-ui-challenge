import Link from "next/link";

export const MenuButton = ({ label, icon, action }: MenuButtonProps) => {
  return (
    <Link
      href={"#"}
      className="flex flex-row gap-3 p-2 w-full justify-start items-center transition-all"
    >
      {icon}
      <label className="text-sm font-extralight w-full hover:cursor-pointer hover:font-bold">
        {label}
      </label>
    </Link>
  );
};
