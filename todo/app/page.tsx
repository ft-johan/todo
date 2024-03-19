
"use client";
import { SparklesCore } from "./ui/sparkles";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <main>

        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.5}
          maxSize={1.0}
          particleDensity={50}
          className="w-full h-full absolute z-50"
          particleColor="#FFFFFF"
        />
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl relative z-0"
          >
            Mind <br /> dump
          </motion.h1>
        </LampContainer>
 
    </main>
  );
}
