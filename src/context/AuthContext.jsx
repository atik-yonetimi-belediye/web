import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);

    // Listen to 401 errors from axios
    const handleAuthError = () => {
      logout();
    };
    window.addEventListener('auth-error', handleAuthError);
    return () => window.removeEventListener('auth-error', handleAuthError);
  }, []);

  const login = async (role, credentials) => {
    try {
      // role can be: 'admin', 'cavus', 'sofor', 'sirket'
      const response = await api.post(`/auth/${role}/login`, credentials);
      if (response.data.success) {
        const { token: newToken, user: newUser } = response.data.data;
        // Inject role manually since it's used for routing
        newUser.role = role;
        
        setUser(newUser);
        setToken(newToken);
        localStorage.setItem('user', JSON.stringify(newUser));
        localStorage.setItem('token', newToken);
        return { success: true };
      }
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Giriş yapılamadı' 
      };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
