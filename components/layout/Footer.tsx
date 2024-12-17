import Link from "next/link";

const footerLinks = {
  "About Us": [
    { label: "Our Firm", href: "/our-firm" },
    { label: "People and Leadership", href: "/leadership" },
    { label: "Purpose & Values", href: "/purpose-and-values" }
  ],
  "Insights": [
    { label: "Research", href: "/research" },
    { label: "News", href: "/news" },
    { label: "Podcasts", href: "/podcasts" }
  ],
  "Careers": [
    { label: "Students", href: "/careers/students" },
    { label: "Professionals", href: "/careers/professionals" },
    { label: "Our Culture", href: "/careers/culture" }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-gray-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/company/goldman-sachs" className="hover:text-gray-300">LinkedIn</Link>
              <Link href="https://twitter.com/GoldmanSachs" className="hover:text-gray-300">Twitter</Link>
              <Link href="https://www.instagram.com/goldmansachs" className="hover:text-gray-300">Instagram</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © 2024 The Goldman Sachs Group, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}