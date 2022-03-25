import { Outlet } from 'react-router-dom';
import { PostsContextProvider } from '../../context';
import Header from './Header';
import Footer from './Footer';

const Layout = () => (
  <>
    <Header />
    <main className='container'>
      <PostsContextProvider>
        <Outlet />
      </PostsContextProvider>
    </main>
    <Footer />
  </>
);
export default Layout;
