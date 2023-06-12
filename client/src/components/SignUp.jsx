import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutation";
import Auth from "../utils/auth";
import Button from "./Button";
import FormInput from "./FormInput";
import { validateEmail, validatePass } from "../utils/helpers";

import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [alertMsg, setAlertMsg] = useState("");
  const [nameMsg, setNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [pwMsg, setPwMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [createUser] = useMutation(CREATE_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputBlur = (event) => {
    const { name, value } = event.target;

    if (name === "username") {
      if (!value) {
        setNameMsg("Username is required.");
      } else {
        setNameMsg("");
      }
    } else if (name === "email") {
      if (!value) {
        setEmailMsg("Email address is required.");
      } else if (!validateEmail(value)) {
        setEmailMsg("Please enter a valid email address.");
      } else {
        setEmailMsg("");
      }
    } else if (name === "password") {
      if (!value) {
        setPwMsg("Password is required.");
      } else if (!validatePass(value)) {
        setPwMsg("Password must be at least 8 characters.");
      } else {
        setPwMsg("");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let exception = false;

    if (formData.username && formData.email && formData.password && !success) {
      if (!validateEmail(formData.email)) {
        setAlertMsg("Email address is invalid.");
      } else if (!validatePass(formData.password)) {
        setAlertMsg("Password is not long enough.");
      } else {
        setAlertMsg("");

        try {
          const { data } = await createUser({
            variables: { ...formData },
          });

          if (!data) {
            throw new Error("Something went wrong!");
          }

          Auth.login(data.createUser.token);
        } catch (err) {
          console.error(err);
          setAlertMsg(
            "An account already exists with this username or email address."
          );
          exception = true;
        } finally {
          if (!exception) {
            setSuccess(true);
          }
        }
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full space-y-4">
      <h3
        id="modal-title-2"
        className="text-2xl font-semibold text-center text-black"
      >
        Sign Up
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full space-y-4"
      >
        <FormInput
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          invalidMsg={nameMsg}
        />
        <FormInput
          label="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          invalidMsg={emailMsg}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          invalidMsg={pwMsg}
        />
        <p
          className="max-w-xs text-sm font-medium text-center text-pink-500"
        >
          {alertMsg}
        </p>
        <Button
          disabled={!(formData.username && formData.email && formData.password) || success}
          type="submit"
          variant="success"
          width="w-fit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
