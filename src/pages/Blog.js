import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { usePostsContext } from '../context';
// import { BlogFilter } from '../components/BlogFilter';
import Posts from '../components/Posts';
import PostsFilter from '../components/PostsFilter';
import Form from '../components/Form';

const SearchForm = ({ handleSearch, initCheck, ...props }) => {
  const [check, setCheck] = useState(false);

  useEffect(() => setCheck(initCheck), [initCheck]);

  const handleSearchForm = searchValue => {
    handleSearch(searchValue, check);
  };

  return (
    <Form handleForm={handleSearchForm} {...props}>
      <label htmlFor='checklatest'>Latest only</label>
      <input
        type='checkbox'
        name='checklatest'
        checked={check}
        onChange={() => setCheck(!check)}
        id=''
      />
    </Form>
  );
};

const Blog = () => {
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
    <div>
      <h1>Our news</h1>
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
      {postsData && <Posts postQuery={postQuery} latest={latest} />}
      {loading && <div>...Loading</div>}
      {error && <div className='error'>Sorry, error: {error.message}</div>}
    </div>
  );
};
export default Blog;
