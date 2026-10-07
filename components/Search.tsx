"use client";
import { motion } from "framer-motion";

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
      <motion.button whileTap={{scale: 0.9}} onClick={handleSearch} className="bg-sky-500 text-white p-2 rounded">Search</motion.button>
    </div>
  );
}

export default Search;
