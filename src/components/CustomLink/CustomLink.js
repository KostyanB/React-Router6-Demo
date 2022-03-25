import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...otherProps }) => {
  console.log('to: ', to);
  // end: false - проверка по части to
  // to.length === 1 у главной страницы '/'
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

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
