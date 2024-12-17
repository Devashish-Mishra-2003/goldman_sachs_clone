"use client";

import { ChevronDown, Globe, Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: "What We Do",
      href: "/what-we-do",
      submenu: ["Investment Banking", "Asset Management", "Consumer Banking"]
    },
    {
      label: "Insights",
      href: "/insights",
      submenu: ["Research & Insights", "Media Relations", "News"]
    },
    {
      label: "Careers",
      href: "/careers",
      submenu: ["Students", "Professionals", "Our Culture"]
    },
    {
      label: "About Us",
      href: "/about-us",
      submenu: ["Our Firm", "People and Leadership", "Purpose & Values"]
    },
    {
      label: "Investor Relations",
      href: "/investor-relations",
      submenu: ["Financial Information", "Stock Information", "SEC Filings"]
    }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2OVdEFL3Chjmni3eyiKJYiS7rjZMqOL7ZQ&s"
                alt="Goldman Sachs Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link 
                  href={item.href}
                  className="text-gray-700 hover:text-black flex items-center"
                >
                  {item.label}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </Link>
                <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg mt-2 py-2 rounded-md">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
              <Globe className="w-5 h-5 text-gray-600 cursor-pointer" />
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <Link href={item.href} className="block text-gray-700 hover:text-black">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}