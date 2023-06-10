import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutation';
import Auth from '../utils/auth';
import Button from "./Button";

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
    <>
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-center text-black">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-center text-black"
            >
              Username
            </label>
            <input
              placeholder="Your username"
              name="username"
              onChange={handleInputChange}
              value={formData.username}
              required
              type="username"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border-2 border-black rounded-xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-center text-black"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Your email address"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              required
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border-2 border-black rounded-xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-center text-black"
            >
              Password
            </label>
            <input
              placeholder="Your password"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
              required
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border-2 border-black rounded-xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <Button
              disabled={
                !(formData.username && formData.email && formData.password)
              }
              type="submit"
              variant="success"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
