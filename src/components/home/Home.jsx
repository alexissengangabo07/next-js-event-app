import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = ({ data }) => (
    <main>
        {
            data.map(event => (
                <Link key={event.id} href={`/events/${event.id}`}>
                    <Image src={event.image} alt={event.title} width="300" height="300" />
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                </Link>
            ))
        }
    </main>
)

export default Home