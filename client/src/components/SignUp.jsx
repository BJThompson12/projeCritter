import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutation';
import Auth from '../utils/auth';

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
      <div className='relative flex flex-col justify-center overflow-hidden'>
        <div className='w-full p-6 m-auto bg-white rounded-md lg:max-w-xl'>
          <h1 className='text-3xl font-semibold text-center text-indigo-500'>
            Sign Up
          </h1>
          <form onSubmit={handleSubmit} className='mt-6'>
            <div className='mb-2'>
              <label
                for='username'
                className='block text-sm font-semibold text-indigo-500 text-center'
              >
                Username
              </label>
              <input
                placeholder='Your username'
                name='username'
                onChange={handleInputChange}
                value={formData.username}
                required
                type='username'
                className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>
            <div className='mb-2'>
              <label
                for='email'
                className='block text-sm font-semibold text-indigo-500 text-center'
              >
                Email
              </label>
              <input
                type='email'
                placeholder='Your email address'
                name='email'
                onChange={handleInputChange}
                value={formData.email}
                required
                className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>
            <div className='mb-2'>
              <label
                for='password'
                className='block text-sm font-semibold text-indigo-500 text-center'
              >
                Password
              </label>
              <input
                placeholder='Your password'
                name='password'
                onChange={handleInputChange}
                value={formData.password}
                required
                type='password'
                className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>
            <div className='mt-6'>
              <button
                className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600'
                disabled={
                  !(formData.username && formData.email && formData.password)
                }
                type='submit'
                variant='success'
              >
                Login
              </button>
            </div>
          </form>

          <p className='mt-8 text-xs font-light text-center text-gray-700'>
            {' '}
            Already have an account?{' '}
            <a href='#' className='font-medium text-indigo-500 hover:underline'>
              Log in here!
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
