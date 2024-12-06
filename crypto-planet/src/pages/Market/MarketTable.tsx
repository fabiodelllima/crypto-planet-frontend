import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table";
import { useState } from "react";
import { Market } from "../../interfaces/market.interface";
import { tableData } from "./MarketData";
import { formatNumber } from "../../utils/helpers.util";

import StarIcon from "../../assets/icons/star.svg";

const MarketTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const columnHelper = createColumnHelper<Market>();

  const columns = [
    columnHelper.accessor("favorite", {
      header: "",
      cell: () => (
        <div className="w-[45px] px-4">
          <img src={StarIcon} alt="Favorite" />
        </div>
      ),
    }),
    columnHelper.accessor("rank", {
      header: "#",
      cell: (info) => (
        <div className="w-[40px] px-4">{info.getValue() ?? "-"}</div>
      ),
    }),
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => (
        <div className="min-w-[200px] px-4">
          <div className="flex items-center gap-2">
            <span>{info.getValue() ?? "-"}</span>
            <span>{info.row.original.symbol ?? "-"}</span>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor("price", {
      header: "Price",
      cell: (info) => (
        <div className="min-w-[120px] px-4">
          ${formatNumber(info.getValue())}
        </div>
      ),
    }),
    columnHelper.accessor("change24h", {
      header: "24h Change",
      cell: (info) => {
        const value = info.getValue();
        if (value === undefined) return "-";
        return (
          <div className="min-w-[100px] px-4">
            <span className={value >= 0 ? "text-green-500" : "text-red-500"}>
              {value > 0 ? "+" : ""}
              {value.toFixed(2)}%
            </span>
          </div>
        );
      },
    }),
    columnHelper.accessor("highPrice24h", {
      header: "24h High",
      cell: (info) => (
        <div className="min-w-[120px] px-4">
          ${formatNumber(info.getValue())}
        </div>
      ),
    }),
    columnHelper.accessor("lowPrice24h", {
      header: "24h Low",
      cell: (info) => (
        <div className="min-w-[120px] px-4">
          ${formatNumber(info.getValue())}
        </div>
      ),
    }),
    columnHelper.accessor("chart", {
      header: "Chart",
      cell: (info) => {
        const data = info.getValue();
        const change = info.row.original.change24h;
        if (!data?.length) return null;
        return (
          <div className="min-w-[100px] px-4">
            <svg width="100" height="40" viewBox="0 0 100 40">
              <path
                d={`M0,20 ${data
                  .map(
                    (value, index) =>
                      `L${(index + 1) * (100 / data.length)},${40 - value}`
                  )
                  .join(" ")}`}
                fill="none"
                stroke={change >= 0 ? "#22c55e" : "#ef4444"}
                strokeWidth="2"
              />
            </svg>
          </div>
        );
      },
    }),
  ];

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[640px]">
        <thead>
          <tr>
            {table.getHeaderGroups().map((headerGroup) =>
              headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="py-4 text-left"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))
            )}
          </tr>
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="py-4">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTable;
