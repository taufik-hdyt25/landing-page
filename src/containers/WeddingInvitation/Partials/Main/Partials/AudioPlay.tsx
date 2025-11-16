import { Box } from "@chakra-ui/react";
import { Music2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AudioPlay = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [wantToPlay, setWantToPlay] = useState(false);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (wantToPlay) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [wantToPlay]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <Box>
      <audio
        ref={audioRef}
        src="/music/tiara-pernikahan-kita.mp3"
        autoPlay
        style={{ display: "none" }}
      />

      <Box
        zIndex={9999}
        position="fixed"
        cursor="pointer"
        onClick={() => setWantToPlay(!wantToPlay)}
        left={3}
        top={3}
        bg="rgba(0,0,0,0.3)"
        p={2}
        rounded="full"
      >
        {isPlaying ? (
          <Music2 style={{ color: "white", width: 18, height: 18 }} />
        ) : (
          <VolumeX style={{ color: "white", width: 18, height: 18 }} />
        )}
      </Box>
    </Box>
  );
};

export default AudioPlay;
