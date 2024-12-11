import { FC, memo } from "react";

import "./TimerDisplay.css";

interface TimerDisplayProps {
  time: string;
}
const TimerDisplay: FC<TimerDisplayProps> = ({ time }) => {
  return <div className="timer-display">{time}</div>;
};

export default memo(TimerDisplay);
