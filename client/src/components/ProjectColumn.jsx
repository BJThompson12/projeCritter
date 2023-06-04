import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

import { useQuery } from "@apollo/client";
import { RETURN_TASKS } from "../utils/query";

const ProjectColumn = ({ title, colNum, projId }) => {
  // TODO: get all tasks where projectId = projId and taskstate = colNum
  // for testing:
  const url = window.location.href;
  const id = url.split("=").pop().trim();

  const { data, loading } = useQuery(RETURN_TASKS, {
    variables: { input: id },
  });

  if (loading) {
    return (
      <div className="flex flex-col md:w-[276px] md:min-w-[276px] border-4 border-indigo-500 rounded-xl md:overflow-hidden">
        <h3 className="px-1 pb-0.5 text-2xl font-semibold text-indigo-500 border-b-4 border-indigo-500">
          {title}
        </h3>
        <div className="overflow-y-auto"><p className="p-2 italic">Loading tasks...</p></div>
      </div>
    );
  } 

const task = data.returnTasks.filter(t => t.taskstate === colNum);

  return (
    <div className="flex flex-col md:w-[276px] md:min-w-[276px] border-4 border-indigo-500 rounded-xl md:overflow-hidden">
      {/* column heading */}
      <h3 className="px-1 pb-0.5 text-2xl font-semibold text-indigo-500 border-b-4 border-indigo-500">
        {title}
      </h3>
      <div className="overflow-y-auto">
        <ul className="text-lg md:text-base">
          {/* render tasks as list items */}
          {/* TODO: pencil edits taskbody (modal should have a delete option) */}
          {/* TODO: left and right arrows decrease or increase taskstate */}
          {task.length ? (
            <>
              {task.map((task) => (
                <li className="p-2">
                  <div className="flex items-center justify-between p-1 bg-indigo-200 text-md min-h-[42px] rounded">
                    <p>{task.taskbody}</p>
                    <div className="flex items-center ml-2">
                      <button>
                        <PencilIcon className="w-5 text-indigo-600 min-h-[42px] min-w-[42px] md:min-h-fit md:min-w-fit hover:text-indigo-400 active:text-indigo-800" />
                      </button>
                      {colNum > 1 && (
                        <button>
                          <ChevronUpIcon className="block w-6 text-indigo-500 md:hidden min-h-[42px] min-w-[42px] hover:text-indigo-400 active:text-indigo-800" />
                          <ChevronLeftIcon className="hidden w-6 text-indigo-500 md:block hover:text-indigo-400 active:text-indigo-800" />
                        </button>
                      )}
                      {colNum < 4 && (
                        <button>
                          <ChevronDownIcon className="block w-6 text-indigo-500 md:hidden min-h-[42px] min-w-[42px] hover:text-indigo-400 active:text-indigo-800" />
                          <ChevronRightIcon className="hidden w-6 text-indigo-500 md:block hover:text-indigo-400 active:text-indigo-800" />
                        </button>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </>
          ) : (
            <li className="p-2">
              <div className="p-1 italic text-md">No current tasks</div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProjectColumn;
