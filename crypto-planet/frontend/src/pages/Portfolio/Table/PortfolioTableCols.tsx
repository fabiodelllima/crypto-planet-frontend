import { createColumnHelper } from "@tanstack/react-table";
import { IPortfolioTransaction } from "../../../interfaces/portfolio.interfaces";
import CreditCardIcon from "../../../assets/icons/credit-card.svg";

const columnHelper = createColumnHelper<IPortfolioTransaction>();

export const portfolioTableColumns = [
  columnHelper.accessor("action", {
    header: () => (
      <div className="flex items-center gap-1 cursor-pointer text-gray-400">
        Action ▲
      </div>
    ),
    cell: (info) => (
      <div className="flex w-[110px] items-center gap-3">
        <img src={CreditCardIcon} alt="Credit Card" />
        <span className="text-gray-300">{info.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor("amount", {
    header: () => (
      <div className="flex w-[80px] items-center gap-1 cursor-pointer text-gray-400">
        Amount ▲
      </div>
    ),
    cell: (info) => (
      <div className="text-gray-300">${info.getValue().toLocaleString()}</div>
    ),
  }),
  columnHelper.accessor("date", {
    header: () => (
      <div className="flex w-[120px] items-center gap-1 cursor-pointer text-gray-400">
        Date/Time ▲
      </div>
    ),
    cell: (info) => <div className="text-gray-300">{info.getValue()}</div>,
  }),
  columnHelper.accessor("status", {
    header: () => (
      <div className="flex items-center gap-1 cursor-pointer text-gray-400">
        Status ▲
      </div>
    ),
    cell: (info) => (
      <div
        className={`px-3 py-1 rounded text-sm inline-block
          ${
            info.getValue() === "Succesful"
              ? "bg-[#1a2b1a] text-green-500"
              : "bg-[#2b1a1a] text-red-500"
          }`}
      >
        {info.getValue()}
      </div>
    ),
  }),
];

export default portfolioTableColumns;
