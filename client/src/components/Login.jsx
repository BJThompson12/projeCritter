import { useMutation } from '@apollo/client';
import { LOG_IN } from '../utils/mutation';
import Auth from '../utils/auth';

import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
        throw new Error('something went wrong!');
      }

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    } finally {
      setFormData({
        email: '',
        password: '',
      });
    }
  };
  const logInButton =
  "w-full bg-indigo-400 text-white mt-4 rounded px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:translate-y-1 hover:shadow-md";

  return (
    <>
         <div className='relative flex flex-col overflow-hidden'>
          <div className='w-full p-6 m-auto bg-indigo-300 rounded-md lg:max-w-xl mt-0'>
            <h1 className='text-3xl font-semibold text-center text-black'>
              Log in
            </h1>
          <form onSubmit={handleSubmit} className='mt-6'>
            <div className='mb-2'>
              <label
                for='email'
                className='block text-sm font-semibold text-black text-center'
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
                className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border border-2 border-black rounded-xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>
            <div className='mb-2'>
              <label
                for='password'
                className='block text-sm font-semibold text-black text-center'
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
                className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border border-2 border-black rounded-xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>
            <div className='mt-6'>
              <button
                className={logInButton}
                disabled={
                  !(formData.email && formData.password)
                }
                type='submit'
                variant='success'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
