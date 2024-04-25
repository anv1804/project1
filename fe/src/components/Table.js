import React, { useState } from "react";
import { Link } from "react-router-dom";

import CountDown from "./CountDown";
import { updateTable } from "../apis/table.api.ts";

const Table = ({ table, mobile = false, onMobile = () => { } }) => {
    const [currentStatus, setcurrentStatus] = useState(table.status);

    const handleClickBtn = async (e) => {
        await updateTable(table._id, {
            status: !currentStatus,
        });

        if (mobile) {
            onMobile(e, table._id);
            return;
        }

        setcurrentStatus(!currentStatus);
    };

    let [bg, border, btn] = ["bg-white-300", "border-dark-600", "success"];
    if (currentStatus) {
        [bg, border, btn] = ["bg-sky-300", "border-sky-600", "error"];
    }
    if (mobile) {
        [bg, border, btn] = ["", "", "error"];
    }

    return (
        <div
            className={`flex flex-col ${bg} ${mobile ? "" : "border"} ${border} rounded-md`}
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
                        onClick={e => handleClickBtn(e)}
                    >
                        {currentStatus ? "Close table" : "Open table"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;