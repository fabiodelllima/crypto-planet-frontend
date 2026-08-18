interface PaginationInfo {
  currentPage: number;
  totalPages: number;
}

type PageItem = number | "...";

export const usePagination = ({ currentPage, totalPages }: PaginationInfo) => {
  const getVisiblePages = (): PageItem[] => {
    const pages: PageItem[] = [];

    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    pages.push(0);
    if (currentPage <= 3) {
      pages.push(1, 2, 3);
      if (totalPages > 4) {
        pages.push("...");
      }
    } else if (currentPage >= totalPages - 4) {
      pages.push("...");
      for (let i = totalPages - 4; i < totalPages - 1; i++) {
        pages.push(i);
      }
    } else {
      pages.push("...");
      pages.push(currentPage - 1, currentPage, currentPage + 1);
      pages.push("...");
    }

    if (!pages.includes(totalPages - 1)) {
      pages.push(totalPages - 1);
    }

    return pages;
  };

  return { visiblePages: getVisiblePages() };
};
