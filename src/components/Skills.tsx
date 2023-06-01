import React from 'react';
import Title from './Title';
import Skill from './Skill';

type Props = {};

const datas = [
  {
    icon: 'https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png',
    percent: 70,
    name: 'JavaScript',
  },
  {
    icon: 'https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png',
    percent: 70,
    name: 'JavaScript',
  },
  {
    icon: 'https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png',
    percent: 70,
    name: 'JavaScript',
  },
  {
    icon: 'https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png',
    percent: 70,
    name: 'JavaScript',
  },
  {
    icon: 'https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png',
    percent: 70,
    name: 'JavaScript',
  },
  {
    icon: 'https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png',
    percent: 70,
    name: 'JavaScript',
  },
  {
    icon: 'https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png',
    percent: 70,
    name: 'JavaScript',
  },
  {
    icon: 'https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png',
    percent: 70,
    name: 'JavaScript',
  },

];

export default function Skills({}: Props) {
  let rowCount = 0;
  return (
    <div className="flex flex-col text-center md:text-left xl:flex-row xl:max-w-[600px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center max-w-[320px]">
      <div>
        <Title>Skills</Title>
        <ul className="grid grid-cols-4 gap-5">
          {[ ...datas ].map((skill, index) => {
            if ((index) % 4 === 0) rowCount ++;
            return (
              <Skill
                directionLeft={rowCount % 2 === 0}
                {...skill}
                key={skill.name}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
