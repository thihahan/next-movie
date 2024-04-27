"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname } from "next/navigation";

export default function MoviePagination({ total_pages, current_page }) {
  const current_path = usePathname();

  const getPgNum = (index) => {
    return current_page + index - 4;
  };
  let paginationLoop = [];
  const tempArr = new Array(10).fill(0);
  if (current_page < 6) {
    paginationLoop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  } else {
    paginationLoop = tempArr.map(
      (ele, index) => getPgNum(index) < total_pages && getPgNum(index)
    );
  }
  return (
    <Pagination className={""}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`${current_path}?page=${current_page - 1}`}
          />
        </PaginationItem>
        {paginationLoop.map((ele, index) => {
          return (
            <PaginationItem>
              <PaginationLink
                className={current_page == ele && "bg-gray-200"}
                href={`${current_path}?page=${ele}`}
              >
                {ele}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`${current_path}?page=${current_page + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
