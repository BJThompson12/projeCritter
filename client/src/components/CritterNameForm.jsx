import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_CRITTER_NAME } from "../utils/mutation";
import Button from "./Button";
import FormInput from "./FormInput";

const CritterNameForm = ({ setDisplayModal }) => {
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
      setDisplayModal(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3
        id="modal-title"
        className="text-2xl font-semibold text-center text-black"
      >
        Name Project Critter
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <FormInput
          label="Name"
          name="critterName"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <Button
          disabled={!formData.critterName}
          type="submit"
          variant="success"
        >
          Change Name
        </Button>
      </form>
    </div>
  );
};

export default CritterNameForm;
