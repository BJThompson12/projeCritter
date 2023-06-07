import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_CRITTER_NAME } from "../utils/mutation";

const CritterNameForm = () => {
  const url = window.location.href;
  const id = url.split("=").pop().trim();

  const [formData, setFormData] = useState({
    critterName: "",
    projectId: id,
  });

  const [updateCritterName] = useMutation(UPDATE_CRITTER_NAME);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);

    try {
      const { data } = await updateCritterName({
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
        critterName: "",
        projectId: id,
      });
      window.location.href = `/project?=${id}`;
    }
  };

  return (
    <>
      <div className="relative flex flex-col overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl mt-0">
          <h1 className="text-3xl font-semibold text-center text-indigo-500">
            Name Project Critter
          </h1>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="critterName"
                className="block text-sm font-semibold text-indigo-500 text-center"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Paul"
                name="critterName"
                onChange={handleInputChange}
                value={formData.name}
                required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                disabled={!formData.critterName}
                type="submit"
                variant="success"
              >
                Submit Name
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CritterNameForm;
