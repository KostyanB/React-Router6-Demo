import { useNavigate } from 'react-router-dom';

const GoBackBtn = ({ step = -1 }) => {
  const navigate = useNavigate();

  const goBack = () => navigate(step);

  return (
    <button className='button' onClick={goBack}>
      &laquo; Go back
    </button>
  );
};

export default GoBackBtn;
