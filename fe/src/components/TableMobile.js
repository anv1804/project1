import React, { useState } from "react";
import { updateTable } from "../apis/table.api.ts";
import { ModalDetailTable } from "./ModalDetailTable.js";

export const TableMobile = ({ table }) => {
    const [currentStatus, setcurrentStatus] = useState(table.status);

    const handleClickBtn = async () => {
        let data = await updateTable(table._id, {
            status: !currentStatus,
        });
        table.status = !currentStatus;
        setcurrentStatus(!currentStatus);
    };

    let [bg, border] = ["bg-white-300", "border-dark-600"];
    if (currentStatus) {
        [bg, border] = ["bg-sky-300", "border-sky-600"];
    }

    const handleMobile = (e , id) => {
        e.target.closest('.modal').querySelector(`.modal-backdrop button`).click();
        setcurrentStatus(!currentStatus);
    }

    return (
        <>
            <button
                className={`flex flex-col justify-between h-[120px] ${bg} border ${border} rounded-md pl-3 py-1`}
                onClick={() => {
                    if (currentStatus) {
                        document.getElementById(table._id).showModal();
                    } else {
                        handleClickBtn();
                    }
                }}
            >
                <div className="text-black font-bold">{table.name}</div>
                <div
                    className={`flex flex-col ${currentStatus ? "" : "hidden"}`}
                >
                    <span className="countdown font-mono text-sm space-x-1 text-slate-600 font-bold">
                        <span style={{ "--value": 10 }}></span>h
                        <span style={{ "--value": 24 }}></span>m
                        <span style={{ "--value": 41 }}></span>s
                    </span>
                    <div className="text-black">Staff: Lee Do</div>
                </div>
            </button>
            {currentStatus && <ModalDetailTable table={table} handleMobile={handleMobile}/>}
        </>
    );
};
