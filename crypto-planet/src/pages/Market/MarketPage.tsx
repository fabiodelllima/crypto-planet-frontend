import { useState } from "react";
import { cryptoCardsData } from "./Data/MarketData";
import { IMarketFilters } from "../../interfaces/market.interfaces";

import Container from "../../components/common/Container";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import MarketTable from "./Table/MarketTable";
import MarketTableFilters from "./Table/MarketTableFilters";

const MarketPage = () => {
  const [filters, setFilters] = useState<IMarketFilters>({
    quickFilter: "all",
    search: "",
    itemsPerPage: 20,
  });

  const handleFiltersChange = (newFilters: IMarketFilters) => {
    setFilters(newFilters);
  };

  return (
    <section className="min-h-screen bg-[#131313]">
      <div className="max-w-7xl mx-auto p-4 lg:p-6 space-y-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <header className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Cryptocurrency Prices by Market Cap
              </h2>
              <p className="text-gray-400">
                Explore the top cryptocurrencies by market cap and their daily
                performance.
              </p>
            </header>
            <div className="hidden md:flex items-center gap-4">
              <Button variant="secondary" className="bg-transparent px-4 py-2">
                Filter
              </Button>
              <Button variant="secondary" className="bg-transparent px-4 py-2">
                Today
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {cryptoCardsData.map((crypto) => (
              <Card
                key={crypto.id}
                icon={crypto.icon}
                name={crypto.name}
                price={crypto.price}
                change={crypto.change}
                chartData={crypto.chartData}
              />
            ))}
          </div>
        </Container>
        <Container>
          <MarketTableFilters onFiltersChange={handleFiltersChange} />
          <MarketTable filters={filters} />
        </Container>
      </div>
    </section>
  );
};

export default MarketPage;
