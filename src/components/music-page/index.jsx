import { MusicPagePart } from "./styled";
import Music from "../../assets/vectors/music.png";
import Song from "../../assets/audio/song.mp3";
import { useRef, useState, useEffect } from "react";

export const MusicPage = () => {
  const audioRef = useRef(null);
  const [showTip, setShowTip] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const hideTip = () => {
    setIsFading(true);
    setTimeout(() => setShowTip(false), 350);
  };

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 26;
      audioRef.current.play();
    }
    hideTip();
  };

  useEffect(() => {
    const timeout = setTimeout(hideTip, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <MusicPagePart onClick={handleClick}>
      <img loading="lazy" src={Music} alt="music" />
      <audio ref={audioRef} src={Song} loop />
      {showTip && (
        <div
          onClick={handleClick}
          className={`tip ${isFading ? "fade-out" : ""}`}
        >
          Սեղմեք այստեղ
        </div>
      )}
    </MusicPagePart>
  );
};
