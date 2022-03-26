import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import mute from "/src/images/mute.png";
import volumeOn from "/src/images/volumeOn.png";

let lastPlayedVolume = 0;

const audioControl = ({
  playPause,
  buttonClass,
  playPauseImage,
  buttonClass2,
  LiveStreamAudio,
  LiveStreamPlayPause,
}) => {
  const [volume, setVolume] = useState(1);
  const [volumeImg, setVolumeImg] = useState(volumeOn);
  const [isMuted, setIsMuted] = useState("volumeOn");
  const [isMutedImg, setIsMutedImg] = useState("audioOnImg");

  const handleMute = () => {
    if (isMuted === "volumeOn" || isMutedImg === "audioOnImg") {
      setVolumeImg(mute);
      setIsMuted("volumeOff");
      setIsMutedImg("audioOffImg");
      lastPlayedVolume = volume;
      setVolume(0);
    } else if (isMuted === "volumeOff" || isMutedImg === "audioOffImg") {
      setVolumeImg(volumeOn);
      setIsMuted("volumeOn");
      setIsMutedImg("audioOnImg");
      setVolume(lastPlayedVolume);
    }
  };

  return (
    <div class="flex flex-row justify-center box-border mt-auto z-1 text-center text-2xl text-black ">
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.9 }}
        onClick={playPause}
        class={
          buttonClass === "PlayPause" || "PlayPause2"
            ? "flex  border-[#c7c7c7] border content-center justify-center items-center  h-[80px] min-w-[80px] rounded-[50%] mt-4 ml-[120px] mr-[6px]"
            : ""
        }
      >
        <img
          src={playPauseImage}
          class={
            buttonClass2 === "playBtn"
              ? "w-[30px] h-[30px] ml-0.5 invert-[80%] sepia-[0%] saturate-0 hue-rotate-180 brightness-150 contrast-150"
              : buttonClass2 === "playBtn2"
              ? "w-[30px] h-[30px] ml-0 invert-[80%] sepia-[0%] saturate-0 hue-rotate-180 brightness-150 contrast-150"
              : ""
          }
          alt=""
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.09 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleMute}
        class={
          isMuted == "volumeOn" || "volumeOff"
            ? "flex border-[#c7c7c7] border h-[40px] min-w-[40px]  rounded-[50%] mt-[3.3rem] ml-[6px]  mr-[6px] items-center justify-center  "
            : ""
        }
      >
        <img
          class={
            isMutedImg === "audioOnImg" || "audioOffImg"
              ? "min-w-[20px] h-[20px] ml-[-1px] invert-[90%] sepia-[0%] saturate-0 hue-rotate-180 brightness-150 contrast-150"
              : ""
          }
          src={volumeImg}
          alt=""
        />
      </motion.div>

      <div>
        <input
          class="border-[#c7c7c7] border-1 border-solid appearance-none h-[1px] w-[100px] mt-[4.5rem] flex items-center justify-center ml-[3px] rounded-3xl volumeDial"
          type="range"
          min={0}
          max={1}
          value={volume}
          step={0.01}
          onChange={(e) => {
            setVolume(e.target.valueAsNumber);
          }}
        />
      </div>

      <ReactPlayer
        class="absolute top-[-1000px] left-[-1000px] "
        playing={LiveStreamPlayPause}
        volume={volume}
        url={LiveStreamAudio}
      />
    </div>
  );
};

export default audioControl;
