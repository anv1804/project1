import React from "react";
import { Link } from "react-router-dom";

const TableList = () => {
  return (
    <>
      <section className="py-5 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <Link
                      className="relative group cursor-pointer text-sky-50  overflow-hidden h-20 w-full rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
                      to={`/admin/table/`}
                    >
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                      <p className="z-10">Table 1</p>
                    </Link>
                  </blockquote>
                </div>
                <div className="mt-8">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="group w-full rounded-lg bg-[#673ab7] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_#2196f3]">
                      <p className="text-white text-2xl">2000</p>
                      <p className="text-white text-sm">lorem</p>
                      <svg
                        xmlSpace="preserve"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        viewBox="0 0 512 512"
                        y={0}
                        x={0}
                        height={36}
                        width={36}
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:opacity-100 absolute right-[10%] top-[50%] translate-y-[-50%] opacity-20 transition group-hover:scale-110 duration-300"
                      ></svg>
                    </div>
                    <div className="group w-full rounded-lg bg-[rgb(41,49,79)] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_rgb(244,67,54)]">
                      <p className="text-white text-2xl">1999</p>
                      <p className="text-white text-sm">lorem</p>
                      <svg
                        className="group-hover:opacity-100 absolute right-[10%] top-[50%] translate-y-[-50%] opacity-20 transition group-hover:scale-110 duration-300"
                        xmlSpace="preserve"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        viewBox="0 0 405.333 405.333"
                        y={0}
                        x={0}
                        height={36}
                        width={36}
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g></g>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Devon Lane
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        President of Sales
                      </p>
                    </div>
                  </div>
                </div>
                <button className="flex justify-center items-center gap-2 w-10 h-10 cursor-pointer rounded-md shadow-xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                  <svg viewBox="0 0 15 15" className="w-5 fill-white">
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                    Button
                  </svg>
                </button>
                <button className="flex justify-center items-center gap-2 w-10 h-10 cursor-pointer rounded-md shadow-xl text-white font-semibold bg-gradient-to-r from-[blue-400] via-[duration-300] to-[#duration-300] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#00c20d] hover:to-[#00c20d]">
                  <svg viewBox="0 0 15 15" className="w-5 fill-white">
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                    Button
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <Link
                      className="relative group cursor-pointer text-sky-50  overflow-hidden h-20 w-full rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
                      to={`/admin/table/`}
                    >
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                      <p className="z-10">Table 1</p>
                    </Link>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Devon Lane
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        President of Sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <Link
                      className="relative group cursor-pointer text-sky-50  overflow-hidden h-20 w-full rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
                      to={`/admin/table/`}
                    >
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                      <p className="z-10">Table 1</p>
                    </Link>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Devon Lane
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        President of Sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <Link
                      className="relative group cursor-pointer text-sky-50  overflow-hidden h-20 w-full rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
                      to={`/admin/table/`}
                    >
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                      <p className="z-10">Table 1</p>
                    </Link>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Devon Lane
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        President of Sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <Link
                      className="relative group cursor-pointer text-sky-50  overflow-hidden h-20 w-full rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
                      to={`/admin/table/`}
                    >
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                      <p className="z-10">Table 1</p>
                    </Link>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Devon Lane
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        President of Sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <Link
                      className="relative group cursor-pointer text-sky-50  overflow-hidden h-20 w-full rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
                      to={`/admin/table/`}
                    >
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                      <p className="z-10">Table 1</p>
                    </Link>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Devon Lane
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        President of Sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TableList;
