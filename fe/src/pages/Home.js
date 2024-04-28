import React, { useState } from 'react';

const Home = () => {
    return (
        <>

            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Numbers tell our story
                        </h2>
                        <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                        <div>
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                                    {" "}
                                    6+{" "}
                                </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">
                                Years in business
                            </p>
                            <p className="text-base mt-0.5 text-gray-500">
                                Creating the successful path
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                                    {" "}
                                    4821{" "}
                                </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">
                                Projects delivered
                            </p>
                            <p className="text-base mt-0.5 text-gray-500">In last 6 years</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                                    {" "}
                                    37+{" "}
                                </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">Team members</p>
                            <p className="text-base mt-0.5 text-gray-500">
                                Working for your success
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                        <div className="relative mb-12">
                            <swiper-container className="absolute w-full" >
                                <swiper-slide><img className="w-fit rounded-md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bertrand_Grospellier_2020.jpg/450px-Bertrand_Grospellier_2020.jpg" /></swiper-slide>
                                <swiper-slide><img className="w-fit rounded-md" src="https://media.poker.org/prod/images/gm_preview/2e35de013e1a-pcasuperhighrollereugenekatchalov2011.jpg" /></swiper-slide>
                                <swiper-slide><img className="w-fit rounded-md" src="https://www.wsop.com/pdfs/reports/21381-winner-photo.jpg" /></swiper-slide>
                            </swiper-container>
                            <div className="z-10 absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                                <div className="overflow-hidden bg-white rounded">
                                    <div className="px-10 py-6">
                                        <div className="flex items-center">
                                            <p className="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                                                37%
                                            </p>
                                            <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                                                High Conversions <br />
                                                on Landing Pages
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                                <svg
                                    className="w-8 h-8 text-orange-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                                Build a perfect team within hours.
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-gray-600">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia conse duis enim velit mollit. Exercitation veniam.
                            </p>
                            <a
                                href="#"
                                title=""
                                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                                role="button"
                            >
                                {" "}
                                Explore more{" "}
                            </a>
                        </div>
                    </div>
                </div >
            </section >


        </>

    )
}

export default Home