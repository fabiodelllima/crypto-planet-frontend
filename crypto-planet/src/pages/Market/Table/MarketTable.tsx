import { useState, useMemo } from "react";
import { tableData } from "../Data/MarketData";
import { IMarketFilters } from "../../../interfaces/market.interfaces";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  PaginationState,
  getPaginationRowModel,
} from "@tanstack/react-table";

import marketTableColumns from "./MarketTableCols";
import TablePagination from "../../../components/common/TablePagination";

interface MarketTableProps {
  filters: IMarketFilters;
}

const MarketTable = ({ filters }: MarketTableProps) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const filteredData = useMemo(() => {
    let data = [...tableData];

    switch (filters.quickFilter) {
      case "gainers":
        data = data
          .sort((a, b) => (b.change24h || 0) - (a.change24h || 0))
          .slice(0, 20);
        break;
      case "losers":
        data = data
          .sort((a, b) => (a.change24h || 0) - (b.change24h || 0))
          .slice(0, 20);
        break;
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      data = data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchLower) ||
          item.symbol.toLowerCase().includes(searchLower)
      );
    }

    return data.slice(0, filters.itemsPerPage);
  }, [filters]);

  const table = useReactTable({
    data: filteredData,
    columns: marketTableColumns,
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
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b border-[#1a1a1a]">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="py-3 px-4 text-left text-sm font-normal cursor-pointer"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination
        table={table}
        totalItems={filteredData.length}
        pageSize={pageSize}
        pageIndex={pageIndex}
        pageSizeOptions={[5, 10, 20, 30]}
        showPageSize={true}
        showPageNumbers={true}
      />
    </div>
  );
};

export default MarketTable;
