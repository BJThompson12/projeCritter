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

  const [login] = useMutation(LOG_IN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formData },
      });

      console.log(data);

      if (!data) {
        throw new Error("something went wrong!");
      }

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    } finally {
      setFormData({
        email: "",
        password: "",
      });
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
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <Button
          disabled={!(formData.email && formData.password)}
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
