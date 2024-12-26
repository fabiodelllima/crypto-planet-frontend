import { useState } from "react";
import { cryptoCardsData } from "./Data/MarketData";
import { IMarketFilters } from "../../interfaces/market.interfaces";

import Container from "../../components/common/Container";
import Card from "../../components/common/Card";
import MarketTable from "./Table/MarketTable";
import MarketTableFilters from "./Table/MarketTableFilters";
import Select from "../../components/common/Select";

const MarketPage = () => {
  const [filters, setFilters] = useState<IMarketFilters>({
    quickFilter: "all",
    search: "",
    itemsPerPage: 20,
  });

  const filterOptions = [{ value: "filter", label: "Filter" }];
  const dateOptions = [{ value: "today", label: "Today" }];

  const handleFiltersChange = (newFilters: IMarketFilters) => {
    setFilters(newFilters);
  };

  return (
    <section className="min-h-screen bg-[#131313]">
      <div className="max-w-7xl mx-auto p-4 lg:p-6 space-y-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-white">
                Cryptocurrency Prices by Market Cap
              </h2>
              <p className="text-gray-400">
                Explore the top cryptocurrencies by market cap and their daily
                performance.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Select
                options={filterOptions}
                defaultValue="Filter"
                className="bg-[#111] text-gray-400 border border-transparent hover:border-gray-700 rounded px-4 py-6"
              />
              <Select
                options={dateOptions}
                defaultValue="Today"
                className="bg-[#111] text-gray-400 border border-transparent hover:border-gray-700 rounded px-4 py-6"
              />
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
