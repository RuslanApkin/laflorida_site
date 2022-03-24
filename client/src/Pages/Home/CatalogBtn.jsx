// {navigation.categories.map((category) => (
//     <Popover key={category.name} className="flex">
//       {({ open }) => (
//         <>
//           <div className="relative flex">
//             <Popover.Button
//               className={classNames(
//                 open
//                   ? "border-accent text-accent"
//                   : "border-transparent text-gray-700 hover:text-pink",
//                 "relative z-90 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
//               )}
//             >
//               {category.name}
//             </Popover.Button>
//           </div>

//           <Transition
//             as={Fragment}
//             enter="transition ease-out duration-200"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition ease-in duration-150"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
//               {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
//               <div
//                 className="absolute inset-0 top-1/2 bg-white shadow"
//                 aria-hidden="true"
//               />

//               <div className="relative bg-white">
//                 <div className="max-w-7xl mx-auto p-8">
//                   <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
//                     {category.sections.map((section) => (
//                       <div key={section.name}>
//                         <p
//                           id={`${section.name}-heading`}
//                           className="font-medium text-gray-900"
//                         >
//                           {section.name}
//                         </p>
//                         <ul
//                           role="list"
//                           aria-labelledby={`${section.name}-heading`}
//                           className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
//                         >
//                           {section.items.map((item) => (
//                             <li
//                               key={item.name}
//                               className="flex"
//                             >
//                               <a
//                                 href={item.href}
//                                 className="hover:text-pink"
//                               >
//                                 {item.name}
//                               </a>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Popover.Panel>
//           </Transition>
//         </>
//       )}
//     </Popover>
//   ))}
