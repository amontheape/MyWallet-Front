import React, { createContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useSessionStorage from '../hooks/useSessionStorage';

export const AuthContext = createContext();

export default function AuthProvider( {children} ) {
  const [user, setUser] = useSessionStorage('user', null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if ( user ) {
      location.pathname === '/' && navigate('/home');
    } else {
      navigate('/login');
    }
  })

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}