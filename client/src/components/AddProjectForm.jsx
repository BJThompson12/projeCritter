import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../utils/mutation";
import Button from "../components/Button";
import FormInput from "./FormInput";

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

      if (!data) {
        throw new Error("Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      //setShowAlert(true);
    } finally {
      setFormData({
        title: "",
        projectstatus: "",
      });
      setDisplayModal(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3
        id="modal-title"
        className="text-2xl font-semibold text-center text-black"
      >
        New Project
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
      >
        <FormInput
          label="Project Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <Button
          disabled={!formData.title}
          type="submit"
          variant="success"
          width="w-fit"
        >
          Create New Project
        </Button>
      </form>
    </div>
  );
};

export default ProjectForm;
