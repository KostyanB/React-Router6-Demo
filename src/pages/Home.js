import makePageWithTitle from '../components/Hocs/makePageWithTitle';

const Home = () => <p>Get started with React-Router 6-th release</p>;

const HomeWithTitle = makePageWithTitle(Home, {
  title: 'React Router 6',
});
export default HomeWithTitle;
