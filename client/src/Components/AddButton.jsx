import React, { useState } from "react";
import { ShoppingCartIcon, PlusIcon } from "@heroicons/react/outline";
import { classNames } from "../Components/utils";

export const AddButton = ({ classN }) => {
  const cart = (
    <div className="peer-hover:opacity-0">
      <ShoppingCartIcon className="w-7 h-7" />
    </div>
  );
  const plus = (
    <div className="opacity-0 peer-hover:opacity-100">
      <PlusIcon className="w-7 h-7" />
    </div>
  );
  const [cartIcon, setCart] = useState(cart);
  return (
    <div className={classN}>
      <button
        className="relative group z-20 text-white p-3"
        onMouseEnter={() => setTimeout(() => setCart(plus), 100)}
        onMouseLeave={() => setTimeout(() => setCart(cart), 100)}
      >
        <span className="absolute inset-0 peer z-10"></span>
        <div className="absolute inset-0 rounded-full bg-accent sm:peer-hover:scale-[1.1] -z-10"></div>
        {cartIcon}
      </button>
    </div>
  );
};
