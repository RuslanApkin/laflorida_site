import React from "react";
import { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import Logo from "../../Components/Logo";
import Cart from "../../Components/Cart";
import MobileNav from "../../Components/MobileNav";

const navigation = {
  categories: [
    {
      id: "catalog",
      name: "Каталог",
      featured: [
        {
          name: "Новинки",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Спецпредложения",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "bouquet",
          name: "Букеты",
          items: [
            { name: "Розы", href: "#" },
            { name: "Монобукеты", href: "#" },
            { name: "Смешанные", href: "#" },
            { name: "Каркасные", href: "#" },
            { name: "До 2500", href: "#" },
          ],
        },
        {
          id: "houseplants",
          name: "Комнатные растения",
          items: [
            { name: "Цветущие", href: "#" },
            { name: "Декоративно-лиственные", href: "#" },
            { name: "Кактусы", href: "#" },
          ],
        },
        {
          id: "garden",
          name: "Сад и огород",
          items: [
            { name: "Хвойники", href: "#" },
            { name: "Многолетние", href: "#" },
            { name: "Плодовые", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Услуги", href: "#" },
    { name: "Оплата и доставка", href: "#" },
    { name: "Контакты", href: "#" },
  ],
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white w-screen">
      {/* Mobile menu */}
      <MobileNav navigation={navigation} open={open} setOpen={setOpen} />

      <header className="relative bg-white z-50">
        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-5 sm:px-16 lg:px-20"
        >
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white py-2 rounded-md text-gray-400 md:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6 mr-4" aria-hidden="true" />
              </button>

              {/* Logo */}
              <Logo />

              {/* Flyout menus */}
              <div className="hidden md:ml-8 md:self-stretch h-full md:flex space-x-8">
                {navigation.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="flex items-center font-medium text-gray-700 hover:text-pink"
                  >
                    {page.name}
                  </a>
                ))}
              </div>

              <div className="ml-auto flex items-center">
                {/* Cart */}
                <Cart />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
