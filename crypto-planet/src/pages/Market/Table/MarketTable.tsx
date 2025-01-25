import { useState, useMemo } from "react";
import { tableData } from "../Data/MarketData";
import {
  IMarketFilters,
  IMarket,
  TQuickFilter,
} from "../../../interfaces/market.interfaces";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  PaginationState,
  getPaginationRowModel,
  Column,
} from "@tanstack/react-table";

import marketTableColumns from "./MarketTableCols";
import TablePagination from "../../../components/common/TablePagination";

interface MarketTableProps {
  filters: IMarketFilters;
}

function applySearchFilter(data: IMarket[], searchTerm: string) {
  const searchLower = searchTerm.toLowerCase();
  return data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchLower) ||
      item.symbol.toLowerCase().includes(searchLower)
  );
}

const filterStrategies: Record<TQuickFilter, (data: IMarket[]) => IMarket[]> = {
  gainers: function sortByGainers(data: IMarket[]) {
    return data
      .sort((a, b) => (b.change24h || 0) - (a.change24h || 0))
      .slice(0, 20);
  },

  losers: function sortByLosers(data: IMarket[]) {
    return data
      .sort((a, b) => (a.change24h || 0) - (b.change24h || 0))
      .slice(0, 20);
  },

  all: (data: IMarket[]) => data,
};

function MarketTable({ filters }: MarketTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const filteredData = useMemo(
    function computeFilteredData() {
      let data = [...tableData];

      data = filterStrategies[filters.quickFilter](data);

      if (filters.search) {
        data = applySearchFilter(data, filters.search);
      }

      return data.slice(0, filters.itemsPerPage);
    },
    [filters]
  );

  const handleSortChange = (column: Column<IMarket>) => {
    column.getToggleSortingHandler?.();
  };

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
                  onClick={() => handleSortChange(header.column)}
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
}

export default MarketTable;
