import Hero from '../components/hero';
import SubscribeCta from '../components/subscribeCta';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <SubscribeCta />
    </>
  );
};

export default Home;
