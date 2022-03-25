import { useEffect, useState } from 'react';
import env from '../../env.json';
import Form from '../Form';

const PostsFilter = ({ handleSearch, initCheck, ...props }) => {
  const [check, setCheck] = useState(false);

  useEffect(() => setCheck(initCheck), [initCheck]);

  const handleSearchForm = searchValue => {
    handleSearch(searchValue, check);
  };

  return (
    <Form handleForm={handleSearchForm} {...props}>
      <label htmlFor='checklatest'>Only {env.latestFilter} new</label>
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
export default PostsFilter;
