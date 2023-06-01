import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

export default function Header({}: Props) {
  const resume = 'https://www.canva.com/design/DAFju1TItHo/Wq02azJlPEcTk1-0TXw2dw/edit?analyticsCorrelationId=0d7496da-93e5-4f86-9218-8017078b58f5';

  return (
    <header className="sticky w-[100%] top-0 bg-inherit z-20">
      <nav className="relative max-w-7xl bg-inheri flex items-start xl:items-center justify-between p-3 mx-auto z-20">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: .5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center z-20"
        >
          <SocialIcon
            url="https://github.com/karshten"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/karshten"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/karshten"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>

        <motion.div
          initial={{
            y: 100,
            opacity: 0,
            scale: .5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="lg:flex flex-row items-center text-gray-300 cursor-pointer z-20 hidden"
        >
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
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: .5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer z-20"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
        </motion.div>
      </nav>
    </header>
  );
}
