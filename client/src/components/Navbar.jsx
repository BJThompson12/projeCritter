import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Login from "./Login";
import SignUp from "./SignUp";

const Auth = { loggedIn: false };

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  const handleClick = () => setNav((prevNav) => !prevNav);

  return (
    <nav>
      <div className="w-screen h-[100px] z-10 bg-indigo-500 sticky top-0 drop-shadow-md">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div
            className="text-slate-100 px-4"
            style={{
              fontFamily: "Sniglet, cursive",
              fontWeight: 800,
              fontSize: "40px",
            }}
          >
            projectCritter
          </div>
          <ul className="hidden md:flex space-x-4 text-slate-100">
            <li>About</li>
            <div>
              {Auth.loggedIn ? (
                <>
                  <li>Dashboard</li>
                  <li>
                    <button className="px-4 py-2 bg-white text-indigo-500 ">
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <button
                    className="bg-white text-indigo-500 rounded-md px-8 py-2 text-base font-medium hover:bg-blue-100
    focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setDisplayModal(displayModal ? false : true)}
                  >
                    Sign up/Log in
                  </button>
                </>
              )}
            </div>
          </ul>
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? (
              <Bars3Icon className="w-6" />
            ) : (
              <XMarkIcon className="w-6" />
            )}   
          </div>
        </div>
        <ul
        className={
          !nav ? "hidden" : "absolute bg-indigo-500  text-slate-100 w-full px-8 md:hidden"
        }
      >
        <li>About</li>
          {Auth.loggedIn ? (
            <>
    
          <li>Dashboard</li>
          <li><button>Sign Out</button></li>
           </>
          ) : (
            <>
            <div className="py-3">
          <button className="px-4 py-2 bg-white text-indigo-500 ">
            Sign up/Log in
          </button>
        </div>
     
            </>
          )}
        </ul>
      </div>

      {displayModal ? (
        <modal>
          <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Modal Title</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setDisplayModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}

                  <div className="relative p-20">
                    <div>
                      <br />
                      <br />
                      <br />
                     
                <div className='display flex'> <Login />  <SignUp /> </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setDisplayModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        </modal>
      ) : null}
    </nav>
  );
};

export default Navbar;
