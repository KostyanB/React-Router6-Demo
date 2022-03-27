import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePostsContext } from '../../context';

import makePageWithTitle from '../../components/Hocs/makePageWithTitle';

import GoBackBtn from '../../components/GoBackBtn';
import Post from '../../components/Post';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { postsDataObj } = usePostsContext();

  useEffect(
    () => postsDataObj && setPost(postsDataObj[id]),
    [id, postsDataObj],
  );

  const PostWithTitle = makePageWithTitle(Post, {
    title: post?.title,
    body: post?.body,
    id,
  });

  return (
    <div>
      <GoBackBtn />
      {post && <PostWithTitle />}
    </div>
  );
};

export default SinglePost;
