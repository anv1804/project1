import React, { useEffect, useState } from "react";
import { getUsers } from "../apis/user.api.ts";
import { useNavigate } from "react-router-dom";
import StopWatch from "./StopWatch.js";

const UserWorkingList = () => {
  const [users, setUsers] = useState([])
  const arrUser = []
  useEffect(() => {
    (async () => {
      const data = await getUsers()

      setUsers(data)

    })()

  }, []);
  (async () => {
    await users.map((item) => {
      if (item.role == 1 && item.status == true) {
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
              <th style={{ textAlign: "center" }}>TimeWorking</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              arrUser.map((item) => (
                <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/415502626_890946702726019_5323667668092281664_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEpi10o13bLRiQAZseSF11zCYIr7-nYyzMJgivv6djLM39C0dPvqfIYAGJfjP5JDxDbiuRqMZ4yGAcqbAay1aXe&_nc_ohc=n1eRgXyYl4MAb5rfP_2&_nc_ht=scontent.fhan5-11.fna&oh=00_AfAA05ew8cyzbaTW52wYvWht2prbVcz29bUrzJvOK82izQ&oe=662962C5"
                            alt="Avatar Tailwind CSS Component"
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
                    <strong className="text-xs text-primary pl-3">1</strong>
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
              <th style={{ textAlign: "center" }}>TimeWorking</th>
            </tr>
          </tfoot>

        </table>
      </div>
    </>

  );
};

export default UserWorkingList;
