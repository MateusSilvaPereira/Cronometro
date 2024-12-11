import { FC, memo } from "react";
import "./LapList.css";

interface LapListProps {
  laps: string[];
}
const LapList: FC<LapListProps> = ({ laps }) => {
  return (
    <div className="timer-laps">
      <h3>Voltas:</h3>
      <ul>
        {laps.map((lap, index: number) => (
          <li key={index}>
            volta {index + 1}: {lap}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(LapList);
