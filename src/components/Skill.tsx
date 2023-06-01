import React from 'react';
import { motion } from 'framer-motion';

interface ISkill {
    icon: string,
    percent: number,
    name: string,
    directionLeft: boolean,
}

export default function Skill({ icon, percent, name, directionLeft }: ISkill) {
  return (
    <motion.li
      initial={{
        x: directionLeft ? 100 : -100,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="group relative flex cursor-pointer h-20 w-20 xl:w-28 xl:h-28"
    >
      <img
        src={icon}
        alt={name}
        className="rounded-full border border-gray-500 object-cover h-[100%] w-[100%] filter group-hover:grayscale grayscale-0 transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-100 h-[100%] w-[100%] rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{percent}%</p>
        </div>
      </div>
    </motion.li>
  );
}
