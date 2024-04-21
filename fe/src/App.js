import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { getUsers } from "./apis/user.api.ts";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/admin/Dashboard.js";
import TableList from "./pages/admin/TableList";
import { useEffect, useState } from "react";

function App() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const data = getUsers();
    // console.log(data);
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path={`/`}>
            <Route path={`/register`} element={<Register />}></Route>
            <Route path={`/login`} element={<Login />}></Route>
          </Route>
          <Route path={`/admin`}>
            <Route path={`/admin/`} element={<Dashboard />}></Route>
            <Route path={`/admin/table`} element={<TableList />}></Route>
          </Route>
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
