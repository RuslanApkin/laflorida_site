import React, { useState } from "react";
import icon from "../../img/icon.svg";
import { Transition, Dialog } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import temlateImg from "../../img/leonardo-wong-7pGehyH7o64-unsplash.jpg";

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

export default function CatalogBtn() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        className="bg-white p-2 pr-3 rounded-xl text-gray-700 gap-2 items-center min-w-fit hidden md:flex 
                      ring-2 ring-white hover:ring-accent shadow-xl"
        onClick={() => {
          setIsOpen(true);
          document.body.scroll("no");
        }}
      >
        <img className="h-5 w-auto" src={icon} alt="" />
        Каталог
      </button>
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
          className="z-40 hidden md:block bg-white h-screen w-screen fixed top-0 left-0 overflow-y-scroll"
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
                      className="w-14 h-14 absolute -left-[4.5rem] top-0"
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
    </div>
  );
}
