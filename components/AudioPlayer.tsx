"use client";
import React, { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentProgress, setCurrentProgress] = useState<string>("0");

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1;
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
        setCurrentProgress("0");
      });
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", () => {
          setIsPlaying(false);
          setCurrentProgress("0");
        });
      }
    };
  }, [audioRef]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeProgress = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
      setCurrentProgress(event.target.value);
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const updateTimeBar = (event: React.SyntheticEvent<HTMLAudioElement>) => {
    if (audioRef.current) {
      setCurrentProgress(audioRef.current.currentTime.toString());
    }
  };

  return (
    <div className="flex bg-slate-200 p-2 px-4 items-center gap-x-5 rounded-md w-fit">
      <button className="w-[20px]" onClick={togglePlayPause}>{isPlaying ? 
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#64748b" d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2"/></svg>
      : 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#64748b" d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128"/></svg>
       }</button>

      <div className="flex justify-center my-2">
        <label htmlFor="progress"></label>
        <input
          id="progress"
          type="range"
          min="0"
          max={
            audioRef?.current?.duration
              ? audioRef?.current?.duration.toString()
              : "100"
          }
          step="0.01"
          onChange={changeProgress}
          value={currentProgress}
        />
      </div>
      <audio
        ref={audioRef}
        // src={src}
        src={"/wav.wav"}
        onTimeUpdate={updateTimeBar}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default AudioPlayer;
