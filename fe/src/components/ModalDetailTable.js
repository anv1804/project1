import React from "react";
import Table from "./Table";

export const ModalDetailTable = ({table , handleMobile}) => {
    return (
        <dialog id={`${table._id}`} className="modal">
            <div className="modal-box bg-white">
                <Table table={table} mobile={true} onMobile={handleMobile} />
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};
