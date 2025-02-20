import { useMemo, useState } from "react";
import { IPortfolioTransaction } from "../../../interfaces/portfolio.interfaces";
import {
  useReactTable,
  SortingState,
  PaginationState,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import Select from "../../../components/common/Select";
import SearchIcon from "../../../assets/icons/search.svg";
import TablePagination from "../../../components/common/TablePagination";
import portfolioTableColumns from "./PortfolioTableCols";
import months from "../../../constants/dates";

interface PortfolioTableProps {
  data: IPortfolioTransaction[];
}

const PortfolioTable = ({ data }: PortfolioTableProps) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [searchDate, setSearchDate] = useState("");
  const [activeTab, setActiveTab] = useState<"history" | "coin">("history");
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const handleClearFilters = () => {
    setSearchDate("");
    setSelectedMonth("all");
    setSorting([]);
  };

  const filteredData = useMemo(() => {
    let filtered = [...data];

    if (selectedMonth !== "all") {
      filtered = filtered.filter((item) => {
        const date = new Date(item.date);
        return (date.getMonth() + 1).toString() === selectedMonth;
      });
    }

    if (searchDate) {
      filtered = filtered.filter((item) =>
        item.date.toLowerCase().includes(searchDate.toLowerCase())
      );
    }

    return filtered;
  }, [data, selectedMonth, searchDate]);

  const table = useReactTable({
    data: filteredData,
    columns: portfolioTableColumns,
    state: {
      sorting,
      pagination: { pageIndex, pageSize },
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <section>
      <div className="space-y-6">
        <div className="flex flex-wrap sm:flex-nowrap gap-8 justify-between items-center">
          <h2 className="text-2xl text-white">Transaction History</h2>
          <div className="w-full sm:w-64">
            <Input
              placeholder="Search by date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              icon={SearchIcon}
            />
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center border-b border-gray-800">
          <div className="flex gap-6">
            <Button
              styleType="secondary"
              onClick={() => setActiveTab("history")}
              className={`py-2 relative bg-transparent border-none shadow-none ${
                activeTab === "history" ? "text-blue-500" : "text-gray-400"
              }`}
            >
              Wallet History
              {activeTab === "history" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
              )}
            </Button>
            <Button
              styleType="secondary"
              onClick={() => setActiveTab("coin")}
              className={`py-2 relative bg-transparent border-none shadow-none ${
                activeTab === "coin" ? "text-blue-500" : "text-gray-400"
              }`}
            >
              Coin Wallet
              {activeTab === "coin" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
              )}
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative inline-flex items-center">
              <Select
                options={months}
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              />
              <span className="bg-[#111] absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                ▼
              </span>
            </div>
            <Button styleType="tertiary" onClick={handleClearFilters}>
              × Clear Filter
            </Button>
          </div>
        </div>

        {activeTab === "history" ? (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    {table.getHeaderGroups().map((headerGroup) =>
                      headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          onClick={header.column.getToggleSortingHandler()}
                          className="text-left p-4 font-normal"
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
                    <tr key={row.id} className="border-t border-gray-800">
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="p-4">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <TablePagination
              table={table}
              totalItems={filteredData.length}
              pageSize={pageSize}
              pageIndex={pageIndex}
              pageSizeOptions={[5, 10, 20, 30]}
              showPageSize={true}
              showPageNumbers={true}
            />
          </>
        ) : (
          <div className="py-16 text-center text-gray-400">
            Coin Wallet feature is under development.
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioTable;
