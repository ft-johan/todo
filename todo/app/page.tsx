
"use client";
import { SparklesCore } from "./ui/sparkles";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

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
       <h1 className=" mt-8 md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Mind
      </h1>
      <BentoGrid className="mt-25 mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          tag={item.tag}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </main>
  );
}

const items = [
  {
    title: "The Dawn of Innovation",
    tag: "Explore the birth of groundbreaking ideas and inventions.",
   
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    tag: "Dive into the transformative power of technology.",

    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    tag: "Discover the beauty of thoughtful and functional design.",

    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    tag:
      "Understand the impact of effective communication in our lives.",

    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    tag: "Join the quest for understanding and enlightenment.",

    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    tag: "Experience the thrill of bringing ideas to life.",

    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    tag: "Embark on exciting journeys and thrilling discoveries.",

    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];