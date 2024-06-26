import { useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { RiLockPasswordLine } from 'react-icons/ri';
import Logo from '../../../assets/logo/logo.png';

import { useNavigate } from 'react-router-dom';
import useSignIn from '../services/AuthService';
import { useUserContext } from '../../../context/UserContext';

const LogInCard = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { setUser } = useUserContext();

  const navigate = useNavigate();

  const { signIn } = useSignIn();

  const handleSignIn = async () => {
    const user = await signIn(username, password);
    if (user) {
      setUser(user);
      if (user.role === 'OWNER') {
        navigate('/manager-dashboard');
      } else {
        navigate('/cashier-dashboard');
      }
    }
  };

  return (
    <div className='font-poppins p-8 flex flex-col items-center justify-center space-y-8 shadow-lg rounded-lg w-96 md:w-[60vw] lg:w-[40vw] xl:w-[30vw] h-[80vh]'>
      {/* logo */}
      <div>
        <img src={Logo} alt='Logo' />
      </div>

      {/* title text of the page */}
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>Log In</h1>
        <p>Log In To Locate Your Hope ...</p>
      </div>

      {/* input fields for username password */}
      <div>
        <div className='w-[400px] my-4'>
          <label
            htmlFor='username'
            className='block text-gray-800 font-semibold text-sm'
          >
            Username
          </label>
          <div className='relative flex items-center'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-2'>
              <CiUser />
            </div>
            <input
              type='text'
              name='username'
              className='block w-full pl-8 rounded-md py-1.5 px-2 ring-1 focus:ring-blue'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className='w-[400px] my-4'>
          <label
            htmlFor='password'
            className='block text-gray-800 font-semibold text-sm'
          >
            Password
          </label>
          <div className='relative flex items-center'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-2'>
              <RiLockPasswordLine />
            </div>
            <input
              type='password'
              name='password'
              className='block w-full pl-8 rounded-md py-1.5 px-2 ring-1 focus:ring-blue'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <p className='text-red cursor-pointer text-sm'>Forgot Password?</p>
      </div>
      {/* Buttons */}
      <div>
        <button className='signup_button' onClick={handleSignIn}>
          Sign In
        </button>
      </div>

      {/* User agreement bar */}
      <p className='text-sm pt-12'>End User Agreement</p>
    </div>
  );
};

export default LogInCard;
