'use client';
import { useEffect } from 'react';
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/images/peakpx.jpg')] bg-cover bg-center  text-white font-sans">
  {/* Header: Logo + Nav */}
  <header className="relative flex items-center justify-center px-10 py-6">
    <div className="absolute left-10">
    <Image
          src="/tamal-icon.webp" // Replace with your actual image path
          alt="Tamal Sen Icon"
          width={182}
          height={40}
          className="object-contain"
        />
    </div>
    
   <nav>
  <ul className="flex space-x-8 font-semibold text-white">
    <li className="relative px-3">
      <span className="absolute -top-2 right-2 text-xs text-gray-300">01</span>
      <a href="#">/ / home</a>
    </li>
    <li className="relative px-3">
      <span className="absolute -top-2 right-2 text-xs text-gray-300">02</span>
      <a href="#">/ / expertise</a>
    </li>
    <li className="relative px-3">
      <span className="absolute -top-2 right-2 text-xs text-gray-300">03</span>
      <a href="#">/ / work</a>
    </li>
    <li className="relative px-3">
      <span className="absolute -top-2 right-2 text-xs text-gray-300">04</span>
      <a href="#">/ / experience</a>
    </li>
    <li className="relative px-3">
      <span className="absolute -top-2 right-2 text-xs text-gray-300">05</span>
      <a href="#">/ / contact</a>
    </li>
  </ul>
</nav>
  </header>

  <section id='featured' className="flex flex-col items-center justify-center text-center mt-20 px-4">
    <h2 className="text-5xl md:text-9xl font-extrabold">TAMAL SEN</h2>
    <p className="text-lg md:text-2xl text-gray-300">
      SOFTWARE ENGINEER, FRONT END & APP DEVELOPERS
    </p>
  </section>
  
  
</div>
  );
}

