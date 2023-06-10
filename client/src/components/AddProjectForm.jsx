import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../utils/mutation";
import Button from "../components/Button";

const ProjectForm = ({ setDisplayModal }) => {
  const [createProject] = useMutation(CREATE_PROJECT);

  const [formData, setFormData] = useState({
    title: "",
    projectstatus: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createProject({
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
        title: "",
        projectstatus: "",
      });
      // window.location.href ='/dashboard'
      setDisplayModal(false);
    }
  };

  return (
    <div className="relative flex flex-col">
      <div className="w-full m-auto mt-0 rounded-md lg:max-w-xl">
        <h3 id="modal-title" className="text-3xl font-semibold text-center text-black">
          New Project
        </h3>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-center text-black"
            >
              Title
            </label>
            <input
              type="title"
              placeholder="Project Title"
              name="title"
              onChange={handleInputChange}
              value={formData.title}
              required
              className="block w-full px-4 py-2 mt-2 text-base text-indigo-500 bg-white border-2 border-black shadow-md outline-none rounded-2xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <Button disabled={!formData.title} type="submit" variant="success">Create New Project</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
