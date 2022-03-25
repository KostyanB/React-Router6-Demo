import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context';
import Form from '../components/Form';

const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useAuthContext();

  const fromPage = useMemo(
    () => location.state?.from?.pathname || '/',
    [location],
  );

  const handleLogin = userName =>
    signIn(userName, () => navigate(fromPage, { replace: true }));

  return (
    <div>
      <h1>Login page</h1>
      <Form
        handleForm={handleLogin}
        inputName='username'
        inputType='text'
        labelText='Name:'
        btnText='Login'
      />
    </div>
  );
};
export default LogIn;
