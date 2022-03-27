import { useLocation, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context';

//обертка для приватного роутинга
const AuthRequire = ({ children }) => {
  const location = useLocation();
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};
export default AuthRequire;
