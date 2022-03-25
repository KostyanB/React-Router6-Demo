import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { usePostsContext } from '../../context';
import env from '../../env.json';

const Posts = ({ postQuery, latest }) => {
  const { postsData } = usePostsContext();

  const startsFrom = useMemo(
    () => (latest ? postsData.length - (env.latestFilter - 1) : 0),
    [latest, postsData],
  );

  return (
    <ul>
      {postsData
        .filter(
          post =>
            post.title.toLowerCase().includes(postQuery.toLowerCase()) &&
            post.id >= startsFrom,
        )
        .map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.id}. <span>{post.title}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};
export default Posts;
