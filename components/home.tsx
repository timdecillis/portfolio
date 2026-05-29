"use client";

import { useState, useEffect } from "react";

const identities = ["software engineer", "musician", "teacher"];

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % identities.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-screen h-screen overflow-hidden bg-cover bg-center -mx-6 md:-mx-16 lg:-mx-32 xl:-mx-56"
      style={{ backgroundImage: "url(/cymbal.gif)" }}
    >
      <div className="absolute inset-0 bg-[#1a3a4a]/40" />
      <div className="relative z-10 flex items-center justify-end h-full px-16">
        <h1 className="text-5xl md:text-6xl font-bold text-[#e8dcc8] max-w-xl leading-tight">
          Hello! I&apos;m a
          <br />
          <span className="block mt-2">{identities[currentIndex]}</span>
          <span className="block mt-2">based in Oakland,</span>
          <span className="block">California.</span>
        </h1>
      </div>
    </section>
  );
};
