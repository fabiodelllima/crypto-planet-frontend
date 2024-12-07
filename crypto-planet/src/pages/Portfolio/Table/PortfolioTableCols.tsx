import { createColumnHelper } from "@tanstack/react-table";
import { IPortfolioTransaction } from "../../../interfaces/portfolio.interfaces";

const columnHelper = createColumnHelper<IPortfolioTransaction>();

export const columns = [
  columnHelper.accessor("action", {
    header: "Action",
    cell: (info) => (
      <div className="flex items-center gap-2">
        <img
          src={
            info.getValue() === "Deposited"
              ? "/icons/arrow-down.svg"
              : "/icons/arrow-up.svg"
          }
          alt="X"
        />
        <span>{info.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: (info) => <div>${info.getValue().toLocaleString()}</div>,
  }),
  columnHelper.accessor("date", {
    header: "Date/Time",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
];
