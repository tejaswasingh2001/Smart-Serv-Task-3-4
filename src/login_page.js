import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import logo from "./assets/logo.png";
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [timeoutId,setTimeoutId] = useState(-1);
  const [validationError, setValidationError] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = () => {

    if (!validateEmail(email)) {
      setValidationError('Invalid email format!');
      return;
    }

    if (!validatePassword(password)) {
      setValidationError('Invalid password format!');
      return;
    }

    if(password !== 'SmartServTest@123'){
      setValidationError('Invalid password!');
    }else{
      navigate("/dashboard")
    }
  };

  const clearError = () => {
    setValidationError('');
    clearTimeout(timeoutId)
    setTimeoutId(-1)
  }

  useEffect(() => {
    if (validationError !== '') {
      if (timeoutId !== -1) {
        clearTimeout(timeoutId);
        setTimeoutId(-1)
      }
      let id = setTimeout(() => {
        setValidationError('')
      }, 5000)
      setTimeoutId(id)
    }
  }, [validationError,timeoutId])

  return (
    <>
      {
        validationError && (
          <div className='grid absolute p-2 place-content-center top-3 place-self-center bg-red-800 text-white w-[350px] h-[50px]'>
            <div onClick={clearError} className="grid w-fit h-fit absolute top-0 right-2 text-sm cursor-pointer text-white">
              x
            </div>
            {validationError}
          </div>
        )
      }
      <div className="grid w-[400px] h-[450px] bg-[#262626] rounded-md">
        <div className="p-10 grid">
          <img alt='LOGO' src={logo} className='w-72 place-self-center grid' />
          <div class="grid gap-[10px]">
            <input value={email} onChange={onEmailChange} type="email" id="email" class="bg-gray-50 w-[90%] place-self-center grid border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 placeholder:text-black" placeholder="Username" required />
            <input value={password} onChange={onPasswordChange} type="password" id="password" class="bg-gray-50 w-[90%] place-self-center grid border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 placeholder:text-black" placeholder='Password' required />
            <button type="submit" onClick={handleSubmit} class="text-white bg-green-700 hover:bg-green-800 w-[90%] place-self-center grid focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
            <a target="_blank" rel="noopener noreferrer" href='mailto:support@smartserv.io' className="grid text-gray-500 underline place-self-center text-sm">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;