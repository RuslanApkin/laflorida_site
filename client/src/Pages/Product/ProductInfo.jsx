import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import img1 from "../../img/leonardo-wong-7pGehyH7o64-unsplash.jpg";

const product = {
  name: "Магнолия",
  price: 1990,
  currency: "₽",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Букеты", href: "#" },
    { id: 2, name: "Смешанные", href: "#" },
  ],
  image: {
    src: img1,
    alt: "Букет",
  },
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  description: "Ярки букет, подойдет всем.",
  highlights: ["Розы", "Хризантемы", "Ромашки"],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductInfo() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          {product.breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <a
                  href={breadcrumb.href}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {breadcrumb.name}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-5 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
          ))}
          <li className="text-sm">
            <a
              href={product.href}
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              {product.name}
            </a>
          </li>
        </ol>
      </nav>

      <div className="flex justify-center flex-wrap flex-row lg:flex-nowrap items-start">
        {/* Image gallery */}
        <div className="mt-6 rounded-xl overflow-hidden md:max-w-lg aspect-1 flex-shrink">
          <img
            src={product.image.src}
            alt={product.image.alt}
            className="w-full h-full object-center object-cover"
          />
        </div>

        {/* Product info */}
        <div className="max-w-2xl w-full pt-10 pb-16 px-4 sm:px-6 lg:max-w-xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Информация о товаре</h2>
            <p className="text-3xl text-gray-900">
              {product.currency}
              {product.price}
            </p>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm text-gray-900 font-medium">Цвет</h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Выберите цвет
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="p" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "h-8 w-8 border border-black border-opacity-10 rounded-full"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}

              <button
                type="submit"
                className="mt-10 w-min-fit mx-auto bg-accent border border-transparent rounded-full py-3 px-8 flex items-center justify-center text-base font-semibold whitespace-nowrap font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Добавить в
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </button>
            </form>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Описание</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Состав</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
