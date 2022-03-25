import { Routes, Route, Navigate } from 'react-router-dom';
//Navigate для переадресации, парам replace - не сохранять в истории
import Layout from '../Layout';
import { About, Blog, Home, NotFound, LogIn } from '../../pages';
import { SinglePost, CreatePost, EditPost } from '../../pages/PostSubPages';
import { AboutMe, ContactMe } from '../../pages/AboutSubPages';
import AuthRequire from '../Hoks/AuthRequire';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about/*' element={<About />}>
        <Route path='aboutme' element={<AboutMe />} />
        <Route path='contacts' element={<ContactMe />} />
      </Route>
      <Route path='about-us' element={<Navigate to='/about' replace />} />
      <Route path='posts' element={<Blog />} />
      <Route path='posts/:id' element={<SinglePost />} />
      <Route path='posts/:id/edit' element={<EditPost />} />
      <Route
        path='posts/new'
        element={
          <AuthRequire>
            <CreatePost />
          </AuthRequire>
        }
      />
      <Route path='login' element={<LogIn />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
);
export default AppRoutes;
