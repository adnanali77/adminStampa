import React, { useState } from "react";
import { Auth } from 'aws-amplify';
import robot from '../Img/robot.png';
import loginlogo from '../Img/loginlogo.png';
import { MdOutlineAlternateEmail, MdLock, MdArrowForward } from 'react-icons/md';
import { BiHide, BiShow } from 'react-icons/bi';
import '../Styles/Login.css';
import { TailSpin } from 'react-loader-spinner'

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isPasswordResetRequired, setIsPasswordResetRequired] = useState(false);
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await Auth.signIn(username, password);
      const isAdmin = user.isAdmin; // Assuming the front end provides the isAdmin variable

      if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        setIsPasswordResetRequired(true);
        setUser(user);
      } else {
        props.submit(username, isAdmin); // Pass the isAdmin variable to the submit function
      }
    } catch (error) {
      console.log('Error signing in:', error);
    }
  };
  const handlePasswordReset = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      await Auth.completeNewPassword(user, newPassword);
      await Auth.signIn(username, newPassword);

      props.submit(username);
    } catch (error) {
      console.log('Error resetting password:', error);
    }
  };
  const handleShow = () => {
    setShow(!show);
  }
  // const handleloading = () => {
  //   setLoading(true);
  // }
  return (
    <div className='login-main'>
      <div className='login-left'>
        <img src={loginlogo} alt='loginlogo' className='loginlogo' />
      </div>
      <div className='login-right'>
        <div className='login-right-left'>
          <h1 className='login-heading'>Create your<br />
            free account<br />
            with Chatbot
          </h1>
          <span className='bot-heading'></span>
          <img src={robot} alt='robot' className='robot' />
        </div>
        <div className='login-right-right'>
          <span>Welcome<br />Back!</span>
          <span className='login-sub-heading'>Enter your credentials to login.</span>
          <form onSubmit={handleSubmit}>
            <span className='form-heading'>Email</span>
            <label>
              <div className='icon-div'>
                <MdOutlineAlternateEmail className='form-icon' />
              </div>
              {/* //email */}
              <input type='text' placeholder='Enter Email' name='email' onChange={(e) => setUsername(e.target.value)} value={username} required />
            </label>
            <span className='form-heading'>Password</span>
            {
              show ?
                <label>
                  <div className='icon-div'>
                    <MdLock className='form-icon' />
                  </div>
                  <input type='text' placeholder='Enter password' name='password' onChange={(e) => setPassword(e.target.value)} value={password} required />
                  <BiShow onClick={handleShow} className='log-icon' />
                </label>
                :
                <label>
                  <div className='icon-div'>
                    <MdLock className='form-icon' />
                  </div>
                  <input type='password' placeholder='Enter password' name='password' onChange={(e) => setPassword(e.target.value)} value={password} required />
                  <BiHide onClick={handleShow} className='log-icon' />
                </label>
            }
            <span>Forgot Password?</span>

            <div className='login-btn'>
              {
                !loading ?
                  <>
                    < input type='submit' value='Login' />
                    <MdArrowForward className='btn-icon-div' />
                  </>
                  :
                  <TailSpin
                    height="25"
                    width="25"
                    color="#fff"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{padding: "0.25rem"}}
                    wrapperClass=""
                    visible={true}
                  />
              }
            </div>

            <span className='login-supt'>Contact Support</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
