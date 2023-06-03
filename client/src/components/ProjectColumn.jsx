import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

import { useMutation, useQuery} from "@apollo/client";
import { CREATE_TASK } from "../utils/mutation";

const ProjectColumn = ({ title, colNum, projId }) => {
  // TODO: get all tasks where projectId = projId and taskstate = colNum
  // for testing:

  const [createTask] = useMutation(CREATE_TASK)

  


  let tasks = [];
  if (colNum === 2) {
    tasks = [{ id: 1, taskbody: "Do a thing" }];
  } else if (colNum === 3) {
    tasks = [
      { id: 1, taskbody: "Do another thing" },
      { id: 2, taskbody: "Do a different thing" },
      {
        id: 3,
        taskbody:
          "Do a third thing and also the taskbody text is really really really really really long",
      },
    ];
  } else if (colNum === 4) {
    tasks = [
      { id: 2, taskbody: "Thing that got did" },
      {
        id: 2,
        taskbody:
          "Another thing that got did",
      },
    ];
  }

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
          {tasks.length ? (
            <>
              {tasks.map((task) => (
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
