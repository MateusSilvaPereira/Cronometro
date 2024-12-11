import { memo, useEffect, useState } from "react";
import LapList from "../LapList/LapList";
import TimerControls from "../TimerControls/TimerControls";
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import "./Timer.css";

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(false);
  const [laps, setLaps] = useState<string[]>([]);

  type Timer = NodeJS.Timeout | number;

  const formatarTime = () => {
    const minutes = ("0" + (Math.floor(milliseconds / 6000) % 60)).slice(-2);
    const seconds = ("0" + (Math.floor(milliseconds / 1000) % 60)).slice(-2);
    const centiseconds = ("0" + (Math.floor(milliseconds / 10) % 100)).slice(
      -2
    );

    return `${minutes}:${seconds}:${centiseconds}`;
  };

  const startTimer = (): Timer => {
    return setInterval(() => {
      setMilliseconds((prevMilliseconds) => prevMilliseconds + 10);
    }, 10);
  };

  const stopTimer = (interval: Timer | null): void => {
    if (interval !== null) {
      clearInterval(interval as never);
    }
  };

  const resetTimer = () => {
    setMilliseconds(0);
    setTimerOn(false);
    setLaps([]);
  };

  const addLap = () => {
    setLaps([...laps, formatarTime()]);
  };

  useEffect(() => {
    let interval: Timer | null = null;

    if (timerOn) {
      interval = startTimer();
    } else {
      stopTimer(interval);
      interval = null;
    }

    return () => stopTimer(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerOn]);

  return (
    <div className="timer-container">
      <TimerDisplay time={formatarTime()} />
      <TimerControls
        onStart={() => setTimerOn(true)}
        onStop={() => setTimerOn(false)}
        timerOn={timerOn}
        onReset={resetTimer}
        onLaps={addLap}
      />
      <LapList laps={laps} />
    </div>
  );
};

export default memo(Timer);
