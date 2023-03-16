"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [searchTerms, setSearchTerms] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e) => {
    setSearchTerms(e.target.value);
  };

  const handleClick = () => {
    router.push(pathName + "?search=" + searchTerms);
  };

  return (
    <div className="p-10">
      <input
        placeholder="Search..."
        type="search"
        className="text-black py-2 px-4"
        onChange={handleChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}
