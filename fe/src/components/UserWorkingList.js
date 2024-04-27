import React, { useEffect, useState } from "react";
import { getUsers } from "../apis/user.api.ts";
import { useNavigate } from "react-router-dom";
import StopWatch from "./StopWatch.js";
import { getTables } from "../apis/table.api.ts";

const UserWorkingList = () => {
  const [users, setUsers] = useState([])
  const arrUser = []
  useEffect(() => {
    (async () => {
      const data = await getUsers()
      // const dataTable = await getTables()
      // console.log(dataTable);
      setUsers(data)

    })()

  }, []);
  (async () => {
    await users.map((item) => {
      if (item.role === 1 && item.status === true) {
        arrUser.push(item);
      }
    })
  })()
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
              <th>W/R</th>
              <th style={{ textAlign: "center" }}>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              arrUser.map((item) => (
                <tr key={item._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
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
                  <td>

                    <strong className="text-sm text-warning ">{item.countWork}</strong>/
                    <strong className="text-sm text-success ">{item.countRest}</strong>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <StopWatch />
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
              <th>W/R</th>
              <th style={{ textAlign: "center" }}>Time</th>
            </tr>
          </tfoot>

        </table>
      </div >
    </>

  );
};

export default UserWorkingList;
