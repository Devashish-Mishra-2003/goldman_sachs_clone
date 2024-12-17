"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-20 bg-[#004B87] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Progress Through Performance
            </h1>
            <p className="text-xl">
              We bring people, capital and ideas together to help our clients and
              communities thrive.
            </p>
            <button className="bg-white text-[#004B87] px-8 py-3 rounded-full font-semibold flex items-center group">
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=60"
              alt="Goldman Sachs Building"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}