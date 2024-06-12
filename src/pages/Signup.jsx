import React, { useState } from 'react';
import axios from 'axios';
import signupImg from '../assets/images/signup.gif';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post('http://backend-o0qh.onrender.com/api/signup', {
          email,
          password,
        })
        .then((res) => {
          if (res.data == 'exist') {
            alert('User already exists');
          } else if (res.data == 'notexist') {
            history('/home', { state: { id: email } })();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/*==================ImgBox======== */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt="" className='w-full rounded-l-lg' />
            </figure>
          </div>
          {/*==================SignUp Form======== */}
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
              Create an <span className='text-primaryColor'>account</span>
            </h3>
            <form action='POST'>
              <div className='mb-5'>
                <input
                  type='email'
                  placeholder='Enter Your Email'
                  name='email'
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className='w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md'
                  required
                />
                <input
                  type='password'
                  placeholder='Enter Your Password'
                  name='password'
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className='w-full px-4 pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md'
                  required
                />
              </div>
              <div className='mt-7'>
                <button
                  type='submit'
                  className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
                  onClick={submit}
                >
                  Create
                </button>
              </div>
              <p className='mt-5 text-textColor text-center'>
                Already have an account
                <Link to='/login' className='text-primaryColor font-medium ml-1'>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Signup;
