import React, { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { isExpired, decodeToken } from "react-jwt";
import { getUserById, getUsers } from "../../apis/user.api.ts";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import StopWatch from "../../components/StopWatch.js";

const Dashboard = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await getUsers()
      setUsers(data)
    })()
    // console.log(users);

    const token = sessionStorage.getItem("token");
    // const { decodedToken, isExpired, reEvaluateToken } = useJwt(token);
    console.log("");
    if (token !== null) {
      const checkIdUser = jwtDecode(token);
      const idUser = checkIdUser.id;
      console.log("");
      (async () => {
        const data = await getUserById(idUser);
        // console.log(data.role);
        if (!data || data.role !== 3) {
          navigate("/home");
        }
      })();
    }
  }, []);

  return (
    <>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center py-6">
            <div className="stats shadow">
              <div className="stat place-items-center">
                <div className="stat-title">Downloads</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">
                  From January 1st to February 1st
                </div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">Users</div>
                <div className="stat-value text-secondary">4,200</div>
                <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>
            <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase py-6">
              130+ Handcoded Blocks
            </p>
          </div>

          <div className="overflow-x-auto py-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Time Working</th>
                  <th>Time Off</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user) => (
                    <tr key={user.id}>
                      <th key={user.id}>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
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
                          <div>
                            <div className="font-bold">{user.fullname}</div>
                            <div className="text-sm opacity-50">(Staff)</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <StopWatch />

                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Desktop Support Technician
                        </span>
                      </td>

                      <td>{user.timeoff} Minutes</td>
                      <th className="text-center">
                        <button className="btn btn-x text-success px-2 hover:bg-success hover:text-white">
                          <span className="loading loading-spinner hover:text-white"></span>
                          Working
                        </button>
                      </th>
                    </tr>
                  ))
                }
                {/* row 2 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
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
                      <div>
                        <div className="font-bold">Brice Swyre</div>
                        <div className="text-sm opacity-50">China</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Carroll Group
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Tax Accountant
                    </span>
                  </td>
                  <td>Red</td>
                  <th className="text-center">
                    <button className="btn btn-x text-error px-2 hover:bg-error hover:text-white">
                      <span className="loading loading-spinner hover:text-white"></span>
                      Working
                    </button>
                  </th>
                </tr>
              </tbody>
              {/* foot */}
              {/* <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </tfoot> */}
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
