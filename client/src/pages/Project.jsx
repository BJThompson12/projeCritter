import CritterContainer from "../components/CritterContainer";
import ProjectColumn from "../components/ProjectColumn";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { RETURN_PROJECT, RETURN_TASKS } from "../utils/query";
import TaskForm from "../components/AddTaskForm";


const Project = () => {
  
  const url = window.location.href;
  const id = url.split("=").pop().trim();
 
  const { data: data1, loading: loading1} = useQuery(RETURN_TASKS, {
    variables: {input: id} })
    console.log(data1)

    const tasks = data1.returnTasks
    console.log(tasks)
    const moodValues = tasks.map((task) => task.taskstate)
    console.log(moodValues)
    const moodSum = moodValues.reduce((sum, val) => sum + val);
    console.log(moodSum)
    const moodVal1 = moodSum / moodValues.length;
  console.log(moodVal1)

console.log(moodValues)
 


  const [displayModal, setDisplayModal] = useState(false);
  // collapse/expand state
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  };


 const { data, loading } = useQuery(RETURN_PROJECT, {
    variables: { input: id },
  });

  if (loading) {
    return <p className="italic">Loading...</p>; // Return a loading indicator while data is being fetched
  }

  if (!data) {
    return <p className="italic">No data found.</p>; // Handle the case when no data is returned
  }

  // TODO: calculate creature mood from tasks
  // for testing:
  const moodVal = moodVal1;

  return (
    <section className="flex flex-wrap md:flex-nowrap flex-col items-center justify-start w-full h-full md:h-[80vh] 3xl:h-[70vh]">
      {/* page heading */}
      <h2 className="self-start mb-4 text-3xl font-semibold text-indigo-500">
        {data.returnProject.title}
      </h2>
      {/* project container */}
      <div className="flex flex-col items-stretch w-full h-full min-h-0 space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        {/* critter column */}
        <div className="flex flex-col">
          <div
            className={`flex flex-col justify-between w-full min-h-0 p-2 space-y-4 bg-indigo-200 grow shrink-0 basis-full rounded-xl ${
              open ? `md:min-w-[277px] md:basis-1/4` : `md:min-w-fit md:basis-0`
            }`}
          >
            {/* collapse/expand button */}
            <button
              onClick={toggle}
              className="self-end text-white bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-800 rounded min-h-[42px] min-w-[42px] md:min-w-fit md:min-h-fit md:max-h-fit md:p-0.5 shrink"
            >
              {/* up/down for mobile */}
              {open ? (
                <ChevronUpIcon className="block w-6 mx-auto md:hidden" />
              ) : (
                <ChevronDownIcon className="block w-6 mx-auto md:hidden" />
              )}
              {/* left/right for desktop */}
              {open ? (
                <ChevronLeftIcon className="hidden w-6 mx-auto md:block" />
              ) : (
                <ChevronRightIcon className="hidden w-6 mx-auto md:block" />
              )}
            </button>
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
          <button
            onClick={() => setDisplayModal(true)}
            className="text-xl md:text-base w-full px-4 py-2 mt-4 text-white bg-indigo-500 rounded hover:bg-indigo-400 active:bg-indigo-800 min-h-[42px] min-w-[42px] md:min-w-fit md:min-h-fit"
          >
            <RiAddLine className="inline-block text-white" />
            <span className="inline md:hidden"> Add Task</span>
            {/* hide text and only show + when the column is collapsed on desktop */}
            <span className="hidden md:inline">{open && " Add Task"}</span>
          </button>
        </div>

        {/* project columns container*/}
        <div className="flex flex-col items-stretch w-full h-full space-y-4 md:pb-1 2xl:pb-0 md:space-y-0 md:space-x-4 md:overflow-x-auto md:flex-row">
          <ProjectColumn
            title="Backlog"
            colNum={1}
            projId={data.returnProject._id}
          />
          <ProjectColumn
            title="Ready"
            colNum={2}
            projId={data.returnProject._id}
          />
          <ProjectColumn
            title="In Progress"
            colNum={3}
            projId={data.returnProject._id}
          />
          <ProjectColumn
            title="Done"
            colNum={4}
            projId={data.returnProject._id}
          />
        </div>
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
                        <TaskForm />
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
    </section>
  );
};

export default Project;
