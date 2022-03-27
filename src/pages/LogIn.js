import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context';
import LoginForm from '../components/LoginForm';
import makePageWithTitle from '../components/Hocs/makePageWithTitle';

const LogIn = () => {
  const navigate = useNavigate();
  const { signIn } = useAuthContext();

  const handleLogin = (userName, from) => {
    signIn(userName, () => navigate(from, { replace: true }));
  };

  return (
    // <div>
    // <h1>Login page</h1>
    <LoginForm
      handleLogin={handleLogin}
      inputName='username'
      inputType='text'
      labelText='Name:'
      btnText='Login'
    />
    // </div>
  );
  // return (
  //   <Form
  //     handleForm={handleLogin}
  //     inputName='username'
  //     inputType='text'
  //     labelText='Name:'
  //     btnText='Login'
  //   />
  // );
};
// export default LogIn;

const LogInWithPageTitle = makePageWithTitle(LogIn, {
  title: 'Login page',
  displayName: 'LogIn',
});

export default LogInWithPageTitle;
