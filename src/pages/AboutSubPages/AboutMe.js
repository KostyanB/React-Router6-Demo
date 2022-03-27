import makeSubPage from '../../components/Hocs/makeSubPage';

const Content = () => (
  <p>
    Loving JavaScript and pure code, attention to detail frontend-developer. I'm
    looking for an entry-level position, that will effectively use my skills to
    create user-friendly interfaces and help the Company complete projects on
    time.
  </p>
);

const AboutMe = makeSubPage(Content, {
  title: 'Who am I?',
  displayName: 'AboutMe',
});

export default AboutMe;
