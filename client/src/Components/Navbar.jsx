import React from "react";
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";
import MobileNav from "./MobileNav";

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
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
                className="bg-white py-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6 mr-4" aria-hidden="true" />
              </button>

              {/* Logo */}
              <Logo />

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-accent  border-b-2"
                                  : "text-gray-700 hover:text-pink",
                                "relative flex items-center"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto p-8">
                                  <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8">
                                    {category.sections.map((section) => (
                                      <div key={section.name}>
                                        <p
                                          id={`${section.name}-heading`}
                                          className="font-medium text-gray-900"
                                        >
                                          {section.name}
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`${section.name}-heading`}
                                          className="mt-4 p-2 space-y-6 sm:mt-3 sm:space-y-4"
                                        >
                                          {section.items.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <a
                                                href={item.href}
                                                className="hover:text-pink"
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

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
              </Popover.Group>

              <div className="ml-auto flex items-center">
                {/* Search */}
                <Search />

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
