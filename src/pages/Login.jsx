import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post('https://backend-o0qh.onrender.com/api/login', {
          email,
          password,
        })
        .then((res) => {
          if (res.data == 'exist'){
            history('/home', { state:{ id: email}});
          } else if (res.data == 'notexist') {
            alert("User has not signed up");
          }
        })
        .catch((e) => {
          alert('Wrong details');
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
          Hello! <span className='text-primaryColor'>Welcome</span> Back 🎉
        </h3>
        <form className='py-4 md:py-0' action='POST'>
          <div className='mb-5'>
            <input
              type='email'
              placeholder='Enter Your Email'
              name='email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md'
              required
            />
          </div>

          <div className='mb-5'>
            <input
              type='password'
              placeholder='Enter Your Password'
              name='password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md'
              required
            />
          </div>

          <div className='mt-7'>
            <button
              type='submit'
              className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
              onClick={submit}
            >
              Login
            </button>
          </div>

          <p className='mt-5 text-textColor text-center'>
            Don't have an account
            <Link to='/register' className='text-primaryColor font-medium ml-1'>
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
export default Login;
