import React from "react";
import photo from "../../img/evie-s-bSVGnUCk4tk-unsplash.jpg";
import CatalogBtn from "./CatalogBtn";

const MainSearch = () => {
  return (
    <div className="relative w-full max-w-6xl p-6 mt-6 h-48 sm:h-64 sm:rounded-xl overflow-hidden flex flex-row justify-center items-center z-40 flex-shrink-0">
      <CatalogBtn />
      <img
        src={photo}
        alt=""
        className="w-full h-full object-center object-cover absolute -z-10"
      />
      <form
        action="GET"
        className="w-full max-w-xl flex flex-row items-center translate-x-7"
      >
        <input
          className="hover:ring-accent focus:ring-accent ring-white focus:outline-none appearance-none w-full leading-6 
            text-slate-900 placeholder-slate-400 rounded-xl py-2 pl-5 pr-11 ring-2 shadow-xl"
          type="text"
          aria-label="Поиск"
          placeholder="Поиск"
        />
        <button className="flex items-center justify-center w-11 h-9 bg-accent -translate-x-full rounded-xl -m-0.5">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            class="text-white pointer-events-none text-center"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default MainSearch;
