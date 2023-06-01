import React from 'react';
import { motion } from 'framer-motion';
import photo from '../assets/images/oskar_photo.jpg';
import Title from './Title';


type Props = {};

export default function About({}: Props) {
  return (
    <div>
      <Title>About</Title>
      <div className="flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <motion.img
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                mb:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] xl:rounded-md"
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          src={photo.src}
          alt="photo"
        />
        <div className="space-y-10 px-0 md:px-10 mt-[90px]">
          <h4 className="text-4xl font-semibold">Here is my background</h4>
          <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, animi quia deserunt esse mollitia deleniti at expedita molestiae reprehenderit iusto reiciendis aperiam quam molestias provident odit, impedit ipsam voluptatibus veor sit, amet consectetur adipisicing elit. Officiis, animi quia deserunt esse mollitia deleniti at expedita molestiae reprehenderit iusto reiciendis aperiam quam molestias provident odit, impedit ipsam voluptatibus veor sit, amet consectetur adipisicing elit. Officiis, animi quia deserunt esse mollitia deleniti at expedita molestiae reprehenderit iusto reiciendis aperiam quam molestias provident odit, impedit ipsam voluptatibus veor sit, amet consectetur adipisicing elit. Officiis, animi quia deserunt esse mollitia deleniti at expedita molestiae reprehenderit iusto reiciendis aperiam quam molestias provident odit, impedit ipsam voluptatibus vel?</p>
        </div>
      </div>
    </div>
  );
}
