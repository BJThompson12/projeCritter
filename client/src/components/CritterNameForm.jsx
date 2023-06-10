import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_CRITTER_NAME } from "../utils/mutation";
import Button from "./Button";

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
      <div className="relative flex flex-col">
        <div className="w-full m-auto mt-0 bg-white rounded-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-indigo-500">
            Name Project Critter
          </h1>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="critterName"
                className="block text-sm font-semibold text-center text-indigo-500"
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
              <Button
                disabled={!formData.critterName}
                type="submit"
                variant="success"
              >
                Change Name
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CritterNameForm;
