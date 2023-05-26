import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-screen h-[100px] z-10 bg-indigo-500 fixed drop-shadow-md">
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
          {/* {Auth.loggedIn() ? (
            <>
    
          <li>Dashboard</li>
          <div><button>Sign Out</button></div>
           </>
          ) : (
            <>
             <div><button>Sign Out</button></div>
            </>
          )}
           */}
          <div>
            <button className="px-4 py-2 bg-white text-indigo-500 ">
              Sign up/Log in
            </button>
          </div>
        </ul>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-6" /> : <XMarkIcon className="w-6" />}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute bg-indigo-500  text-slate-100 w-full px-8"
        }
      >
        <li>About</li>
          {/* {Auth.loggedIn() ? (
            <>
    
          <li>Dashboard</li>
          <div><button>Sign Out</button></div>
           </>
          ) : (
            <>
             <div><button>Sign Out</button></div>
            </>
          )}
           */}
        <div className="py-3">
          <button className="px-4 py-2 bg-white text-indigo-500 ">
            Sign up/Log in
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
