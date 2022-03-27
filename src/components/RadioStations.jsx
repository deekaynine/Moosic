import React from "react";
import { motion } from "framer-motion";
import triangle from "../images/playBtn.png";

const RadioStations = ({
  Night,
  Cyber,
  LofiGirl,
  StudyMD,
  Japanese,
  Coffee,
  Cafe,
  Mellow,
}) => {
  return (
    <div class="flex flex-col min-w-[75%] items-start mr-1  text-[#dfdbdb] z-10">
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Night}
          class="flex flex-row text-1xl text-[#dfdbdb] font-semibold uppercase cursor-pointer mt-5 items-center"
        >
          <img
            class="mr-5 w-[12px] h-[14px] pr-12px  cursor-pointer invert-[.80] sepia-0 saturate-0 hue-rotate-[220deg] brightness-[95%] contrast-[85%]"
            src={triangle}
            alt=""
          />
          Night City
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.1 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Cyber}
          class="flex flex-row text-1xl text-[#dfdbdb] font-semibold uppercase cursor-pointer mt-5 items-center"
        >
          <img
            class="mr-5 w-[12px] h-[14px] pr-12px  cursor-pointer invert-[.80] sepia-0 saturate-0 hue-rotate-[220deg] brightness-[95%] contrast-[85%]"
            src={triangle}
            alt=""
          />
          Cyber City
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.2 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={LofiGirl}
          class="flex flex-row text-1xl text-[#dfdbdb] font-semibold uppercase cursor-pointer mt-5 items-center"
        >
          <img
            class="mr-5 w-[12px] h-[14px] pr-12px  cursor-pointer invert-[.80] sepia-0 saturate-0 hue-rotate-[220deg] brightness-[95%] contrast-[85%]"
            src={triangle}
            alt=""
          />
          Lofi Girl
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.3 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={StudyMD}
          class="flex flex-row text-1xl text-[#dfdbdb] font-semibold uppercase cursor-pointer mt-5 items-center"
        >
          <img
            class="mr-5 w-[12px] h-[14px] pr-12px  cursor-pointer invert-[.80] sepia-0 saturate-0 hue-rotate-[220deg] brightness-[95%] contrast-[85%]"
            src={triangle}
            alt=""
          />
          Study Chill
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.4 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Japanese}
          class="flex flex-row text-1xl text-[#dfdbdb] font-semibold uppercase cursor-pointer mt-5 items-center"
        >
          <img
            class="mr-5 w-[12px] h-[14px] pr-12px  cursor-pointer invert-[.80] sepia-0 saturate-0 hue-rotate-[220deg] brightness-[95%] contrast-[85%]"
            src={triangle}
            alt=""
          />
          Japanese Lofi
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.5 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Coffee}
          class="flex flex-row text-1xl text-[#dfdbdb] font-semibold uppercase cursor-pointer mt-5 items-center"
        >
          <img
            class="mr-5 w-[12px] h-[14px] pr-12px  cursor-pointer invert-[.80] sepia-0 saturate-0 hue-rotate-[220deg] brightness-[95%] contrast-[85%]"
            src={triangle}
            alt=""
          />
          Coffee
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.6 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Cafe}
          class="flex flex-row text-1xl text-[#dfdbdb] font-semibold uppercase cursor-pointer mt-5 items-center"
        >
          <img
            class="mr-5 w-[12px] h-[14px] pr-12px  cursor-pointer invert-[.80] sepia-0 saturate-0 hue-rotate-[220deg] brightness-[95%] contrast-[85%]"
            src={triangle}
            alt=""
          />
          Cafe
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.7 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Mellow}
          class="flex flex-row text-1xl text-[#dfdbdb] font-semibold uppercase cursor-pointer mt-5 items-center"
        >
          <img
            class="mr-5 w-[12px] h-[14px] pr-12px  cursor-pointer invert-[.80] sepia-0 saturate-0 hue-rotate-[220deg] brightness-[95%] contrast-[85%]"
            src={triangle}
            alt=""
          />
          Mellow
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RadioStations;
