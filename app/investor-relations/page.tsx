export default function InvestorRelations() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Investor Relations</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Financial Information</h2>
            <p className="text-gray-600">
              Access our financial reports, presentations, and other financial information.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Stock Information</h2>
            <p className="text-gray-600">
              View our stock price, dividend history, and other stock-related information.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">SEC Filings</h2>
            <p className="text-gray-600">
              Access our SEC filings, including annual reports, quarterly reports, and other documents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}