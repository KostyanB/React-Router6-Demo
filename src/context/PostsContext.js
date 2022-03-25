import { createContext, useContext } from 'react';
import useGetPostsData from '../hooks/useGetPostsData';

const PostsContext = createContext();

export const usePostsContext = () => useContext(PostsContext);

export const PostsContextProvider = props => {
  const { postsData, postsDataObj, getPosts, error, loading } =
    useGetPostsData();

  const value = { postsData, postsDataObj, getPosts, error, loading };

  return (
    <PostsContext.Provider value={value}>
      {props.children}
    </PostsContext.Provider>
  );
};
