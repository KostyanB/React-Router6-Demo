import { useAuthContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const { signOut } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Create a new post</h1>
      <button
        className='button'
        onClick={() => signOut(() => navigate('/', { replace: true }))}
      >
        Sign out
      </button>
    </div>
  );
};
export default CreatePost;
