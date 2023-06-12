import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import { useQuery, useMutation } from "@apollo/client";
import { RETURN_TASKS } from "../utils/query";
import { DEL_TASK, UPDATE_TASK } from "../utils/mutation";

const ProjectColumn = ({ title, colNum }) => {
  const url = window.location.href;
  const id = url.split("=").pop().trim();

  const [updateTask] = useMutation(UPDATE_TASK);
  const [delTask] = useMutation(DEL_TASK);

  const handleTaskStateChange = async (taskId, action) => {
    const inputObj = { taskId: taskId, taskstate: action, projectId: id };

    try {
      const { data } = await updateTask({
        variables: { input: inputObj },
      });
    } catch (err) {
      console.log(err);
    } finally {
      window.location.href = `/project/?=${id}`;
    }
  };

  const handleDelTask = async (taskId) => {
    const multiInput = { taskId: taskId, projectId: id };
    try {
      const { data } = await delTask({
        variables: { input: multiInput },
      });
    } catch (err) {
      console.log(err);
    } finally {
      window.location.href = `/project/?=${id}`;
    }
  };

  const { data, loading } = useQuery(RETURN_TASKS, {
    variables: { input: id },
  });

  if (loading) {
    return (
      <div className="flex flex-col md:w-[276px] md:min-w-[276px] border-4 border-black rounded-xl md:overflow-hidden shadow-[0.4rem_0.4rem_#a7f3d0]">
        <h3 className="px-1 pb-0.5 text-2xl font-semibold text-white border-b-4 border-black bg-indigo-500">
          {title}
        </h3>
        <div className="overflow-y-auto">
          <p className="p-2 italic">Loading tasks...</p>
        </div>
      </div>
    );
  }

  const task = data.returnTasks.filter((t) => t.taskstate === colNum);

  return (
    <div className="flex flex-col md:w-[276px] md:min-w-[276px] border-4 border-black rounded-xl overflow-hidden shadow-[0.4rem_0.4rem_#a7f3d0]">
      <h3 className="px-2 py-1 text-2xl font-semibold text-white bg-indigo-500 border-b-4 border-black">
        {title}
      </h3>
      <div className="overflow-y-auto">
        <ul className="text-xl font-medium md:text-base">
          {task.length ? (
            <>
              {task.map((task) => (
                <li className="p-2" key={task._id}>
                  <div className="flex items-center justify-between p-1 bg-indigo-100 text-md min-h-[42px] rounded">
                    <p className="mx-2">{task.taskbody}</p>
                    <div className="flex items-center ml-2">
                      <button>
                        <TrashIcon
                          className="w-5 text-indigo-600 min-h-[42px] min-w-[42px] md:min-h-fit md:min-w-fit hover:text-indigo-400 active:text-indigo-800"
                          onClick={() => handleDelTask(task._id)}
                        />
                      </button>
                      {colNum > 1 && (
                        <button
                          onClick={() => handleTaskStateChange(task._id, -1)}
                        >
                          <ChevronUpIcon className="block w-6 text-indigo-600 md:hidden min-h-[42px] min-w-[42px] hover:text-indigo-400 active:text-indigo-800" />
                          <ChevronLeftIcon className="hidden w-6 text-indigo-600 md:block hover:text-indigo-400 active:text-indigo-800" />
                        </button>
                      )}
                      {colNum < 4 && (
                        <button
                          onClick={() => handleTaskStateChange(task._id, +1)}
                        >
                          <ChevronDownIcon className="block w-6 text-indigo-600 md:hidden min-h-[42px] min-w-[42px] hover:text-indigo-400 active:text-indigo-800" />
                          <ChevronRightIcon className="hidden w-6 text-indigo-600 md:block hover:text-indigo-400 active:text-indigo-800" />
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
