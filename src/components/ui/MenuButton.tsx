import Link from "next/link";

export const MenuButton = ({ label, icon, action }: MenuButtonProps) => {
  return (
    <Link
      href={"#"}
      className="flex flex-row text-sm font-extralight hover:cursor-pointer hover:font-bold gap-3 p-2 w-full justify-start items-center transition-all"
    >
      {icon}
      {label}
    </Link>
  );
};
