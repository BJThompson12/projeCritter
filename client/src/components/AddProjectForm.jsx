import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../utils/mutation";

const ProjectForm = () => {
  const [displayModal, setDisplayModal] = useState(false);
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

    console.log(formData)

    try {
    
      const { data } = await createProject({
        variables: { input: formData },
      });
      console.log(data);
      if (!data) {
        throw new Error('something went wrong!');
      }
    } catch (err) {
      console.error(err);
      //setShowAlert(true);
    } finally {
      setFormData({
        title: "",
        projectstatus: "",
      });
      window.location.href ='/dashboard'
    }
  };

  return (
    <>
      <div className="relative flex flex-col overflow-hidden">
        <div className="w-full p-6 m-auto rounded-md lg:max-w-xl mt-0">
          <h1 className="text-3xl font-semibold text-center text-black">
            New Project
          </h1>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-black text-center"
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
                className="block w-full px-4 py-2 mt-2 text-indigo-500 bg-white border outline-none border-2 border-black shadow-md  rounded-2xl text-base focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                className= " w-full bg-indigo-400 text-white mt-4 rounded px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:translate-y-1 hover:shadow-md"
                disabled={!(formData.title)}
                type="submit"
                variant="success"
              >
                Create New Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProjectForm;
