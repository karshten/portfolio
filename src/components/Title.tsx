import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ITitle {
    children: ReactNode;
};

export default function Title ({ children }: ITitle) {
  return (
    <motion.h3
      initial={{
        opacity: 0,
        scale: 1.5,
        y: -100,
        letterSpacing: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        letterSpacing: '20px',
      }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-center uppercase text-gray-500 text-1xl lg:text-2xl mb-[24px] ml-[20px]"
    >
      {children}
    </motion.h3>
  );
}
