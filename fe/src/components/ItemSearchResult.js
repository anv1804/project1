import React from "react";

export const ItemSearchResult = ({ table, onShowSearchResult, onHideResult, onSetValue }) => {
    console.log(table);
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
                            <img src="https://wordpresscdn.winzogames.com/prod/blog/wp-content/uploads/2022/03/21122310/POKER-1.jpg" alt={table?.name} />
                        </div>
                    </div>
                    <div className="pl-4">
                        <p className="text-black font-bold text-[16px]]">
                            {table?.name}
                        </p>
                        <p className="text-gray-700 font-[550] text-[14px]">
                            {table?.userId?.fullname ?? "None Staff"}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    {table?.status == true && <div className="badge badge-success badge-xs"></div>}
                    {table?.status == false && <div className="badge badge-error badge-xs"></div>}
                    <p className="text-gray-600 text-[14px] font-[600]">
                        {table?.status == true && "Active"}
                        {table?.status == false && "Passive"}

                    </p>

                </div>
            </div>
            <hr className="border-gray-200 dark:border-gray-700"></hr>
        </div>
    );
};
