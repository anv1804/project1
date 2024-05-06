import React, { useEffect, useState } from "react";
import { getUsers } from "../apis/user.api.ts";
import StopWatch from "./StopWatch.js";

const UserWorkingList = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    (async () => {
      const data = await getUsers()
      const arrUser = []
      data.map((user) => {
        if (user.status == true && user.timeWork != 0) {
          arrUser.push(user)
          arrUser.sort((a, b) => {
            return b.timeWork - a.timeWork
          })
        }
      })
      setUsers(arrUser)
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
              <th>Table</th>
              <th style={{ textAlign: "center" }}>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              users.map((item) => (
                <tr key={Math.random()} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td>
                    <div className="flex items-center gap-2">
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
                  <td >
                    <div>
                      <div className="font-bold">{item.fullname}</div>
                      <div className="text-sm opacity-50">Staff</div>
                    </div>
                  </td>
                  <td>
                    <strong className="text-sm text-primary pl-3">1</strong>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <StopWatch timeString={item.timeWork} />
                  </td>

                </tr>
              ))
            }

          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Table</th>
              <th style={{ textAlign: "center" }}>Time</th>
            </tr>
          </tfoot>

        </table>
      </div >
    </>

  );
};

export default UserWorkingList;
