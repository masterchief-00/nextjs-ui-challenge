export const BigButton = ({ label, icon }: BigButtonProps) => {
  return (
    <button className="flex flex-row items-center font-extralight text-sm gap-2 p-3 justify-start w-full rounded-full bg-[rgba(255,255,255,0.08)] border-[0.5px] border-border_main transition-all hover:bg-gradient-to-r from-[rgba(75,231,182,0.01)] via-[rgba(47,237,212,0.08)] to-[rgba(81,213,218,0.18)]">
      {icon}
      {label}
    </button>
  );
};
