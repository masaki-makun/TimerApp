"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button, TextField } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReplayIcon from "@mui/icons-material/Replay";
import PauseIcon from "@mui/icons-material/Pause";

// type Props = {
//   initialCount: number;
// };

const Timer = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const intervalRef = useRef(null);

  function handleStart() {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
    setStatus("Running");
  }

  function handlePause() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setStatus("Pause");
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
    setStatus("");
  }

  const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
  const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
  const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
  const hours = `0${Math.floor(time / 3600000)}`.slice(-2);

  const ResetButton = () => {
    let button;
    if ((isRunning && time > 0) || (!isRunning && time === 0)) {
      button = (
        <button
          className="text-white bg-none w-14 h-14 rounded-full border-2 border-pink-900 opacity-20 "
          disabled
          onClick={handleReset}
        >
          <ReplayIcon />
        </button>
      );
    } else if (!isRunning && time === 0) {
      button = (
        <button
          className="text-white bg-none hover:bg-none hover:scale-105 w-14 h-14 rounded-full border-2 border-pink-900 transition"
          onClick={handleReset}
        >
          <ReplayIcon />
        </button>
      );
    } else {
      button = (
        <button
          className="text-white bg-none hover:bg-none  hover:scale-105 w-14 h-14 rounded-full border-2 border-pink-900 transition"
          onClick={handleReset}
        >
          <ReplayIcon />
        </button>
      );
    }
    return button;
  };

  return (
    <div className="w-full h-screen relative bg-zinc-800 flex items-center justify-center">
      <div className="w-96 h-[40rem] px-16 py-10 bg-zinc-900 rounded-2xl shadow flex-col justify-between items-center inline-flex">
        <h1 className="text-center text-zinc-400 text-base font-normal font-['Inter']">
          Timer App
        </h1>
        <div className="">
          <div className="flex flex-col items-center justify-between h-20 ">
            <p className="text-center text-stone-300 text-6xl font-normal font-['Inter']">
              {hours}:{minutes}:{seconds}
            </p>
            <p className="text-center text-stone-300 text-sm font-normal font-['Inter']">
              {status}
            </p>
          </div>
        </div>
        <div className="self-stretch h-14 relative flex flex-row items-center justify-between">
          {isRunning ? (
            <div className="w-14 h-14  inline-flex">
              <button
                className="bg-none focus:bg-none hover:scale-105 text-white w-14 h-14 rounded-full border-2 border-purple-950 transition"
                onClick={handlePause}
              >
                <PauseIcon />
              </button>
            </div>
          ) : (
            <div className="w-14 h-14  inline-flex">
              <button
                className="bg-none focus:bg-none  hover:scale-105 text-white w-14 h-14 rounded-full border-2 border-purple-950  transition"
                onClick={handleStart}
              >
                <PlayArrowIcon />
              </button>
            </div>
          )}
          <ResetButton />
        </div>
      </div>
    </div>
  );
};

export default Timer;
