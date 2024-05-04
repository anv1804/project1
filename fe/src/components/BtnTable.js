import React from "react";

export const BtnTable = ({ btn, title, onTable }) => {
    return (
        <button
            className={`btn btn-active btn-${btn} text-white flex-1`}
            onClick={(e) => onTable(e)}
        >
            {title}
        </button>
    );
};
