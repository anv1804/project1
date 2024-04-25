import React, { useEffect, useRef, useState } from "react";
import { createTable, getTables } from "../../apis/table.api.ts";
import Table from "../../components/Table.js";
import { Pagination } from "../../components/Pagination.js";
import { TableMobile } from "../../components/TableMobile.js";

const TableList = () => {
    const [listTables, setListTables] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [mobile, setMobile] = useState(false);

    const countPage = Math.floor(listTables.length / 6);

    const elementTableName = useRef();

    useEffect(() => {
        (async () => {
            const data = await getTables();
            setListTables(data);
        })();

        if (window.innerWidth > 480) {
            setMobile(false);
        } else {
            setMobile(true);
        }
    }, [currentPage]);

    const handleCreateTable = async () => {
        let valueName = elementTableName.current.value;

        if (valueName.trim()) {
            const data = await createTable({ name: valueName, status: false });
            document.querySelector("#btnCloseModalCreate").click();
            setListTables([data, ...listTables]);
            setCurrentPage(0);
            elementTableName.current.value = "";
            return;
        }

        elementTableName.current.focus();
    };

    const handlePagination = (e) => {
        setCurrentPage(Number(e.target.value));
        window.scrollTo(0, 200);
    };

    return (
        <>
            <section className="py-5 bg-white sm:pb-16 sm:pt-8">
                <div className="max-w-7xl mx-auto">
                    <button
                        className="btn btn-success text-white mr-4 mb-8 sm:mx-6 lg:mx-8 float-end"
                        onClick={() =>
                            document
                                .getElementById("modalCreateTable")
                                .showModal()
                        }
                    >
                        Create table +
                    </button>
                    {/* Modal Create Table */}
                    <dialog id="modalCreateTable" className="modal -mr-4">
                        <div className="modal-box bg-white">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button
                                    id="btnCloseModalCreate"
                                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"
                                >
                                    ✕
                                </button>
                            </form>
                            <label className="input input-primary flex items-center gap-2 bg-slate-50 text-black border-black mt-5">
                                Table
                                <input
                                    ref={elementTableName}
                                    type="text"
                                    className="grow"
                                    placeholder="Name..."
                                />
                            </label>
                            <div className="flex justify-center mt-5">
                                <button
                                    onClick={handleCreateTable}
                                    className="btn btn-success text-white"
                                >
                                    Create +
                                </button>
                            </div>
                        </div>
                    </dialog>

                    <div className="px-4 sm:px-6 lg:px-8 clear-end">
                        <div className="grid grid-cols-2 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
                            {listTables.map((item, index) => {
                                let startPoint =
                                    currentPage * 6 === 0
                                        ? 0
                                        : currentPage * 6;
                                        let endPoint = startPoint === 0 ? 5 : startPoint+6;
                                if (
                                    startPoint <= index &&
                                    endPoint >= index
                                ) {
                                    return !mobile ? (
                                        <Table key={item._id} table={item} />
                                    ) : (
                                        <TableMobile
                                            key={item._id}
                                            table={item}
                                        />
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <div className="join border">
                            {[...Array(countPage + 1)].map((e, i) => (
                                <Pagination
                                    key={i}
                                    countPage={i}
                                    onPagination={handlePagination}
                                    currentPage={currentPage}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TableList;
