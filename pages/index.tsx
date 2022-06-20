import type { NextPage } from 'next';
import Hero from '../components/hero';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <div>More content</div>
    </>
  );
};

export default Home;
