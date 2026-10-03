"use client";

import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter();

  const handlePageChange = (e: { selected: number }) => {
    const page = e.selected + 1;

    router.push(`/store?page=${page}&per_page=2`);
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
