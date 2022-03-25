import { useNavigate } from 'react-router-dom';

const useAuthNavigate = () => {
  const navigate = useNavigate();

  const navigateTo = to => navigate(to, { replace: true });

  return { navigateTo };
};
export default useAuthNavigate;
