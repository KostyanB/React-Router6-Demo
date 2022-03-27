import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Form from '../Form';

const LoginForm = ({ handleLogin, ...otherProps }) => {
  const location = useLocation();

  const fromPage = useMemo(
    () => location.state?.from?.pathname || '/',
    [location],
  );

  const handleLoginForm = userName => {
    handleLogin(userName, fromPage);
  };

  return <Form handleForm={handleLoginForm} {...otherProps} />;
};
export default LoginForm;
