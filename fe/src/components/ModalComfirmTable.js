import React from "react";

export const ModalComfirmTable = ({id}) => {
    return (
        <>
            <dialog id={id + "1"} className="modal modal-top mt-5">
                <div className="modal-box w-max bg-transparent mx-auto p-0">
                    <div
                        role="alert"
                        className="alert bg-white flex flex-col px-10 py-4"
                    >
                        <div className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="stroke-info shrink-0 w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <span className="text-black font-bold">
                                we use cookies for no reason.
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <button id="deny" className="btn btn-sm">
                                Deny
                            </button>
                            <button
                                id="accept"
                                className="btn btn-sm btn-primary text-white"
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};
