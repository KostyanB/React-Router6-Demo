import { useState } from 'react';

const useAuth = () => {
  const initUser = null;
  const [user, setUser] = useState(initUser);

  const signIn = (newUser, callback) => {
    setUser(newUser);
    callback();
  };

  const signOut = callback => {
    setUser(initUser);
    callback();
  };

  return { user, signIn, signOut };
};
export default useAuth;
