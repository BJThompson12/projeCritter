import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../utils/mutation";
import Button from "./Button";
import FormInput from "./FormInput";

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
    setFormData({
      ...formData,
      [name]: name === "taskstate" ? parseInt(value) : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.taskbody) {
      try {
        const { data } = await createTask({
          variables: { input: formData },
        });

        if (!data) {
          throw new Error("something went wrong!");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setFormData({
          projectId: id,
          taskbody: "",
          taskstate: 1,
        });

        window.location.href = `/project/?=${id}`;
      }
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3
        id="modal-title"
        className="text-2xl font-semibold text-center text-black"
      >
        New Task
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
      >
        <FormInput
          label="Task Description"
          name="taskbody"
          value={formData.taskbody}
          onChange={handleInputChange}
        />
        <div className="w-full">
          <label
            htmlFor="taskstate"
            className="text-base font-semibold text-left text-indigo-500"
          >
            Task Category
          </label>
          <select
            name="taskstate"
            onChange={handleInputChange}
            value={formData.taskstate}
            className="w-full px-4 py-2 mt-2 text-black bg-white border-2 border-black rounded-lg focus:ring-emerald-300 focus:outline-none focus:ring"
          >
            <option value={1}>Backlog</option>
            <option value={2}>Ready</option>
            <option value={3}>In Progress</option>
            <option value={4}>Done</option>
          </select>
        </div>
        <Button
          disabled={!formData.taskbody}
          type="submit"
          variant="success"
          width="w-fit"
        >
          Create New Task
        </Button>
      </form>
    </div>
  );
};

export default TaskForm;
