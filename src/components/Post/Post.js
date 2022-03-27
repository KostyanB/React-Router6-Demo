import { Link } from 'react-router-dom';

const Post = ({ body, id }) => (
  <>
    <p>{body}</p>
    <Link to={`/posts/${id}/edit`} className='button'>
      Edit this post
    </Link>
  </>
);
export default Post;
