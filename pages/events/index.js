import Image from 'next/image';

const EventsPage = ({ data }) => {
  return (
    <>
      <strong>Events Page</strong>
      <div>
        {
          data.map(event => (
            <a key={event.id} href={`/events/${event.id}`}>
              <h2>{event.title}</h2>
              <Image src={event.image} alt={event.title} width={200} height={200} />
            </a>
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