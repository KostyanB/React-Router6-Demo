import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...otherProps }) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      style={{ color: match ? 'var(--color-active)' : 'white' }}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
export default CustomLink;
