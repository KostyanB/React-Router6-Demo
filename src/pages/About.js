import { useCallback } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const About = () => {
  const setActive = useCallback(
    ({ isActive }) => (isActive ? 'active-nav' : ''),
    [],
  );

  return (
    <div>
      <h1>About</h1>
      <p>
        This is a training website about using Api from new 6-th release
        React-router-dom library.
      </p>
      <ul>
        <li>
          <NavLink to='aboutme' className={setActive}>
            About me
          </NavLink>
        </li>
        <li>
          <NavLink to='contacts' className={setActive}>
            My Contacts
          </NavLink>
        </li>
      </ul>

      {/* <Routes>
                <Route path="contacts" element={<p>Our contact</p>} />
                <Route path="team" element={<p>Our team</p>} />
            </Routes> */}
      <Outlet />
    </div>
  );
};
export default About;
