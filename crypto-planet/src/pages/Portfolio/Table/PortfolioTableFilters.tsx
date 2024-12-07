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
  { value: "4", label: "May" },
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
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex gap-2 border-b border-borderGray">
        <Button
          variant="secondary"
          className={`p-2 rounded-none border-0 ${
            activeTab === "history"
              ? "border-b-2 border-blueAccent text-white"
              : "text-textSecondary"
          }`}
          onClick={() => setActiveTab("history")}
        >
          Wallet History
        </Button>
        <Button
          variant="secondary"
          className={`p-2 rounded-none border-0 ${
            activeTab === "coin"
              ? "border-b-2 border-blueAccent text-white"
              : "text-textSecondary"
          }`}
          onClick={() => setActiveTab("coin")}
        >
          Coin Wallet
        </Button>
      </div>

      {activeTab === "history" && (
        <div className="flex items-center gap-4">
          <Select
            options={months}
            value={selectedMonth}
            onChange={handleMonthChange}
            className="px-4 py-2 bg-container text-white border border-borderGray rounded"
          />
          <button className="p-2 rounded-lg bg-container text-textSecondary border border-borderGray hover:text-white">
            <img src="/icons/more.svg" alt="More" className="w-5 h-5" />
          </button>
        </div>
      )}

      {activeTab === "coin" && (
        <div className="flex justify-center items-center w-full py-8">
          <p className="text-textSecondary text-center">
            Coin Wallet feature is under development.
          </p>
        </div>
      )}
    </div>
  );
};

export default PortfolioTableFilters;
