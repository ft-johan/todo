
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
          particleDensity={10}
          className="w-full h-full absolute z-50"
          particleColor="#FFFFFF"
        />
        <div >
       <h1 className="mt-10 md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white  my-auto space-y-10 relative z-100">
        Mind
      </h1></div>
      <div className="mt-10 relative z-100">
      <BentoGrid className="mt-50 mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          tag={item.tag}
          
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
    </main>
  );
}

const items = [
  {
    title: "The Dawn of Innovation",
    tag:
    "#Tag",

    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    tag:
    "#Tag",

    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    tag:
    "#Tag",

    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    tag:
    "#Tag",

    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    tag:
    "#Tag",

    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    tag:
    "#Tag",

    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    tag:
    "#Tag",

    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    tag:
    "#Tag",

    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    tag:
    "#Tag",

    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  
  {
    title: "The Digital Revolution",
    tag:
      "#Tag",

    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    tag:
      "#Tag",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    tag:
      "#Tag",

    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    tag:
      "#Tag",

    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    tag:
      "#Tag",

    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    tag:
      "#Tag",

    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];