import { useCallback } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import makePageWithTitle from '../components/Hocs/makePageWithTitle';

const About = () => {
  const setActive = useCallback(
    ({ isActive }) => `link ${isActive ? 'active-nav' : ''}`,
    [],
  );

  return (
    <>
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
    </>
  );
};

const AboutWithTitle = makePageWithTitle(About, { title: 'About' });
export default AboutWithTitle;
