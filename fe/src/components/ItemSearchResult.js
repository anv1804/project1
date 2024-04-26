import React from "react";

export const ItemSearchResult = ({table , onShowSearchResult , onHideResult , onSetValue}) => {
    return (
        <div className="hover:bg-gray-200 cursor-pointer" onClick={() => {
            onHideResult(false);
            onSetValue('');
            onShowSearchResult([table]);
        }}>
            <div className="flex items-center justify-between py-1 px-4">
                <div className="flex">
                    <div className="avatar">
                        <div className="w-12 rounded-full bg-slate-400 ">
                            <p className="leading-[48px] text-red-500 font-bold text-[14px]">
                                {table.name}
                            </p>
                        </div>
                    </div>
                    <div className="pl-4">
                        <p className="text-black font-bold text-[16px]]">
                            Staff:
                        </p>
                        <p className="text-gray-700 font-[550] text-[14px]">
                            Le Do
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <div className="badge badge-success badge-xs"></div>
                    <p className="text-gray-600 text-[14px] font-[600]">
                        Avtice
                    </p>
                </div>
            </div>
        </div>
    );
};
