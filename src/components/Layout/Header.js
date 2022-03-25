import CustomLink from '../CustomLink';

const Header = () => (
  <header>
    <CustomLink to='/'>Home</CustomLink>
    <CustomLink to='/posts'>Blog</CustomLink>
    <CustomLink to='/about'>About</CustomLink>
  </header>
);
export default Header;
