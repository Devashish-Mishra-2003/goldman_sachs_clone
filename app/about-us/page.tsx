export default function AboutUs() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Firm</h2>
            <p className="text-gray-600">
              Learn about our history, culture, and commitment to advancing sustainable economic growth.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">People and Leadership</h2>
            <p className="text-gray-600">
              Meet our leadership team and learn about the people who drive our success.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Purpose & Values</h2>
            <p className="text-gray-600">
              Discover our core values and how we work to create positive impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}