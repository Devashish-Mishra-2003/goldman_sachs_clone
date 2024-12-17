import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SustainabilitySection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=800&auto=format&fit=crop&q=60"
              alt="Sustainability"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Committed to Sustainability
            </h2>
            <p className="text-xl text-gray-600">
              We're helping clients accelerate climate transition and advance
              inclusive growth while supporting our communities and showing
              climate leadership in our operations.
            </p>
            <button className="bg-[#004B87] text-white px-8 py-3 rounded-full font-semibold flex items-center group">
              Our Approach
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}