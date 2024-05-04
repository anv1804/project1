import React, { useState } from "react";

import CountDown from "./CountDown";
import { ModalComfirmTable } from "./ModalComfirmTable.js";
import instance from "../apis/index.api.ts";
import { BtnTable } from "./BtnTable.js";

const Table = ({ table, mobile = false, onMobile = () => {} }) => {
    const [currentTable, setCurrentTable] = useState(table);

    const handleClickBtn = async (e) => {
        if (currentTable.status === false) {
            const { data } = await instance.get(
                `/division/user/${currentTable._id}`
            );
            if (!data) {
                return;
            }
            setCurrentTable(data);
        } else {
            const { data } = await instance.put(
                `/division/user/${currentTable._id}`,
                {
                    userId: currentTable.userId._id,
                }
            );
            setCurrentTable(data);
        }
        if (mobile) {
            onMobile(e, table._id);
        }
    };

    let [bg, border, btn] = ["bg-white-300", "border-dark-600", "success"];
    if (currentTable.status) {
        [bg, border, btn] = ["bg-sky-300", "border-sky-600", "error"];
    }
    if (mobile) {
        [bg, border, btn] = ["", "", "error"];
    }

    const handleTable = (e) => {
        const modal = document.getElementById(`${currentTable._id + "1"}`);

        modal.showModal();

        modal.querySelector("#deny").addEventListener(
            "click",
            () => {
                modal.querySelector(".modal-backdrop button").click();
            },
            { once: true }
        );

        modal.querySelector("#accept").addEventListener(
            "click",
            () => {
                modal.querySelector(".modal-backdrop button").click();
                handleClickBtn(e);
            },
            { once: true }
        );
    };

    return (
        <>
            <div
                className={`flex flex-col ${bg} ${mobile ? "" : "border"} ${border} rounded-md`}
            >
                <div className="flex flex-col justify-between flex-1 p-8">
                    <div className="flex-1">
                        <blockquote>
                            <div className="relative group cursor-pointer text-sky-50  overflow-hidden h-20 w-full rounded-md bg-bg-poker bg-cover p-2 flex justify-center items-center font-extrabold">
                                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                                <p className="z-10">{currentTable?.name}</p>
                            </div>
                        </blockquote>
                    </div>
                    <div className="mt-8">
                        <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                        <div className="flex items-center">
                            <img
                                className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                                src={
                                    currentTable?.userId?.avatar ??
                                    "https://cdnphoto.dantri.com.vn/AsZEMGiIKmiQUzQ3AeQo8679mA0=/thumb_w/1020/2024/03/20/20151023204134-poker-game-gambling-gamble-cards-money-chips-game-1710913967019.jpeg"
                                }
                                alt=""
                            />
                            <div className="ml-3">
                                <p className="text-base font-semibold text-gray-800 truncate">
                                    {currentTable?.userId?.fullname ?? "Empty Table"}
                                </p>
                                <p className="text-base text-gray-500 truncate">
                                    Staff
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-10 mt-5">
                        {currentTable.status && <CountDown />}
                        {currentTable.status ? (
                            <BtnTable
                                btn={btn}
                                title={"Close table"}
                                onTable={handleTable}
                            />
                        ) : (
                            <BtnTable
                                btn={btn}
                                title={"Open table"}
                                onTable={handleTable}
                            />
                        )}
                    </div>
                </div>
            </div>
            {!mobile && <ModalComfirmTable id={currentTable._id} />}
        </>
    );
};
export default Table;
