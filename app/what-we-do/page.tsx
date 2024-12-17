export default function WhatWeDo() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">What We Do</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Investment Banking</h2>
            <p className="text-gray-600">
              We provide a full range of investment banking services to a substantial and diversified client base.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Asset Management</h2>
            <p className="text-gray-600">
              We offer investment solutions across all major asset classes to institutional and individual investors.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Consumer Banking</h2>
            <p className="text-gray-600">
              We provide digital banking solutions and innovative financial products to consumers and small businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}