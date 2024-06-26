import React, { useEffect, useState } from "react";
import StopWatch from "./StopWatch.js";
import instance from "../apis/index.api.ts";

const UserWaitingList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await instance.get('/division/table')
            setUsers(data)
        })()

    }, []);
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th style={{ textAlign: "center" }}>TimeResting</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item) => (
                                <tr key={Math.random()} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={item.avatar}
                                                        alt={item.fullname}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-bold">{item.fullname}</div>
                                            <div className="text-sm opacity-50">Staff</div>
                                        </div>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <StopWatch timeString={item.timeRest} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th style={{ textAlign: "center" }}>TimeWorking</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </>)
};

export default UserWaitingList;
