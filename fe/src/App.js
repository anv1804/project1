import "./App.css";
import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import { getUserById, getUsers } from "./apis/user.api.ts";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/admin/Dashboard.js";
import TableList from "./pages/admin/TableList";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { isExpired, decodeToken } from "react-jwt";
import { jwtDecode } from "jwt-decode";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";
import { getTables } from "./apis/table.api.ts";
function App() {
  const [listTables, setListTables] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getTables();
      setListTables(data);
    })();
  }, []);
  // const [users, setUsers] = useState([])
  // const navigate = useNavigate()
  // useEffect(() => {
  //   ; (async () => {
  //     const data = await getUsers()
  //     setUsers(data)
  //   })()
  // }, [])
  // useEffect(() => {


  // }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path={`/`}>
            <Route path={`/home`} element={<Home />}></Route>
            <Route path={`/register`} element={<Register />}></Route>
            <Route path={`/login`} element={<Login />}></Route>
          </Route>
          <Route path={`/admin`}>
            <Route path={`/admin/`} element={<Dashboard />}></Route>
            <Route path={`/admin/table`} element={<TableList />}></Route>
          </Route>
          <Route path={`*`} element={<NotFound />}></Route>

        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
