"use client";

import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import MagneticButton from "@/components/ui/magnetic-button";

type HeroScrollSectionProps = {
  title: string;
  description: string;
  heroImage: string;
};

export default function HeroScrollSection({
  title,
  description,
  heroImage,
}: HeroScrollSectionProps) {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-4">
              Our Services
            </p>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {description}
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                {title}
              </span>
            </h1>
            <div className="mt-8 flex gap-4 justify-center">
              <MagneticButton>Get Quote</MagneticButton>
              <MagneticButton outline>View Work</MagneticButton>
            </div>
          </>
        }
      >
        <Image
          src={heroImage}
          alt={title}
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
