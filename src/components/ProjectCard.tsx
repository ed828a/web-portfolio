"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = { title: string; text: string; image: string };

const ProjectCard = ({ title, text, image }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped((prev) => !prev);
      setIsAnimating(true);
    }
  };

  return (
    <div
      className="w-[450px] h-[280px] rounded-md cursor-pointer"
      onClick={handleFlip}
    >
      <motion.div
        className="w-full h-full flip-card-inner"
        // className="w-full h-full transition-transform transform transform-style-preserve-3d duration-600"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* card front side */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
          // className="w-full h-full group relative backface-hidden bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center  justify-center z-[20]">
            Learn more &gt;
          </div>
        </div>

        {/* card back side */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4"
          // className="w-full h-full group relative backface-hidden rotate-y-180 bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
          <div className="flex flex-col gap-20 py-3 z-[30]">
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
            <p className="text-gray-200 text-[20px]">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
