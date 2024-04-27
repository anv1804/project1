import React, { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { getTableByName } from "../apis/table.api.ts";
import { ItemSearchResult } from "./ItemSearchResult.js";

export const SearchTable = ({ onShowSearchResult, onRenderResult }) => {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const eleInput = useRef();

    useEffect(() => {
        (async () => {
            let data = await getTableByName(searchValue);
            // console.log(data.length);
            setSearchResult(() => {
                if (data.length > 0) {
                    return [...data];
                }
                return [];
            });
        })();
    }, [searchValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleInputValue = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <>
            <Tippy
                placement="bottom"
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className="box p-0" tabIndex="-1" {...attrs}>
                        <div className="modal-box px-0 py-3 bg-white shadow-md shadow-slate-700 rounded-[8px] min-h-[100px] max-h-[400px] w-[329px]">
                            <div className="text-gray-600 text-lg pb-2 px-3">
                                Result
                            </div>
                            {searchResult.map((e) => (
                                <ItemSearchResult
                                    key={e._id}
                                    table={e}
                                    onShowSearchResult={onShowSearchResult}
                                    onHideResult={handleHideResult}
                                    onSetValue={setSearchValue}
                                />
                            ))}
                        </div>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (!searchValue) {
                            onRenderResult();
                            return;
                        }
                        handleHideResult(false);
                        setSearchValue('');
                        onShowSearchResult(searchResult);
                    }}
                >
                    <label className="input input-primary bg-white flex items-center max-w-[300px] min-w-[299px]">
                        <input
                            ref={eleInput}
                            type="text"
                            className="grow pr-auto text-black"
                            placeholder="Search"
                            value={searchValue}
                            onChange={(e) => handleInputValue(e)}
                            onFocus={() => setShowResult(true)}
                        />
                        {!!searchValue && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="max-w-4 max-h-4 fill-gray-400 mr-2 cursor-pointer"
                                onClick={() => {
                                    setSearchValue("");
                                    setSearchResult([]);
                                    eleInput.current.focus();
                                    onRenderResult();
                                }}
                            >
                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                            </svg>
                        )}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-8 h-8 text-black cursor-pointer border-l-2 border-slate-300 pl-3"
                            onClick={() => {
                                onShowSearchResult(searchResult);
                            }}
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                </form>
            </Tippy>
        </>
    );
};
