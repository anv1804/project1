import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = (token) => {
  const [check, setCheck] = useState([token.token])
  const navigate = useNavigate()
  const Logout = () => {
    sessionStorage.clear("token");
    navigate('/login');
  }
  // console.log(token);
  useEffect(() => {
    if (token.token === undefined || token.token === null) {
      setCheck("")
    } else {
      setCheck(token.token)
    }
  }, []);
  return (
    <header>
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 lg:h-20">
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <Link to={`/home`} className="text-base font-medium text-black">
                Home
              </Link>
              <Link to={`/community`} className="text-base font-medium text-black">
                Community
              </Link>
              <Link to={`/about`} className="text-base font-medium text-black">
                About
              </Link>
              <Link
                to={`/contact`}
                className="text-base font-medium text-black"
              >
                Contact
              </Link>
            </div>
            <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img
                    className="w-auto h-8 lg:h-10"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 lg:hidden"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              {
                check == "" &&
                <Link
                  id="signin"
                  to={`/login`}
                  className="flex items-center justify-center text-black"
                >
                  Sign in
                </Link>
              }
              {
                check &&
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div tabIndex={0} role="button" className="avatar online">
                    <div className="w-10 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  {/* <div tabIndex={0} role="button" className="btn m-1">Click</div> */}
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <button className="btn">Profile</button>
                    </li>
                    <li>
                      <button className="btn">Setting</button>
                    </li>
                    <li>
                      <button className="btn">Language</button>
                    </li>
                    <li>
                      <button className="btn text-error text-bold" onClick={Logout}><strong>Logout</strong></button>
                    </li>
                  </ul>
                </div>}

              {/* <Link
                id="singed"
                to={"/login"}
                className="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full"
              >
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </Link> */}
            </div>
          </nav>
        </div>
      </div>
      {/* 
      <nav className="py-4 bg-white lg:hidden">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <ul className="menu menu-xs w-full">
            <li>
              <details open>
                <summary>
                  <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                    Menu
                  </p>
                </summary>
                <ul>
                  <div className="flex flex-col space-y-2">
                    <a
                      href="#"
                      title=""
                      className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                    >
                      {" "}
                      Features{" "}
                    </a>

                    <a
                      href="#"
                      title=""
                      className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                    >
                      {" "}
                      Solutions{" "}
                    </a>

                    <a
                      href="#"
                      title=""
                      className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                    >
                      {" "}
                      Resources{" "}
                    </a>

                    <a
                      href="#"
                      title=""
                      className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                    >
                      {" "}
                      Pricing{" "}
                    </a>
                  </div>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </nav> */}
    </header>
  );
};

export default Header;
