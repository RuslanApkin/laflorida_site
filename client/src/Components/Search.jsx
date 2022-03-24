import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const Search = () => {
  return (
    <div className="flex lg:ml-6">
      <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-6 h-6" aria-hidden="true" />
      </a>
    </div>
  );
};

export default Search;
