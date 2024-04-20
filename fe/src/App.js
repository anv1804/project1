import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { getUsers } from "./apis/user.api.ts";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/admin/Dashboard.js";

function App() {
  const data = getUsers();
  console.log(data);
  return (
    <>
      <Header />
      <div className="container py-5">
        <Routes>
          <Route path={`/`}>
            <Route path={`/register`} element={<Register />}></Route>
            <Route path={`/login`} element={<Login />}></Route>
          </Route>
          <Route path={`/admin`}>
            <Route path={`/admin/`} element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
