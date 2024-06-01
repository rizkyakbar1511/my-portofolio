import React from "react";
//codeium make a hooks for playing this sound
export default function usePlaySound() {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return {
    playSound,
    audioRef,
  };
}
