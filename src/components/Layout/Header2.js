import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const setActive = useCallback(
    ({ isActive }) => (isActive ? 'active-nav' : ''),
    [],
  );

  const setActiveStyle = useCallback(
    ({ isActive }) => ({ color: isActive ? 'var(--color-active)' : 'white' }),
    [],
  );

  return (
    <header>
      <NavLink to='/' className={setActive}>
        Home
      </NavLink>
      <NavLink to='/posts' className={setActive}>
        Blog
      </NavLink>
      <NavLink to='/about' style={setActiveStyle}>
        About
      </NavLink>
    </header>
  );
};
export default Header;
