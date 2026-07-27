import { useClock } from "../../hooks/useClock";

interface TopBarProps {
  displayNumber: string;
}

export function TopBar({ displayNumber }: TopBarProps) {
  const { date, time } = useClock();

  return (
    <div className="flex items-baseline justify-between px-2 py-1 text-xl text-teletext-white">
      <span>
        P{displayNumber.padEnd(3, " ")} &nbsp; SEEFAX 1 {displayNumber}
      </span>
      <span>
        {date} <span className="text-teletext-yellow">{time}</span>
      </span>
    </div>
  );
}
