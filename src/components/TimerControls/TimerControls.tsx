import { FC, memo } from "react";
import "./TimerControls.css";

interface TimerControlsProps {
  onStart: () => void;
  onStop: () => void;
  timerOn: boolean;
  onReset: () => void;
  onLaps: () => void;
}
const TimerControls: FC<TimerControlsProps> = ({
  onStart,
  onStop,
  timerOn,
  onReset,
  onLaps,
}) => {
  return (
    <div className="timer-controls">
      {!timerOn && <button onClick={onStart}>Iniciar</button>}
      {timerOn && <button onClick={onStop}>Parar</button>}
      {timerOn && <button onClick={onLaps}>Volta</button>}
      <button onClick={onReset}>Zerar</button>
    </div>
  );
};

export default memo(TimerControls);
