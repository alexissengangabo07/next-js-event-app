import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const EventsPage = ({ data }) => {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <strong>Events Page</strong>
      <div>
        {
          data.map(event => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <h2>{event.title}</h2>
              <Image src={event.image} alt={event.title} width={200} height={200} />
            </Link>
          ))
        }
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const { events_categories } = await import('/data/data.json');

  return {
    props: {
      data: events_categories
    }
  }
}

export default EventsPage