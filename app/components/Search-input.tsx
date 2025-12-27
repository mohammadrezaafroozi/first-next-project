"use client";

import { useEffect, useState } from "react";
import {Search} from 'lucide-react';

interface SearchInputProps {
  onSearch: (e: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [search, setSearch] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(search);
    }, 800);
  }, [search, onSearch]);

  return (
    <div className="relative max-w-md mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-none:">
          <Search className='h-5 w-5 text-gray-500'/>
        </div>
      <input
        type="text"
        placeholder="search pokemon..."
        className="block w-full pl-10 pr-3 py-2 rounded-md leading-5 bg-white placeholder-gray-500 text-black
          focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
