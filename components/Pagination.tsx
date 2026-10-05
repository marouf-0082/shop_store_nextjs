"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (e: { selected: number }) => {
    const page = e.selected + 1;
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("page", page.toString());
    currentSearchParams.set("per_page", "2");

    router.push(`/store?${currentSearchParams.toString()}`);
  };

  return (
    <ReactPaginate
      className="cursor-pointer flex justify-center gap-2 my-4"
      breakLabel="..."
      nextLabel=">>>"
      onPageChange={handlePageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<<<"
      renderOnZeroPageCount={null}
    />
  );
}
