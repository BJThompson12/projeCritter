import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Auth from "../utils/auth";

import Login from "./Login";
import SignUp from "./SignUp";

const loggedIn = Auth.getToken();

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  const handleClick = () => setNav((prevNav) => !prevNav);

  // styles
  const navLink = "text-xl text-white hover:underline";
  const navButton =
    "px-4 py-2 text-lg font-medium text-indigo-500 rounded-md bg-white hover:bg-indigo-200";

  return (
    <div className="sticky top-0 z-10 w-full ">
      <header className="w-full h-20 bg-indigo-500 drop-shadow-md">
        <div className="flex items-center justify-between w-full h-full px-2">
          {/* site name container */}
          <a
            href="/"
            className="px-4 text-slate-100 hover:text-indigo-200"
            style={{
              fontFamily: "Sniglet, cursive",
              fontWeight: 800,
              fontSize: "40px",
            }}
          >
            projeCritter
          </a>

          {/* desktop navigation */}
          <nav>
            <ul className="hidden space-x-4 md:flex md:items-center">
              <li>
                <a href="/faq" className={navLink}>
                  FAQ
                </a>
              </li>
              {loggedIn ? (
                <>
                  <li>
                    <a href="/dashboard" className={navLink}>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <button className={navButton} onClick={() => Auth.logout()}>
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    className={navButton}
                    onClick={() => setDisplayModal(displayModal ? false : true)}
                  >
                    Sign Up / Log In
                  </button>
                </li>
              )}
            </ul>
          </nav>

          {/* mobile menu button */}
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? (
              <Bars3Icon className="w-8 text-white" />
            ) : (
              <XMarkIcon className="w-8 text-white" />
            )}
          </div>
        </div>

        {/* mobile navigation */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute bg-indigo-500 text-slate-100 w-full px-8 pb-4 md:hidden space-y-2 text-right"
          }
        >
          <li>
            <a href="/about" className={navLink}>
              About
            </a>
          </li>
          {loggedIn ? (
            <>
              <li>
                <a href="/dashboard" className={navLink}>
                  Dashboard
                </a>
              </li>
              <li>
                <button className={navButton} onClick={() => Auth.logout()}>
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <button
              onClick={() => setDisplayModal(displayModal ? false : true)}
              className={navButton}
            >
              Sign Up / Log In
            </button>
          )}
        </ul>
      </header>

      {/* login modal */}
      {displayModal ? (
        <modal>
          <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
              <div className="relative w-auto max-w-3xl mx-auto my-6">
                {/*content*/}
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  {/*body*/}

                  <div className="p-10 ">
                    <div>
                      <div className="flex flex-wrap justify-center gap-1 px-2 display">
                        {" "}
                        <SignUp /> <Login />{" "}
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-center p-2 border-t border-solid rounded-b border-slate-200">
                    <button
                      className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                      type="button"
                      onClick={() => setDisplayModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </div>
        </modal>
      ) : null}
    </div>
  );
};

export default Navbar;
