import { useState } from "react";
import Input from "../../../components/common/Input";
import Select from "../../../components/common/Select";
import {
  IMarketFilters,
  TQuickFilter,
} from "../../../interfaces/market.interfaces";

interface MarketTableFiltersProps {
  onFiltersChange: (filters: IMarketFilters) => void;
}

const MarketTableFilters = ({ onFiltersChange }: MarketTableFiltersProps) => {
  const [activeFilter, setActiveFilter] = useState<TQuickFilter>("all");
  const [activeTab, setActiveTab] = useState("Category");
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const quickFilters = [
    { label: "Top Gainers", value: "gainers" },
    { label: "Top Loser", value: "losers" },
  ];

  const tabs = [
    { value: "Category", label: "Category" },
    { value: "Algorithm", label: "Algorithm" },
    { value: "Platform", label: "Platform" },
    { value: "Industry", label: "Industry" },
  ];

  const updateFilters = (changes: Partial<IMarketFilters>) => {
    const newFilters = {
      quickFilter: activeFilter,
      search: searchTerm,
      itemsPerPage: itemsPerPage,
      ...changes,
    };
    onFiltersChange(newFilters);
  };

  return (
    <div className="space-y-4">
      <div className="hidden md:flex justify-between items-center">
        <div className="flex gap-2 overflow-x-auto">
          {quickFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => {
                setActiveFilter(filter.value as TQuickFilter);
                updateFilters({ quickFilter: filter.value as TQuickFilter });
              }}
              className={`px-4 py-2 rounded border ${
                activeFilter === filter.value
                  ? "border-blue-500 text-blue-500"
                  : "border-gray-700 text-gray-400"
              } bg-[#111] whitespace-nowrap hover:border-gray-600 transition-colors`}
            >
              {filter.label}
            </button>
          ))}
          {["New in market", "Top in trading", "Top in Volume"].map((label) => (
            <button
              key={label}
              className="px-4 py-2 rounded border border-gray-700 text-gray-400 bg-[#111] whitespace-nowrap hover:border-gray-600 transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
        <div className="relative w-64">
          <Input
            placeholder="Search Coin Name"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              updateFilters({ search: e.target.value });
            }}
            icon="/icons/search.svg"
          />
        </div>
      </div>
      <div className="md:hidden space-y-4">
        <Select
          value={activeFilter}
          onChange={(e) => {
            setActiveFilter(e.target.value as TQuickFilter);
            updateFilters({ quickFilter: e.target.value as TQuickFilter });
          }}
          options={quickFilters}
        />
        <Select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          options={tabs}
        />
        <Input
          placeholder="Search Coin Name"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            updateFilters({ search: e.target.value });
          }}
          icon="/icons/search.svg"
        />
      </div>
      <div className="hidden md:flex justify-between items-center border-b border-gray-800">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 relative ${
                activeTab === tab.value ? "text-blue-500" : "text-gray-400"
              }`}
            >
              {tab.label} {tab.value === "Category" ? "↑" : "↓"}
              {activeTab === tab.value && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <select
            value={itemsPerPage}
            onChange={(e) => {
              const value = Number(e.target.value);
              setItemsPerPage(value);
              updateFilters({ itemsPerPage: value });
            }}
            className="bg-[#111] text-gray-400 border border-gray-700 rounded px-3 py-2"
          >
            <option value={20}>Show 20</option>
            <option value={50}>Show 50</option>
          </select>
          <div className="hidden md:flex items-center gap-2">
            <button className="p-2 border border-gray-700 rounded">☰</button>
            <button className="p-2 border border-gray-700 rounded">⊞</button>
          </div>
          <button className="hidden md:flex items-center gap-2 text-gray-400">
            Customize
          </button>
          <button
            onClick={() => {
              setActiveFilter("all");
              setSearchTerm("");
              setItemsPerPage(20);
              onFiltersChange({
                quickFilter: "all",
                search: "",
                itemsPerPage: 20,
              });
            }}
            className="flex items-center gap-2 text-gray-400"
          >
            × Clear Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketTableFilters;
