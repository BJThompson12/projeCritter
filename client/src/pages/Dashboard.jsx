import React from "react";
import CompletedProjects from "../components/CompletedProjects";
import CurrentProjects from "../components/CurrentProjects";
import { RiAddLine } from "react-icons/ri";

import ProjectForm from "../components/AddProjectForm";

import { useState } from "react";

import Auth from "../utils/auth";

const loggedIn = Auth.getToken();

const Dashboard = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <>
    
    {loggedIn ? (<div className="w-full h-full md:h-[80vh]">
      <h1 className="text-4xl font-semibold text-indigo-500 text-center">
        Welcome User!
      </h1>
      <div className="flex justify-center">
        <button
          onClick={() => setDisplayModal(true)}
          className="bg-indigo-500 text-white py-2 px-4 mt-4 rounded"
        >
          <RiAddLine className="inline-block mr-2" />
          Add Project
        </button>
      </div>
      <div className="pt-2">
        <h2 className="text-xl font-semibold text-center text-indigo-400">
          Current Projects:
        </h2>
        <CurrentProjects />
        <h2 className="text-xl font-semibold text-center text-indigo-400">
          {" "}
          Completed Projects:
        </h2>
        <CompletedProjects />
      </div>

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
                        <ProjectForm />
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
    </div> ) : (<div> You Must Log First In to Acess This Page! </div>)}
    
    </>
  );
};

export default Dashboard;
