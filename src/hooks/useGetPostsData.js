import { useState, useCallback, useEffect } from 'react';
import env from '../env.json';

const useGetPostsData = () => {
  const [postsData, setPostsData] = useState(null);
  const [postsDataObj, setPostsDataObj] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleResponce = useCallback(res => {
    const obj = {};

    res.forEach(item => {
      obj[item.id] = item;
    });

    setPostsData(res);
    setPostsDataObj(obj);
  }, []);

  const getPosts = useCallback(async () => {
    try {
      setLoading(true);
      const json = await fetch(env.backend.dbUrl);
      const res = await json.json();
      handleResponce(res);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [handleResponce]);

  useEffect(() => getPosts(), [getPosts]);

  return {
    postsData,
    postsDataObj,
    getPosts,
    error,
    loading,
  };
};
export default useGetPostsData;
