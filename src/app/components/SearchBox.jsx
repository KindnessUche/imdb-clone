"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SearchBox() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      action={pathname.includes("/search") ? search : `/search/${search}`}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
}
