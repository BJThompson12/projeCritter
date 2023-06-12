import React from "react";
import CurrentProjects from "../components/CurrentProjects";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { PlusIcon } from "@heroicons/react/24/solid";

import ProjectForm from "../components/AddProjectForm";

import { useState } from "react";

import Auth from "../utils/auth";
import { RETURN_USER } from "../utils/query";
import { useQuery } from "@apollo/client";

const loggedIn = Auth.getToken();

const Dashboard = () => {
  const token = localStorage.getItem("id_token");
  Auth.isTokenExpired(token);
  const [displayModal, setDisplayModal] = useState(false);

  const url = window.location.href;
  const id = url.split("=").pop().trim();

  const { data, loading } = useQuery(RETURN_USER, {
    variables: { input: id },
  });

  if (loading) {
    return (
      <p className="px-2 py-1 italic bg-indigo-100 rounded-lg">Loading...</p>
    );
  }

  if (!data) {
    return (
      <p className="px-2 py-1 italic bg-indigo-100 rounded-lg">
        No data found.
      </p>
    );
  }

  return (
    <div className="w-full max-w-[1280px] text-center md:text-left">
      {loggedIn ? (
        <>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <h2 className="mb-4 text-3xl font-extrabold text-indigo-500">
              Welcome, {data.returnUser.username}!
            </h2>
            <Button onClick={() => setDisplayModal(true)} width="w-fit">
              <PlusIcon className="inline-block w-4 h-4 mb-1 mr-1 stroke-1 stroke-black" />
              Add Project
            </Button>
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <h3 className="mt-4 mb-2 text-xl font-bold text-left text-black">
              Current Projects:
            </h3>
            <CurrentProjects />
          </div>

          <Modal displayModal={displayModal} setDisplayModal={setDisplayModal}>
            <ProjectForm setDisplayModal={setDisplayModal} />
          </Modal>
        </>
      ) : (
        <p className="italic">Please log in to access this page.</p>
      )}
    </div>
  );
};

export default Dashboard;
