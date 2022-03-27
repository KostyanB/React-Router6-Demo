import { useAuthContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import makePageWithTitle from '../../components/Hocs/makePageWithTitle';

const CreatePost = () => {
  const { signOut } = useAuthContext();
  const navigate = useNavigate();

  return (
    // <div>
    // <h1>Create a new post</h1>
    <button
      className='button'
      onClick={() => signOut(() => navigate('/', { replace: true }))}
    >
      Sign out
    </button>
    // </div>
  );
};
// export default CreatePost;

const WithTitleCreatePost = makePageWithTitle(CreatePost, {
  title: 'Create a new post',
});
export default WithTitleCreatePost;
