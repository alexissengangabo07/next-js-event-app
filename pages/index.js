import Link from 'next/link';
import React from 'react';

const HomePage = ({ title }) => {
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
        <a href=''>
          <h1>{title}</h1>
          <img src="" alt="" />
          <h2>Event in Goma</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore alias commodi temporibus molestiae ipsum dolores, excepturi, mollitia amet molestias magnam iusto quibusdam, facere unde voluptatibus. Cum sapiente quaerat omnis.
          </p>
        </a>
        <a href='/events/'>
          <img src="" alt="" />
          <h2>Event in Bukavu</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore alias commodi temporibus molestiae ipsum dolores, excepturi, mollitia amet molestias magnam iusto quibusdam, facere unde voluptatibus. Cum sapiente quaerat omnis.
          </p>
        </a>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Event</p>
      </footer>
    </>
  )
}

export const getServerSideProps = () => {
  return {
    props: {
      title: "Bonjour Tariq"
    }
  }
}

export default HomePage;