import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/admin/Dashboard.js";
import TableList from "./pages/admin/TableList";
import { isExpired, decodeToken } from "react-jwt";
import { jwtDecode } from "jwt-decode";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";
import Message from "./components/Message.js";
import Contact from "./pages/Contact.js";
function App() {
  const token = sessionStorage.getItem("token");
  return (
    <>
      <Routes path={`/`}>
        <Route path={`/message`} element={<Message />}></Route>
      </Routes>
      <Header token={token} />

      <div className="container mx-auto min-h-full">
        <Routes>
          <Route path={`/`}>
            <Route path={`/home`} element={<Home />}></Route>
            <Route path={`/register`} element={<Register />}></Route>
            <Route path={`/login`} element={<Login />}></Route>
            <Route path={`/contact`} element={<Contact />}></Route>
          </Route>
          {/* <Route path={`*`} element={<NotFound />}></Route> */}
        </Routes>

        <Routes>
          <Route path={`/admin`}>
            <Route path={`/admin/`} element={<Dashboard />}></Route>
            <Route path={`/admin/table`} element={<TableList />}></Route>
          </Route>
          {/* <Route path={`*`} element={<NotFound />}></Route> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
