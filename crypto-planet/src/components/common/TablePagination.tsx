import { Table } from "@tanstack/react-table";
import { usePagination } from "../../hooks/usePagination";

import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TablePaginationProps<T> {
  table: Table<T>;
  totalItems: number;
  pageSize: number;
  pageIndex: number;
  pageSizeOptions?: number[];
  showPageSize?: boolean;
  showPageNumbers?: boolean;
  className?: string;
}

const TablePagination = <T,>({
  table,
  totalItems,
  pageSize,
  pageIndex,
  showPageNumbers = true,
}: TablePaginationProps<T>) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const { visiblePages } = usePagination({
    currentPage: pageIndex,
    totalPages,
  });

  return (
    <div className="border-t border-greySecondary">
      <div className="flex items-center justify-between pt-6">
        <div className="text-greyPrimary">{totalItems} assets</div>
        <div className="flex gap-2 items-center">
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            styleType="pagination"
            size="pagination"
            className="flex items-center justify-center group"
          >
            <ChevronLeft
              className={`text-greyPrimary transition-colors ${
                table.getCanPreviousPage()
                  ? "group-hover:text-bluePrimary"
                  : "text-greySecondary"
              }`}
              size={20}
            />
          </Button>

          {showPageNumbers && (
            <div className="flex items-center gap-1 mx-2">
              {visiblePages.map((page, index) =>
                page === "..." ? (
                  <span key={`dots-${index}`} className="text-greyPrimary px-2">
                    ...
                  </span>
                ) : (
                  <Button
                    key={page}
                    onClick={() => table.setPageIndex(page)}
                    styleType="pagination"
                    size="pagination"
                    active={pageIndex === page}
                    disabled={pageIndex === page}
                  >
                    {(page as number) + 1}
                  </Button>
                )
              )}
            </div>
          )}

          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            styleType="pagination"
            size="pagination"
            className="flex items-center justify-center group"
          >
            <ChevronRight
              className="text-greyPrimary transition-colors group-hover:text-bluePrimary"
              size={20}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
