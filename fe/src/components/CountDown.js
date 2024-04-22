import React from "react";

function CountDown() {
    return (
        <div className="bg-primary rounded-lg h-max grid grid-flow-col gap-1 text-center">
            <div className="flex flex-col p-2 text-white justify-center items-center">
                <span className="countdown font-mono text-xl">
                    <span style={{ "--value": 24 }}></span>
                </span>
                min
            </div>
            <span className="text-white text-[20px]">:</span>
            <div className="flex flex-col p-2 text-white justify-center items-center">
                <span className="countdown font-mono text-xl">
                    <span style={{ "--value": 54 }}></span>
                </span>
                sec
            </div>
        </div>
    );
}

export default CountDown;
