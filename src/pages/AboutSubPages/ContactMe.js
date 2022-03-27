import makeSubPage from '../../components/Hocs/makeSubPage';

const Content = () => {
  return (
    <p>
      You can get my contacts and links to examples of my work in my{' '}
      <a href='https://kostyanb.github.io/portfolio/' className='contact'>
        Portfolio
      </a>
      .
    </p>
  );
};

const ContactMe = makeSubPage(Content, {
  title: 'Contact Me',
  displayName: 'ContactMe',
});

export default ContactMe;
