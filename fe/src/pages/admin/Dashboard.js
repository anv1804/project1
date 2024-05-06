import React, { useEffect, useState } from "react";
import { getUserById, getUsers } from "../../apis/user.api.ts";
import { useNavigate } from "react-router-dom";
import UserWorkingList from "../../components/UserWorkingList.js";
import UserRestingList from "../../components/UserRestingList.js";
import UserWaitingList from "../../components/UserWaitingList.js";

const Dashboard = () => {
  const time = new Date()
  // console.log(time);
  const [users, setUsers] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await getUsers()
      setUsers(data)
    })()
  }, []);

  return (
    <>
      {/* <input type="checkbox" value="dark" className="checkbox theme-controller" /> */}
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className=" px-4 mx-auto max-w-7xl sm:px-4 lg:px-4 ">
          <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Staff" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-2">
              <UserRestingList />
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Working" defaultChecked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-2">
              <UserWorkingList />
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Waiting" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-2">
              <UserWaitingList />
            </div>
          </div>
          <div className="overflow-x-auto py-5">

          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
