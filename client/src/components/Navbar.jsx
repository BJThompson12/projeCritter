import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Auth from "../utils/auth";

import Button from "../components/Button";
import Modal from "../components/Modal";
import Login from "./Login";
import SignUp from "./SignUp";

const loggedIn = Auth.getToken();

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  const handleClick = () => setNav((prevNav) => !prevNav);

  const navLink = "text-xl font-medium text-white hover:text-emerald-200";
  const navLinkActive = "text-xl font-medium text-emerald-200 hover:text-white";
  
  return (
    <div className="sticky top-0 z-10 w-full border-b-4 border-black ">
      <header className="w-full h-20 bg-indigo-500 drop-shadow-md">
        <div className="flex items-center justify-between w-full h-full px-5">
          {/* site name container */}
          <a
            href="/"
            className="mb-1 text-4xl tracking-wide text-white align-middle font-display md:text-5xl"
          >
            projeCritter
          </a>

          {/* desktop navigation */}
          <nav>
            <ul className="hidden space-x-6 md:flex md:items-center">
              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? navLinkActive
                      : isActive
                      ? navLinkActive
                      : navLink
                  }
                >
                  FAQ
                </NavLink>
              </li>
              {loggedIn ? (
                <>
                  <li>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? navLinkActive
                          : isActive
                          ? navLinkActive
                          : navLink
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <Button width="w-fit" onClick={() => Auth.logout()}>
                      Log Out
                    </Button>
                  </li>
                </>
              ) : (
                <li>
                  <Button
                    width="w-fit"
                    onClick={() => setDisplayModal(displayModal ? false : true)}
                  >
                    Log In or Sign Up
                  </Button>
                </li>
              )}
            </ul>
          </nav>

          {/* mobile menu button */}
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? (
              <Bars3Icon className="w-8 text-white stroke-1 stroke-white min-h-[42px] min-w-[42px]" />
            ) : (
              <XMarkIcon className="w-8 text-white stroke-1 stroke-white min-h-[42px] min-w-[42px]" />
            )}
          </div>
        </div>

        {/* mobile navigation */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute bg-indigo-500 text-slate-100 w-full px-8 pb-4 md:hidden space-y-2 text-right border-b-4 border-black"
          }
        >
          <li>
            <NavLink
              to="/faq"
              className={({ isActive, isPending }) =>
                isPending ? navLinkActive : isActive ? navLinkActive : navLink
              }
            >
              FAQ
            </NavLink>
          </li>
          {loggedIn ? (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? navLinkActive
                      : isActive
                      ? navLinkActive
                      : navLink
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <Button width="w-fit" onClick={() => Auth.logout()}>
                  Log Out
                </Button>
              </li>
            </>
          ) : (
            <Button
              width="w-fit"
              onClick={() => setDisplayModal(displayModal ? false : true)}
            >
              Log In or Sign Up
            </Button>
          )}
        </ul>
      </header>

      {/* login modal */}
      <Modal displayModal={displayModal} setDisplayModal={setDisplayModal}>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 md:flex-nowrap md:min-w-[32vw]">
          <Login />
          <hr className="w-full h-0.5 border-0 rounded md:my-10 bg-indigo-500 md:hidden" />
          <SignUp />
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
