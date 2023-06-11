import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutation';
import Auth from '../utils/auth';
import Button from "./Button";
import FormInput from "./FormInput";

import { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  const [createUser] = useMutation(CREATE_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createUser({
        variables: { ...formData },
      });

      console.log(data);

      if (!data) {
        throw new Error('something went wrong!');
      }

      Auth.login(data.createUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    } finally {
      setFormData({
        username: '',
        email: '',
        password: '',
      });
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
          required
        />
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
          disabled={!(formData.username && formData.email && formData.password)}
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
