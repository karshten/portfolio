import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import avatar from '../assets/images/oskar_avatar.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
  const resume = 'https://www.canva.com/design/DAFju1TItHo/Wq02azJlPEcTk1-0TXw2dw/edit?analyticsCorrelationId=0d7496da-93e5-4f86-9218-8017078b58f5';
  const [ text ] = useTypewriter({
    words: [
      '<Hello World !/>',
      'My name is Oskar',
      'Taking pride in delivering high-quality work',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: .1,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <BackgroundCircle/>
      <img
        className="relative rounded-full w-32 h-32 mx-auto object-cover"
        src={avatar.src}
        alt="avatar"
      />
      <div className="z-10">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[8px]">Software Developer</h2>
        <h1 className="text-2xl lg:text-3xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A"/>
        </h1>
        <div className="pt-5 lg:hidden">
          <Link href="#about">
            <button className="hero_btn">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero_btn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero_btn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero_btn">Projects</button>
          </Link>
          <Link href={resume} target='_blank'>
            <button className="hero_btn">Resume</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
