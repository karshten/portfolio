import React from 'react';
import Head from 'next/head';
import WorkExperience from '@/components/WorkExperience';
import About from '@/components/About';
import Hero from '../components/Hero';
import Header from '@/components/Header';
import Skills from '@/components/Skills';


export default function Home() {
  return (
    <div
      className='bg-[rgba(36,36,36)] text-gray-300 h-screen overflow-y-scroll overflow-x-hidden z-0 pb-[100px] scroll-smooth'
    >
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>Oskar's Portfolio</title>
      </Head>

      <Header/>

      <section id='hero' className='min-h-screen'>
        <Hero/>
      </section>

      <section id="about" className='min-h-screen lg:pt-[90px] pt-[40px]'>
        <About/>
      </section>

      <section id="experience" className='min-h-screen lg:pt-[90px] pt-[40px]'>
        <WorkExperience/>
      </section>

      <section id="skills" className='min-h-screen lg:pt-[90px] pt-[40px]'>
        <Skills/>
      </section>

      {/* Projects */}

      {/* Contact */}
    </div>
  );
}
