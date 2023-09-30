import { useState } from "react";

let interval = null;

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [stopwatchState, setStopwatchState] = useState("reset");

  const handleStart = () => {
    setStopwatchState("started");

    interval = setInterval(() => {
      setTimer((_timer) => _timer + 10);
    }, 10);
  };

  const handlePause = () => {
    setStopwatchState("paused");
    clearInterval(interval);
    interval = null;
  };

  const handleReset = () => {
    setStopwatchState("reset");
    clearInterval(interval);
    interval = null;
    setTimer(0);
  };

  return (
    <div className="container">
      <div className="stopwatch">
        <h1>{timer}</h1>
        <div className="button-group">
          <button
            type="button"
            onClick={handleStart}
            disabled={stopwatchState === "started"}
          >
            Start
          </button>
          <button
            type="button"
            onClick={handlePause}
            disabled={["paused", "reset"].includes(stopwatchState)}
          >
            Pause
          </button>
          <button
            type="button"
            onClick={handleReset}
            disabled={stopwatchState === "reset"}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
