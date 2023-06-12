import CritterContainer from "../components/CritterContainer";
import ProjectColumn from "../components/ProjectColumn";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { RETURN_PROJECT, RETURN_TASKS } from "../utils/query";
import TaskForm from "../components/AddTaskForm";
import Auth from "../utils/auth";

const Project = () => {
  const token = localStorage.getItem('id_token');
  Auth.isTokenExpired(token)
  const [displayModal, setDisplayModal] = useState(false);
  // collapse/expand column state
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  };

  const url = window.location.href;
  const id = url.split("=").pop().trim();

  const { data, loading } = useQuery(RETURN_PROJECT, {
    variables: { input: id },
  });

  const { data: tasksData, loading: tasksLoading } = useQuery(RETURN_TASKS, {
    variables: { input: id },
  });

  if (loading) {
    return <p className="italic">Loading...</p>;
  }

  if (!data) {
    return <p className="italic">No data found.</p>;
  }

  let moodVal = 0;
  if (tasksLoading) {
    return <p className="p-2 italic">Loading...</p>;
  } else {
    const tasks = tasksData?.returnTasks || {};

    const filterTasks = (num) => {
      return tasks.filter((t) => t.taskstate === num);
    };
    moodVal =
      filterTasks(1).length * 0.05 +
      filterTasks(2).length * 0.2 +
      filterTasks(3).length;
  }

  return (
    <section className="flex flex-wrap md:flex-nowrap flex-col items-center justify-start w-full h-full md:h-[75vh] 3xl:h-[70vh]">
      {/* page heading */}
      <h2 className="self-start mb-4 text-3xl font-extrabold text-indigo-500">
        {data.returnProject.title}
      </h2>

      {/* project container */}
      <div className="flex flex-col items-stretch w-full h-full min-h-0 space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        {/* critter column */}
        <div className="flex flex-col">
          <div
            className={`flex flex-col justify-between w-full min-h-0 mb-4 p-2 bg-indigo-100 grow shrink-0 basis-full rounded-xl ${
              open
                ? `md:min-w-[277px] md:basis-1/4`
                : `border-indigo-100 md:min-w-fit md:basis-0`
            }`}
          >
            <Button
              onClick={toggle}
              width="w-fit"
              align={`self-end ${!open && "md:self-center"}`}
              padding="md:p-0"
            >
              {/* up/down for mobile */}
              {open ? (
                <ChevronUpIcon className="block w-6 mx-auto stroke-1 md:hidden stroke-black" />
              ) : (
                <ChevronDownIcon className="block w-6 mx-auto stroke-1 md:hidden stroke-black" />
              )}
              {/* left/right for desktop */}
              {open ? (
                <ChevronLeftIcon className="hidden w-6 mx-auto stroke-1 md:block stroke-black" />
              ) : (
                <ChevronRightIcon className="hidden w-6 mx-auto stroke-1 md:block stroke-black" />
              )}
            </Button>
            {open ? (
              <CritterContainer
                name={data.returnProject.critterName}
                born={data.returnProject.createdAt}
                moodVal={moodVal}
              />
            ) : (
              ""
            )}
          </div>
            <Button onClick={() => setDisplayModal(true)}>
              <PlusIcon
                className={`inline-block w-4 h-4 mb-1 stroke-1 stroke-black ${open && "mr-1"}`}
              />
              <span className="inline md:hidden"> Add Task</span>
              <span className="hidden md:inline">{open && " Add Task"}</span>
            </Button>
        </div>
        {/* project columns container*/}
        <div className="flex flex-col items-stretch w-full h-full space-y-4 md:pb-1.5 md:space-y-0 md:space-x-4 md:overflow-x-auto md:flex-row custom-scroll">
          <ProjectColumn title="Backlog" colNum={1} />
          <ProjectColumn title="Ready" colNum={2} />
          <ProjectColumn title="In Progress" colNum={3} />
          <ProjectColumn title="Done" colNum={4} />
        </div>
      </div>

      {/* add task modal */}
      <Modal displayModal={displayModal} setDisplayModal={setDisplayModal}>
        <TaskForm setDisplayModal={setDisplayModal} />
      </Modal>
    </section>
  );
};

export default Project;
