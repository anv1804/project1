import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CountDown from "./CountDown";
import { getTableById, updateTable } from "../apis/table.api.ts";

const Table = ({ table }) => {
    const [currentStatus, setcurrentStatus] = useState(table.status);
    useEffect(() => {}, [currentStatus]);

    const handleClickBtn = async () => {
        await updateTable(table._id, {
            status: !currentStatus,
        });

        setcurrentStatus(!currentStatus);
    };

    let [bg, border, btn] = ["white", "dark", "success"];
    if (currentStatus) {
        [bg, border, btn] = ["sky", "sky", "error"];
    }

    return (
        <div
            className={`flex flex-col bg-${bg}-300 border border-${border}-600 rounded-md`}
        >
            <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                    <blockquote>
                        <Link className="relative group cursor-pointer text-sky-50  overflow-hidden h-20 w-full rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                            <p className="z-10">{table.name}</p>
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
                                Staff
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-10 mt-5">
                    {currentStatus && <CountDown />}
                    <button
                        className={`btn btn-active btn-${btn} text-white flex-1`}
                        onClick={handleClickBtn}
                    >
                        {currentStatus ? "Close table" : "Open table"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;
