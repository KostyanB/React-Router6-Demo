import { createContext, useContext } from 'react';
import useAuth from '../hooks/useAuth';

const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const { user, signIn, signOut } = useAuth();

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
