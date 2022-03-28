import React, { useState, Fragment } from "react";
import icon from "../../img/icon.svg";
import { Popover, Transition } from "@headlessui/react";
import { classNames } from "../../Components/utils";

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

export default function CatalogBtn() {
  const [open, setOpen] = useState(false);

  return (
    <button
      className="bg-white p-2 pr-3 rounded-xl text-gray-700 gap-2 items-center min-w-fit 
                    hidden md:flex ring-2 ring-white hover:ring-accent shadow-xl z-10"
      onClick={() => setOpen(!open)}
    >
      <img className="h-5 w-auto" src={icon} alt="" />
      Каталог
    </button>
  );
}
