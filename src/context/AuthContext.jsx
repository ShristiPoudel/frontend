import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize user state from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const email = localStorage.getItem('userEmail');
    const role = localStorage.getItem('role');

    if (token && email && role) {
      setUser({ token, email, role });
    }
    setLoading(false);
  }, []);

  const loginUser = (userData) => {
    const { token, email, role } = userData;
    localStorage.setItem('authToken', token);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('role', role);
    setUser({ token, email, role });
  };

  const logoutUser = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('role');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);