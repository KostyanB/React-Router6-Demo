import { Link, useSearchParams } from 'react-router-dom';
import { usePostsContext } from '../../context';
import PostsList from '../../components/PostsList';
import PostsFilter from '../../components/PostsFilter';
import makePageWithTitle from '../../components/Hocs/makePageWithTitle';

const Posts = () => {
  const { getPosts, error, loading, postsData } = usePostsContext();
  // useEffect(() => getPosts(), [getPosts]);

  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('post') || '';
  const latest = searchParams.has('latest');
  //* URL.ru/posts?post=abcd&latest=true...

  const handleSetSearchParams = (query, isLatest) => {
    const params = {};
    if (query.length) params.post = query;
    if (isLatest) params.latest = true;
    setSearchParams(params);
  };

  return (
    <>
      {/* <div> */}
      {/* <h1>Our news</h1> */}
      <PostsFilter
        handleSearch={handleSetSearchParams}
        inputName='search'
        inputType='search'
        initInput={postQuery}
        btnText='Search'
        autoComplete='off'
        spellCheck='false'
        initCheck={latest}
      />

      <Link to={`/posts/new`} className='button'>
        Add new post
      </Link>
      {postsData && <PostsList postQuery={postQuery} latest={latest} />}
      {loading && <div>...Loading</div>}
      {error && <div className='error'>Sorry, error: {error.message}</div>}
      {/* </div> */}
    </>
  );
};
// export default Posts;

const WithTitlePosts = makePageWithTitle(Posts, {
  title: 'Our news',
});
export default WithTitlePosts;
