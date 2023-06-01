import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function BackgroundCircle({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [ .1,
          .2,
          .4,
          .8,
          .1,
          1 ],
        scale: [ 1,
          2,
          2,
          3,
          1 ],
        borderRadius: [ '20%',
          '20%',
          '50%',
          '80%',
          '20%' ],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[150px] w-[150px] xl:h-[200px] xl:w-[200px] mt-52 animate-ping"/>
      <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] xl:h-[300px] xl:w-[300px] mt-52"/>
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] xl:h-[500px] xl:w-[500px] mt-52"/>
      <div className="absolute border border-[#F7AB0A] rounded-full h-[300px] w-[300px] xl:h-[600px] xl:w-[600px] animate-pulse mt-52 opacity-20"/>
    </motion.div>
  );
}
