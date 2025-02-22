import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CSS/Token.css";
import api from '../api/config';
import { useAuth } from '../context/AuthContext'

const Token = () => {
 
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { loginUser } = useAuth(); 
  
    useEffect(() => {
      const storedEmail = localStorage.getItem('userEmail');
      console.log("Stored Email:", storedEmail);
      if (!storedEmail) {
        navigate('/login'); 
      } else {
        setEmail(storedEmail);
       }
       


    }, [navigate]);
  
    const handleTokenChange = (e) => {
      setToken(e.target.value);
    };
  
    const handleTokenSubmit = async (e) => {
      e.preventDefault();
      setError('');
  
      if (!token) {
        return setError('Please enter the token sent to your email.');
      }
  
      try {
        setIsSubmitting(true);
        const response = await api.post("/user/verify-token/", {
          email: email,
          token: token
        });
        
  
        const role = response.data.role;

        localStorage.setItem("authToken", response.data.token);
         console.log("Auth Token set:", response.data.token);
        
        console.log("Token verified:", response.data);
        loginUser({
          token: response.data.token,
          email: email,
          role: response.data.role,
          isLoggedIn: true
      });
      console.log(response.data.isLoggedIn);
      // console.log("Response data:", response.data);
      // console.log(response.data.token)
      if (role === 'organizer') {
        navigate('/organizer-dashboard');
      } else {
        navigate('/attendee-dashboard');
      }
      } 
        catch (err) {
          console.error("Token verification error:", err);
          setError(err.response?.data?.message || 'Invalid token. Please try again.');
      }
      finally {
        setIsSubmitting(false);
      }
    };
  
    return (
      <div className='verify-token-page'>
        <div className='verify-token'>
          <h2>Enter Verification Token</h2>
          {error && <div className="error-message">{error}</div>}
  
          <form className='verify-token-form' onSubmit={handleTokenSubmit}>
            <div className='verify-token-input'> 
              <label htmlFor="token">Enter the token sent to your email:</label>
              <input
                type="text"
                id='token'
                name='token'
                placeholder='Enter your token'
                value={token}
                onChange={handleTokenChange}
                required
              />
            </div>
  
            <div className="verify-token-btn">
              <button type="submit">
                {isSubmitting ? 'Verifying...' : 'Verify & Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Token