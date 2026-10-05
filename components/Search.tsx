"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Search() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        const currentSearchParams = new URLSearchParams(searchParams.toString());
        currentSearchParams.set("title_like", search);
        router.push(`/store?${currentSearchParams.toString()}`);
    } 
  return (
    <div>
      <input 
        className="bg-slate-400" 
        type="text" 
        placeholder="Search..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch} className="bg-sky-500 text-white p-2 rounded">Search</button>
    </div>
  );
}

export default Search;
