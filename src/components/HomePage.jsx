import React, { useState } from "react";
import { motion } from "framer-motion";
import RadioStation from "./RadioStations";
import AudioControls from "/src/components/audioControl";
import OtherControls from "./otherControls";
import ReactPlayer from "react-player";
import github from "/src/images/github.png";
import play from "/src/images/playBtn.png";
import pauseImg from "/src/images/pause.png";

const HomePage = () => {
  const [BtnClass, setBtnClass] = useState("PlayPause");
  const [BtnClass2, setBtnClass2] = useState("playBtn");
  const [playPauseImg, setPlayPause] = useState(play);
  const [liveStream, playLiveStream] = useState(false);
  const [paused, setPaused] = useState(true);
  const [stationName, setStationName] = useState("LofiGirl");
  const [youtubeChannal, setYoutubeChannal] = useState("");
  const [currLiveStream, setLiveStream] = useState(
    "https://www.youtube.com/watch?v=-9gEgshJUuY&ab_channel=lofigeek"
  );
  const [video, setVideo] = useState(
    `https://www.youtube.com/watch?v=-9gEgshJUuY&ab_channel=lofigeek`
  );

  const handlePausePlaySwitch = () => {
    if (BtnClass === "PlayPause" || BtnClass2 === "playBtn") {
      setPlayPause(pauseImg);
      setBtnClass("PlayPause2");
      setBtnClass2("playBtn2");
      start();
    } else if (BtnClass === "PlayPause2" || BtnClass2 === "playBtn2") {
      setPlayPause(play);
      setBtnClass("PlayPause");
      setBtnClass2("playBtn");
      pause();
    }
  };

  const start = () => {
    playLiveStream(false);
    playLiveStream(true);
    setPaused(false);
  };

  const pause = () => {
    setPaused(true);
    playLiveStream(false);
  };

  //Changing Channels
  const Night = () => {
    setVideo(
      "https://www.youtube.com/watch?v=K8kXcNqWN8g&ab_channel=ChillMusicLab"
    );
    setStationName("Night City");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCwVQIkAtyZzQSA-OY1rsGig"
    );
    setLiveStream(
      "https://www.youtube.com/watch?v=K8kXcNqWN8g&ab_channel=ChillMusicLab"
    );
    playLiveStream(true);
    setPaused(false);
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const Cyber = () => {
    setVideo(
      "https://www.youtube.com/watch?v=NuD3o-HTbc8&ab_channel=ChillMusicLab"
    );
    setStationName("Cyber City");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCwVQIkAtyZzQSA-OY1rsGig"
    );
    setLiveStream(
      "https://www.youtube.com/watch?v=NuD3o-HTbc8&ab_channel=ChillMusicLab"
    );
    playLiveStream(true);
    setPaused(false);
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const LofiGirl = () => {
    setVideo("//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1");
    setStationName("LofiGirl");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow"
    );
    setLiveStream(
      "https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl"
    );
    playLiveStream(true);
    setPaused(false);
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const StudyMD = () => {
    setVideo("//www.youtube.com/embed/PcxpLIv4CNU?autoplay=1&mute=1&start=1");
    setStationName("StudyMD");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UC5CRP-6oxYenIgBj17CkBZg"
    );
    setLiveStream(
      "https://www.youtube.com/watch?v=uxR_sTZnBtg&ab_channel=StudyMD"
    );
    playLiveStream(true);
    setPaused(false);
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const JapaneseLofi = () => {
    setVideo("https://www.youtube.com/watch?v=-9gEgshJUuY&ab_channel=lofigeek");
    setStationName("Japanese Lofi");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCyD59CI7beJDU493glZpxgA"
    );
    setLiveStream(
      "https://www.youtube.com/watch?v=-9gEgshJUuY&ab_channel=lofigeek"
    );
    playLiveStream(true);
    setPaused(false);
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const Coffee = () => {
    setVideo(
      "https://www.youtube.com/watch?v=DrmcAh2FRHQ&ab_channel=CoffeeShopVibes"
    );
    setStationName("Coffee");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCJIOFQLGwB3GH9K9waxwynQ"
    );
    setLiveStream(
      "https://www.youtube.com/watch?v=DrmcAh2FRHQ&ab_channel=CoffeeShopVibes"
    );
    playLiveStream(true);
    setPaused(false);
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const Cafe = () => {
    setVideo(
      "https://www.youtube.com/watch?v=-5KAN9_CzSA&ab_channel=STEEZYASFUCK"
    );
    setStationName("Cafe");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCsIg9WMfxjZZvwROleiVsQg"
    );
    setLiveStream(
      "https://www.youtube.com/watch?v=-5KAN9_CzSA&ab_channel=STEEZYASFUCK"
    );
    playLiveStream(true);
    setPaused(false);
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const Mellow = () => {
    setVideo(
      "https://www.youtube.com/watch?v=XDh0JcxrbPM&ab_channel=CollegeMusic"
    );
    setStationName("Mellow");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCWzZ5TIGoZ6o-KtbGCyhnhg"
    );
    setLiveStream(
      "https://www.youtube.com/watch?v=XDh0JcxrbPM&ab_channel=CollegeMusic"
    );
    playLiveStream(true);
    setPaused(false);
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  return (
    <div class="flex w-[98vw] h-[96vh] justify-between">
      {/*RadioContainer*/}
      <div class="hidden md:flex flex-col w-[15vw] content-end">
        {/*Logo*/}

        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 0.5 }}
          class="flex justify-center items-center align-center w-[150%] h-[10%] text-center  text-4xl font-bold text-white uppercase tracking-[7px] z-10"
        >
          Home Moosic
        </motion.div>

        {/*SubHeading*/}
        <div class=" flex h-[10%]"></div>
        {/*RadioStationContainer*/}
        <div class="flex w-[100%] h-[80%] justify-end text-center shadow-[1px_0px_0px_rgba(255,255,255,0.6)] z-10 ">
          <RadioStation
            Night={Night}
            Cyber={Cyber}
            LofiGirl={LofiGirl}
            StudyMD={StudyMD}
            Japanese={JapaneseLofi}
            Coffee={Coffee}
            Cafe={Cafe}
            Mellow={Mellow}
          />
        </div>

        {/*SocialsContainer*/}
        <div class="flex text-white w-full h-[10%]  font-extralight uppercase font-si text-sm tracking-normal z-10 justify-start items-end ml-10">
          {/*Socials*/}
          <div class="flex flex-col w-[fit] min-w-[75%] z-10">
            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                window.open("https://github.com/deekaynine");
              }}
            >
              <img
                src={github}
                class="invert-[.80] sepia-0 saturate-0 hue-rotate-[220deg] brightness-[95%] contrast-[85%] mb-1"
                alt=""
              />
              <p class="text-1xl text-[#dfdbdb] font-semibold uppercase cursor-pointer items-center">
                Github
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {/*AudioControlContainer*/}
      <div class="flex flex-col justify-end  z-10 h-[80vh] md:h-full w-[67vw] md:w-[20vw] ">
        <AudioControls
          playPause={handlePausePlaySwitch}
          buttonClass={BtnClass}
          playPauseImage={playPauseImg}
          buttonClass2={BtnClass2}
          LiveStreamAudio={currLiveStream}
          LiveStreamPlayPause={liveStream}
        />
      </div>
      {/*PauseScreen*/}
      {paused ? (
        <div class="bg-black w-full h-full absolute top-0 left-0 opacity-90 z-0 ">
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.2 }}
            class="absolute top-1/2 left-[57%] md:top-1/2 md:left-1/2 md:transform -translate-x-1/2 -translate-y-1/2 text-[#dfdbdb] font-semibold uppercase cursor-pointer items-center text-3xl tracking-[7px]   "
          >
            Music Paused
          </motion.div>
        </div>
      ) : (
        ""
      )}
      <div class="absolute h-full w-full top-[-200px] left-[-150px]   md:absolute md:h-full md:w-full md:top-[-200px] md:left-[-180px]  z-[-2] ">
        {/*VideoContainer*/}

        <ReactPlayer
          class="relative overflow-hidden z-[-2]"
          width="140%"
          height="140%"
          loop="true"
          playing={liveStream}
          volume="mute"
          url={video}
        />
      </div>

      {/*OtherControls*/}
      <div class="flex flex-col justify-end z-10 h-full w-[20vw] space-between">
        <OtherControls youtube={youtubeChannal} radio={stationName} />
      </div>
    </div>
  );
};

export default HomePage;
