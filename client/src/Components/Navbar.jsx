import React from "react";
import { Fragment, useState } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";
import MobileNav from "./MobileNav";
import { XIcon } from "@heroicons/react/outline";
import temlateImg from "../img/leonardo-wong-7pGehyH7o64-unsplash.jpg";

const sections = [
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
    href: "#",
    img: temlateImg,
  },
  {
    id: "houseplants",
    name: "Комнатные растения",
    items: [
      { name: "Цветущие", href: "#" },
      { name: "Декоративно-лиственные", href: "#" },
      { name: "Кактусы", href: "#" },
    ],
    href: "#",
    img: temlateImg,
  },
  {
    id: "garden",
    name: "Сад и огород",
    items: [
      { name: "Хвойники", href: "#" },
      { name: "Многолетние", href: "#" },
      { name: "Плодовые", href: "#" },
    ],
    href: "#",
    img: temlateImg,
  },
];
const pages = [
  { name: "Услуги", href: "#" },
  { name: "Оплата и доставка", href: "#" },
  { name: "Контакты", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white w-screen">
      {/* Mobile menu */}
      <MobileNav open={open} setOpen={setOpen} />

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

              <div className="hidden md:ml-8 md:self-stretch h-full md:flex space-x-8">
                <button
                  onClick={() => {
                    setIsOpen(true);
                    document.body.scroll("no");
                  }}
                  className="flex items-center font-medium text-gray-700 hover:text-pink"
                >
                  Каталог
                </button>
                {pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="flex items-center font-medium text-gray-700 hover:text-pink"
                  >
                    {page.name}
                  </a>
                ))}
              </div>

              {/* Flyout menus */}
              <Transition
                show={isOpen}
                enter="transition duration-200 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100 "
                leave="transition duration-200 ease-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                  className="z-40 hidden md:block bg-white h-screen w-screen fixed top-0 left-0"
                >
                  <Dialog.Overlay />
                  <div className="max-w-7xl mx-auto pb-16 pt-20 sm:px-16 lg:px-20">
                    <div className="flex flex-row justify-between items-center mb-6">
                      <Dialog.Title className="text-2xl font-semibold text-gray-700">
                        Каталог
                      </Dialog.Title>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          document.body.scroll("yes");
                        }}
                      >
                        <XIcon className="h-6 w-6 text-gray-400" />
                      </button>
                    </div>

                    <div className="relative w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                      {sections.map((section) => (
                        <div key={section.name}>
                          <div className="relative">
                            <img
                              src={section.img}
                              alt=""
                              className="w-14 h-14 absolute -left-16 top-0"
                            />
                            <a
                              id={`${section.name}-heading`}
                              className="font-semibold text-xl text-gray-700 hover:text-accent"
                              href={section.href}
                            >
                              {section.name}
                            </a>
                          </div>

                          <ul
                            role="list"
                            aria-labelledby={`${section.name}-heading`}
                            className="mt-4 pl-4 space-y-4 sm:mt-3 sm:space-y-3"
                          >
                            {section.items.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className="hover:text-pink text-lg text-gray-700"
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
                </Dialog>
              </Transition>

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
