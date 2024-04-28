import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TERipple } from "tw-elements-react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* <!-- Back to top button --> */}
      {showButton && (
        <TERipple rippleColor="light">
          <button
            type="button"
            onClick={backToTop}
            className={` ${showButton ? `inline-block` : `hidden`
              } fixed z-20 bottom-[40px] right-[40px] p-3 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-sky-400 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out`}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-4 h-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
              ></path>
            </svg>
          </button>
        </TERipple>
      )}
      <div className="btm-nav fixed z-10 ">
        <Link to={`/message`}>
          <svg
            className="h-10 w-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M22 10V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H14"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M19.5 7C20.8807 7 22 5.88071 22 4.5C22 3.11929 20.8807 2 19.5 2C18.1193 2 17 3.11929 17 4.5C17 5.88071 18.1193 7 19.5 7Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M15.9965 11H16.0054"
                stroke="#292D32"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M11.9955 11H12.0045"
                stroke="#292D32"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M7.99451 11H8.00349"
                stroke="#292D32"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </g>
          </svg>
          <span className="btm-nav-label">Message</span>
        </Link>
        <Link to={`/home`} className="active">
          <svg
            className="h-10 w-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />{" "}
              <path
                d="M15 18H9"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />{" "}
            </g>
          </svg>
          <span className="btm-nav-label">Home</span>
        </Link>
        <button>
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-black-400 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </button>
      </div>
    </>

  );
};

export default Footer;
