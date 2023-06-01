import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import parse from 'html-react-parser';

interface IExperienceCard {
  company: {
    name: string,
    logo: string,
    href: string
  },
  technologies: Array<string>,
  workPeriod: string
  experienceList: Array<string>
}

export default function ExperienceCard({ company, technologies, workPeriod, experienceList }: IExperienceCard) {
  return (
    <motion.li
      initial={{
        x: -100,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      className="w-[100%] lg:min-w-[60%] bg-[#292929] p-[24px] rounded-md overflow-hidden"
    >
      <Link className="inline-block rounded-md" target="_blank" href={company.href}>
        <img
          className="w-[200px] object-contain"
          src={company.logo}
          alt={company.name + 'logo'}
        />
      </Link>
      <ul className="flex flex-row gap-x-[16px] my-[16px]">
        {technologies.map(technology => (
          <li key={technology}>
            <img
              className="h-10 w-10 rounded-sm"
              src={technology}
              alt="technology"
            />
          </li>
        ))}
      </ul>
      <h4 className="mt-[8px] text-3xl">{company.name}</h4>
      <p className="text-gray-500 my-[15px]">{workPeriod}</p>
      <ul className="list-disc flex flex-col gap-y-[8px] pl-[16px]">
        {experienceList.map(item => <li key={item}>{parse(item)}</li>)}
      </ul>
    </motion.li>
  );
}
