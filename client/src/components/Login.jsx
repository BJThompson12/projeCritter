import { useMutation } from "@apollo/client";
import { LOG_IN } from "../utils/mutation";
import Auth from "../utils/auth";
import Button from "./Button";
import FormInput from "./FormInput";

import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const [login] = useMutation(LOG_IN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let exception = false;

    if (formData.email && formData.password && !success) {
      try {
      const { data } = await login({
        variables: { ...formData },
      });

      if (!data) {
        throw new Error("Something went wrong!");
      }

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
      exception = true;
    } finally {
      if (!exception) {
        setSuccess(true);
      }
    }
  }
  };

  return (
    <div className="flex flex-col items-center w-full space-y-4">
      <h3
        id="modal-title"
        className="text-2xl font-semibold text-center text-black"
      >
        Log In
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full space-y-4"
      >
        <FormInput
          label="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <p
          className={`${
            showAlert ? "block" : "hidden"
          } text-sm text-center font-medium text-pink-500 max-w-xs`}
        >
          User not found. Please check email and password and try again.
        </p>
        <Button
          disabled={!(formData.email && formData.password) || success}
          type="submit"
          variant="success"
          width="w-fit"
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default Login;
