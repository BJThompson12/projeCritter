import React from "react";
import CurrentProjects from "../components/CurrentProjects";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { RiAddLine } from "react-icons/ri";

import ProjectForm from "../components/AddProjectForm";

import { useState } from "react";

import Auth from "../utils/auth";
import { RETURN_USER } from "../utils/query";
import { useQuery } from "@apollo/client";

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
    <h1 className="mb-2 text-4xl font-semibold text-center text-black">
      <div className="inline-block p-4 bg-indigo-500 border border-2 border-black rounded-xl">
        Welcome, {data.returnUser.username}!
      </div>
    </h1>
    <div className="">

      <div className="flex justify-center items-center pb-2">
        <h2 className="mt-2 text-xl bg-green-200 w-5/6 md:w-1/6 rounded-lg font-semibold text-center text-black p-2 border border-2 border-black">
          Current Projects:
        </h2>
        
      </div>
      <div className="flex justify-center p-2">
        <Button onClick={() => setDisplayModal(true)} width="w-fit">
          <RiAddLine className="inline-block mr-2" />
          Add Project
        </Button>
      </div>
      <CurrentProjects />
    </div>


    <Modal displayModal={displayModal} setDisplayModal={setDisplayModal}>
      <ProjectForm setDisplayModal={setDisplayModal} />
    </Modal>
  </div>
) : (
  <div>You Must Log In First to Access This Page!</div>
)}
    </>
  );
};

export default Dashboard;
