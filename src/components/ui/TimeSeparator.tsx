export const TimeSeparator = ({ day }: { day: string }) => {
  return (
    <div className="flex flex-row justify-center items-center w-full my-1">
      <div className="w-1/4 h-[0.8px] bg-gradient-to-r from-[rgba(255,255,255,0.01)] to-[rgba(159,157,157,0.64)]" />
      <label className="text-xs py-1 px-4 rounded-2xl bg-background_var_01">
        {day}
      </label>
      <div className="w-1/4 h-[0.8px] bg-gradient-to-l from-[rgba(255,255,255,0.01)] to-[rgba(159,157,157,0.64)]" />
    </div>
  );
};
