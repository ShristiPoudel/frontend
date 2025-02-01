import React,{useState} from 'react'
import "./CSS/login.css"

const Login = () => {
  const [loginData,setLoginData] = useState({});

  const handleChange = (e)=>{
    console.log(e.target.value);
    setLoginData ({...loginData, [e.target.name]:e.target.value});
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div className='login-page'>
      <div className='login'>
        <h2>Login</h2>
      <form  className='login-form'
      onSubmit={handleSubmit} >
        <div className='login-input-fields'> 
        <label htmlFor="email">Enter your email:</label>
        <input type="email" id='email' name='email' autoComplete='off' placeholder='Your email'
        onChange={handleChange} />
        </div>

        <div className='login-input-fields'> 
        <label htmlFor="password">Enter your password:</label>
        <input type="password" id='password'name='password' autoComplete='off' placeholder='Your password'
        onChange={handleChange} />
        </div>

        <div className="login-btn">
          <button type="submit">Continue</button>
        </div>
        <div className="login-signup-agree">
          <input type="checkbox" name='check' id='check' onChange={handleChange}/>
          <p>By continuing, I agree the terms of use & privacy policy.</p>

        </div>

      </form>
      </div>
    </div>
  )
}

export default Login