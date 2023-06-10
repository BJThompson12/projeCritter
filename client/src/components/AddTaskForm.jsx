import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../utils/mutation";

const TaskForm = () => {
  const [createTask] = useMutation(CREATE_TASK);

  const url = window.location.href;
  const id = url.split("=").pop().trim();

  const [formData, setFormData] = useState({
    projectId: `${id}`,
    taskbody: "",
    taskstate: 1,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: name === "taskstate" ? parseInt(value) : value });
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const { data } = await createTask({
        variables: { input: formData },
      });
      console.log(data);
      if (!data) {
        throw new Error("something went wrong!");
      }
    } catch (err) {
      console.error(err);
      //setShowAlert(true);
    } finally {
      setFormData({
        projectId: id,
        taskbody: "",
        taskstate: 1,
      });
      window.location.href =`/project/?=${id}`
    }
  };

  return (
    <>
      <div className="relative flex flex-col justify-center overflow-hidden">
        <div className="w-full m-auto bg-white rounded-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-indigo-500">
            New Task
          </h1>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-2">
              <label
                for="taskbody"
                className="block text-sm font-semibold text-center text-indigo-500"
              >
                Task Description
              </label>
              <input
                placeholder="Build the login routes..."
                name="taskbody"
                onChange={handleInputChange}
                value={formData.taskbody}
                required
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label for="taskstate" className="block text-sm font-semibold text-center text-indigo-500">Task Category</label>
              <select
                name="taskstate"
                onChange={handleInputChange}
                value={formData.taskstate}
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:text-purple-700 focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value={1}>Backlog</option>
                <option value={2}>Ready</option>
                <option value={3}>In Progress</option>
                <option value={4}>Done</option>
              </select>
            </div>
            <div className="mt-6">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                disabled={!formData.taskbody}
                type="submit"
                variant="success"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
