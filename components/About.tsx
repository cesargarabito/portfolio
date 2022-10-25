import React from "react";
import Image from "next/image";
import Portimg from "../public/port2.jpeg";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 
    justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/relax.jpeg"
        
        className="-mb-20 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span> bit
          of background
        </h4>
        <p className="text-base">I am a Web Developer. I did my degree in civil engineering but Ive always been passionate about coding, and since 
        I am an autodidact I decided to deepen my knowledge in the field of web development. I started learning to code when I was 14 years old because I wanted to build a turistic website about my island. Over time, I have gained a wealth of experience designing and developing web applications. I ❤️ yoga and dancing.</p>
      </div>
    </motion.div>
  );
}
