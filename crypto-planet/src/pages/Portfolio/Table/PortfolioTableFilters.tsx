import { useState } from "react";

import Select from "../../../components/common/Select";
import Button from "../../../components/common/Button";

interface PortfolioTableFiltersProps {
  onMonthChange: (month: string) => void;
  activeTab: "history" | "coin";
  onTabChange: (tab: "history" | "coin") => void;
}

const months = [
  { value: "all", label: "Month" },
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const PortfolioTableFilters = ({
  onMonthChange,
}: PortfolioTableFiltersProps) => {
  const [activeTab, setActiveTab] = useState<"history" | "coin">("history");
  const [selectedMonth, setSelectedMonth] = useState<string>("all");

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedMonth(value);
    onMonthChange(value);
  };

  return (
    <div className="flex flex-col gap-6 border border-red-500">
      <h2 className="text-2xl text-white">Transaction History</h2>
      <div className="hidden md:flex gap-2 border-b border-borderGray">
        <Button
          styleType="secondary"
          className={`p-2 rounded-none border-0 ${
            activeTab === "history"
              ? "border-b-2 border-bluePrimary text-white"
              : "text-greyPrimary"
          }`}
          onClick={() => setActiveTab("history")}
        >
          Wallet History
        </Button>
        <Button
          styleType="secondary"
          className={`p-2 rounded-none border-0 ${
            activeTab === "coin"
              ? "border-b-2 border-bluePrimary text-white"
              : "text-greyPrimary"
          }`}
          onClick={() => setActiveTab("coin")}
        >
          Coin Wallet
        </Button>
      </div>
      <div className="flex flex-col gap-4 md:hidden flex-wrap border border-red-500">
        <Select
          options={[
            { value: "history", label: "Wallet History" },
            { value: "coin", label: "Coin Wallet" },
          ]}
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value as "history" | "coin")}
          className="w-full bg-[#111] text-gray-400 border border-gray-700 rounded-lg px-4 py-2"
        />
        <input
          type="text"
          placeholder="Search by date"
          className="w-full p-3 bg-[#111] border border-gray-700 text-gray-400 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-bluePrimary"
        />
      </div>
      <div className="hidden md:block w-64">
        <input
          type="text"
          placeholder="Search by date"
          className="w-full p-3 bg-[#111] border border-gray-700 text-gray-400 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-bluePrimary"
        />
      </div>

      {activeTab === "history" ? (
        <div className="flex flex-col gap-4">
          <Select
            options={months}
            value={selectedMonth}
            onChange={handleMonthChange}
            className="w-full md:w-auto appearance-none bg-[#111] text-gray-400 border border-gray-700 rounded-lg px-4 py-2 pr-8 focus:outline-none hover:border-gray-600"
          />
          <Button
            styleType="secondary"
            onClick={() => {
              setSelectedMonth("all");
              onMonthChange("all");
            }}
            className="w-full md:w-auto px-4 py-2 text-gray-400 hover:text-gray-300 bg-transparent border border-gray-700 rounded-lg"
          >
            × Clear Filter
          </Button>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full py-8">
          <p className="text-greyPrimary text-center">
            Coin Wallet feature is under development.
          </p>
        </div>
      )}
    </div>
  );
};

export default PortfolioTableFilters;
