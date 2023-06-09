import React from "react";
import CompletedProjects from "../components/CompletedProjects";
import CurrentProjects from "../components/CurrentProjects";
import { RiAddLine } from "react-icons/ri";

import ProjectForm from "../components/AddProjectForm";

import { useState } from "react";

import Auth from "../utils/auth";
import { RETURN_USER } from "../utils/query";
import { useQuery, useMutation } from "@apollo/client";

const loggedIn = Auth.getToken();

const Dashboard = () => {
  const token = localStorage.getItem('id_token');
  Auth.isTokenExpired(token)
  const [displayModal, setDisplayModal] = useState(false);

  const url = window.location.href;
  const id = url.split("=").pop().trim();

  const { data, loading } = useQuery(RETURN_USER, {
    variables: { input: id },
  });

  if (loading) {
    return <p>Loading...</p>; // Return a loading indicator while data is being fetched
  }

  if (!data) {
    return <p>No data found.</p>; // Handle the case when no data is returned
  }
  return (
    <>
 
      {loggedIn ? (
        <div className="w-full h-full">
          <h1
            className="text-4xl font-semibold text-indigo-500 text-center"
          >
            <div className="inline-block bg-indigo-300 p-4 rounded-xl border  border-black border-b-4 border-r-4 border-black ">
            Welcome {data.returnUser.username}!
            </div>
          </h1>
          <div className="flex justify-center">
            <button
              onClick={() => setDisplayModal(true)}
              className="bg-indigo-400 text-white mt-4 rounded px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:translate-y-1 hover:shadow-md"
            >
              <RiAddLine className="inline-block mr-2" />
              Add Project
            </button>
          </div>
          <div className="pt-2">
            <h2 className="text-xl font-semibold text-center text-indigo-400">
              Current Projects:
            </h2>
            <CurrentProjects/>
            {/* <h2 className="text-xl font-semibold text-center text-indigo-400">
          {" "}
          Completed Projects:
        </h2> */}
            {/* <CompletedProjects /> */}
          </div>

          {displayModal ? (
            <modal>
              <div>
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                  <div className="relative w-auto max-w-3xl mx-auto my-6">
                    {/*content*/}
                    <div className="flex justify-center items-center flex-col bg-indigo-300 rounded-2xl border-4 border-b-8 border-r-8 border-black shadow-md">
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
                          className="bg-indigo-400 text-white mt-4 rounded px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:translate-y-1 hover:shadow-md"
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
      ) : (
        <div> You Must Log First In to Acess This Page! </div>
      )}
  
    </>
  );
};

export default Dashboard;
