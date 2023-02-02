import Head from 'next/head';
import Home from '../src/components/home/Home';

const HomePage = ({ data }) => (
  <>
    <Head>
      <title>Home Page</title>
    </Head>
    <Home data={data} />
  </>
);

export const getServerSideProps = async () => {
  const { events_categories } = await import('/data/data.json');

  return {
    props: {
      data: events_categories
    }
  }
}

export default HomePage;