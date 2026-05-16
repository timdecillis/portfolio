"use client";

import { useState, useEffect } from "react";

const identities = ["software engineer", "musician", "cat dad"];

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % identities.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[80vh] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/cymbal.gif)" }}
    >
      <div className="absolute inset-0 bg-[#1a3a4a]/40" />
      <div className="relative z-10 flex items-center justify-end h-full px-16">
        <h1 className="text-5xl md:text-6xl font-bold text-[#e8dcc8] max-w-xl leading-tight">
          Hello! I&apos;m a
          <br />
          <span className="block mt-2">{identities[currentIndex]}</span>
          <br />
          <span className="block mt-2">based in Oakland,</span>
          <span className="block">California.</span>
        </h1>
      </div>
    </section>
  );
};
