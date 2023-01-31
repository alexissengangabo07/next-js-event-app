import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const HomePage = ({ data }) => {
  return (
    <>
      <header>
        <nav>
          <Link href="./">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about-us">About</Link>
        </nav>
      </header>
      <main>
        {
          data.map(event => (
            <a key={event.id} href={`/events/${event.id}`}>
              <Image src="/next.svg" alt={event.title} width="100" height="100" />
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </a>
          ))
        }
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Event</p>
      </footer>
    </>
  )
}

export const getServerSideProps = async () => {
  const { events_categories } = await import('/data/data.json');
  
  return {
    props: {
      data: events_categories
    }
  }
}

export default HomePage;