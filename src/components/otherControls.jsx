import React from "react";
import rain from "../images/rain.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RainASMR from "../Sounds/rain.mp3";
import OceanASMR from "../Sounds/Ocean.mp3";
import whiteNoiseASMR from "../Sounds/whiteNoise.mp3";
import waves from "../images/waves.png";
import youtube from "../images/youtube.png";
import WhiteNoise from "../images/whiteNoise.png";
import Logo from "/src/images/Beats.png";

const Rain = new Audio(RainASMR);
const Ocean = new Audio(OceanASMR);
const whiteNoise = new Audio(whiteNoiseASMR);

const AdditionSettings = (props) => {
  const [rainVolume, setRainVolume] = useState(0);
  const [oceanVolume, setOceanVolume] = useState(0);
  const [whiteNoiseVolume, setWhiteNoiseVolume] = useState(0);

  const [transitionValue, setTransitionValue] = useState(0);
  const [TitleLocation, setTitleLocation] = useState(350);

  Ocean.volume = oceanVolume;
  Rain.volume = rainVolume;
  whiteNoise.volume = whiteNoiseVolume;

  Rain.play();
  Ocean.play();
  whiteNoise.play();

  return (
    <>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 2 }}
        class="flex justify-center items-center align-center w-[100%] h-[10%] text-center text-4xl font-bold text-white uppercase tracking-[7px] z-10 hidden:sm"
      >
        <img src={Logo} alt="" class="hidden md:block sm:m-auto" />
      </motion.div>

      <div class="hidden md:flex md:flex-col  md:justify-end md:text-center text-white text-2xl md:h-[99%] md:min-w-[100%] mb-[5rem]">
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 1 }}
          class="text-4xl w-min text-white text-bold uppercase tracking-[0.45rem] relative border-solid border-white border-b-2 "
        >
          {props.radio}
          <div class="">
            <a target="_blank" href={props.youtube}>
              <img
                src={youtube}
                class="absolute invert-[90%] mb-2 w-4 h-4 top-[120%] left-[45%] "
                alt=""
              />
            </a>
          </div>
        </motion.div>
      </div>

      <div class="flex text-white text-2xl justify-end w-full h-[10%] z-10">
        <div class="flex flex-col h-full justify-end">
          <input
            class="soundDial"
            type="range"
            orient="vertical"
            min={0}
            max={1}
            value={rainVolume}
            onChange={(e) => {
              setRainVolume(e.target.valueAsNumber);
            }}
            step={0.2}
          />
          <div className="flex items-center justify-center border-[#c7c7c7] border-[1px] border-solid rounded-full mt-5 mx-1 min-h-[40px] min-w-[40px]">
            <img src={rain} class="w-5 h-5 ml-px invert-[90%]" alt="" />
          </div>
        </div>

        <div className="flex flex-col h-full justify-end">
          <input
            class="soundDial "
            type="range"
            orient="vertical"
            min={0}
            max={1}
            value={oceanVolume}
            onChange={(e) => {
              setOceanVolume(e.target.valueAsNumber);
            }}
            step={0.2}
          />
          <div class="flex items-center justify-center border-[#c7c7c7] border-[1px] border-solid rounded-full mt-5 mx-1 min-h-[40px] min-w-[40px]">
            <img src={waves} class="w-5 h-5 ml-px invert-[90%]" alt="" />
          </div>
        </div>

        <div className="flex flex-col h-full justify-end">
          <input
            class="soundDial"
            type="range"
            orient="vertical"
            min={0}
            max={1}
            value={whiteNoiseVolume}
            onChange={(e) => {
              setWhiteNoiseVolume(e.target.valueAsNumber);
            }}
            step={0.2}
          />
          <div class="flex items-center justify-center border-[#c7c7c7] border-[1px] border-solid rounded-full mt-5 mx-1 min-h-[40px] min-w-[40px]">
            <img src={WhiteNoise} class="w-5 h-5 ml-px invert-[90%]" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionSettings;
