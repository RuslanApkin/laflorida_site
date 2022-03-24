import React from "react";
import img1 from "../../img/leonardo-wong-7pGehyH7o64-unsplash.jpg";
import img2 from "../../img/annie-spratt-hX_hf2lPpUU-unsplash.jpg";

const callouts = [
  {
    name: "Букеты",
    description: "Композиции из одного или нескольких видов растений",
    imageSrc: img1,
    imageAlt: "Букет цветов",
    href: "#",
  },
  {
    name: "Домашние растения",
    description: "Большой выбор растений в горшках",
    imageSrc: img2,
    imageAlt: "Домашнее растение",
    href: "#",
  },
  {
    name: "Сад и огород",
    description: "Горшечка, семена, удобрения",
    imageSrc: img2,
    imageAlt: "Садовый инструмент",
    href: "#",
  },
];

export default function CategoryList() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-8 sm:px-0">
        <div className="py-8 sm:py-10 lg:py-16 lg:max-w-none">
          <h2 className="text-xl sm:text-2xl">Категории</h2>

          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            {callouts.map((callout) => (
              <div className="bg-white group relative max-h-64 max-w-sm sm:max-w-full sm:aspect-1 rounded-lg overflow-hidden grow">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="absolute w-full h-full object-center object-cover group-hover:opacity-50"
                />
                <div className="px-4 w-1/2 z-10 relative">
                  <h3 className="mt-6 mb-2 text-lg sm:text-xl semibold text-gray-900">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base text-gray-700 mb-6">
                    {callout.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
