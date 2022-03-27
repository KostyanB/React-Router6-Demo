import { Routes, Route, Navigate } from 'react-router-dom';
//Navigate для переадресации, парам replace - не сохранять в истории
import Layout from '../Layout';
import { About, Blog, Home, NotFound, LogIn } from '../../pages';
import {
  Posts,
  SinglePost,
  CreatePost,
  EditPost,
} from '../../pages/BlogSubPages';
import { AboutMe, ContactMe } from '../../pages/AboutSubPages';
import AuthRequire from '../Hocs/AuthRequire';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />}>
        <Route path='aboutme' element={<AboutMe />} />
        <Route path='contacts' element={<ContactMe />} />
      </Route>
      <Route path='about-us' element={<Navigate to='/about' replace />} />
      <Route path='posts' element={<Blog />}>
        <Route index element={<Posts />} />
        <Route path=':id' element={<SinglePost />} />
        <Route path=':id/edit' element={<EditPost />} />
        <Route
          path='new'
          element={
            <AuthRequire>
              <CreatePost />
            </AuthRequire>
          }
        />
      </Route>
      <Route path='login' element={<LogIn />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
);
export default AppRoutes;
