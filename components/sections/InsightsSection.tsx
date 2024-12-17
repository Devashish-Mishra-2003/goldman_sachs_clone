import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const insights = [
  {
    id: 1,
    title: "Global Markets Analysis",
    description: "Latest analysis on global market trends and economic outlook.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Investment Strategy",
    description: "Key insights into investment strategies and opportunities.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Sustainability Focus",
    description: "Analysis of ESG trends and sustainable investing opportunities.",
    image: "https://images.unsplash.com/photo-1623227866882-c005c26dfe41?w=800&auto=format&fit=crop&q=60"
  }
];

export default function InsightsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12">Featured Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link
                  href="#"
                  className="text-[#004B87] font-semibold flex items-center group"
                >
                  Read More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}