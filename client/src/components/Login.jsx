const Login = () => {
  return (
    <>
    <div className='relative flex flex-col overflow-hidden'>
          <div className='w-full p-6 m-auto bg-white rounded-md lg:max-w-xl mt-0'>
            <h1 className='text-3xl font-semibold text-center text-indigo-500'>
              Log in
            </h1>
            <form className='mt-6'>
              <div className='mb-2'>
                <label
                  for='email'
                  className='block text-sm font-semibold text-indigo-500 text-center'
                >
                  Email
                </label>
                <input
                  type='email'
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
                  type='password'
                  className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
                />
              </div>
              <a href='#' className='text-xs text-indigo-500 hover:underline'>
                Forget Password?
              </a>
              <div className='mt-6 flex flex-col'>
                <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 sm:mt-12'>
                  Login
                </button>
              </div>
            </form>

            <p className='mt-8 text-xs font-light text-center text-gray-700'>
              {' '}
              Don't have an account?{' '}
              <a
                href=''
                className='font-medium text-indigo-500 hover:underline'
              >
                Sign up Here!
              </a>
            </p>
          </div>
        </div>
    </>
  );
};

export default Login;
