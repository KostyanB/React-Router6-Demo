import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePostsContext } from '../../context';

import GoBackBtn from '../../components/GoBackBtn';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { postsDataObj } = usePostsContext();

  useEffect(
    () => postsDataObj && setPost(postsDataObj[id]),
    [id, postsDataObj],
  );

  return (
    <div>
      <GoBackBtn />
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`} className='button'>
            Edit this post
          </Link>
        </>
      )}
    </div>
  );
};

export default SinglePost;
