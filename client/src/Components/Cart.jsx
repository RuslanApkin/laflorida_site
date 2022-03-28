import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/outline";

const Cart = () => {
  const n_items = 1;
  return (
    <div className="ml-4 flow-root lg:ml-6">
      <a href="#" className="group flex items-center justify-center relative">
        <div className="absolute h-10 w-10 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 bg-accent rounded-full -z-10"></div>
        <ShoppingBagIcon
          className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-white"
          aria-hidden="true"
        />
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  );
};

export default Cart;
