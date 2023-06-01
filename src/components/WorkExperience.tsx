import React from 'react';
import { motion } from 'framer-motion';
import Title from './Title';
import ExperienceCard from './ExperienceCard';

type Props = {};

export default function WorkExperience({}: Props) {
  const data = {
    company: {
      name: 'Geek Studio',
      logo: 'https://www.geekstudio.kg/static/media/GeekStudio.a5072fcb993fa5ce0c4dc837c202a717.svg',
      href: 'https://www.geekstudio.kg/',
    },
    technologies: [
      'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
      'https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png',
      'https://cdn.sanity.io/images/ltuexkre/production/19a30950e8bb4ce1c2155bde79a02626202b173c-500x500.png',
      'https://mui.com/static/logo.png',
      'https://static-00.iconduck.com/assets.00/ant-design-icon-512x512-ncocfg8e.png',
    ],
    workPeriod: 'Oct 2022 - present',
    experienceList: [
      'Proficient in creating user interfaces with varying levels of difficulty for websites',
      'Extensive experienced in building client-side logic.',
      'Proven track record in creating single-page applications <span className="text-gray-500 font-medium">(SPAs)</span> using <span className="text-gray-500 font-medium">React and TypeScript</span>, leveraging their powerful features to deliver efficient and scalable web solutions.',
      'Proficient in working with <span className="text-gray-500 font-medium">APIs</span>, developing RESTful APIs to facilitate seamless communication between the client and server.',
    ],
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex-col text-left md:flex-row max-w-7xl lg:px-10 px-4 justify-evenly mx-auto items-center lg:pt-0 pt-[40px]"
    >
      <Title>Experience</Title>

      <ul className="flex lg:gap-x-[30px] lg:overflow-x-scroll w-full flex-col gap-y-[20px] lg:flex-row pb-[20px]">
        <ExperienceCard {...data}/>
        <ExperienceCard {...data}/>
        <ExperienceCard {...data}/>
      </ul>
    </motion.div>
  );
}
