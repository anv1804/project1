import React from "react";

export const Pagination = ({ countPage, onPagination , currentPage }) => {


    return (
        <>
            <input
                value={countPage}
                className="join-item btn btn-square btn-ghost"
                type="radio"
                name="options"
                aria-label={countPage+1}
                onClick={(e) => onPagination(e)}
                checked={countPage === currentPage ? true : false}
                readOnly
            />
        </>
    );
};
