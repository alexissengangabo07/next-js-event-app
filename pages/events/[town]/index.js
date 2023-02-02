import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const EventsByCategoriePage = ({ data }) => {
  // const [city, setCity] = useState('');
  // useEffect(() => {
  //   setCity(data[0].city);
  // }, [data]);

  return (
    <>
      <Head>
        <title>Events in {data[0].city}</title>
      </Head>
      <div>
        Events in {data[0].city}
        <div>
          {
            data.map(event => (
              <Link href={`/events/${event.city}/${event.id}`} key={event.id}>
                <h2>{event.title}</h2>
                <Image src={event.image} width="350" height="300" alt={event.title} />
                <p>
                  {event.description}
                </p>
              </Link>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default EventsByCategoriePage;

export const getStaticPaths = async () => {
  const { events_categories } = await import('/data/data.json');

  const allPaths = events_categories.map(event => {
    return {
      params: {
        town: event.id
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.town;
  const { allEvents } = await import('/data/data.json');

  const data = allEvents.filter(ev => ev.city === id);

  return {
    props: {
      data
    }
  }
}