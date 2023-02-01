import Image from 'next/image';

const EventsByCategoriePage = ({ data }) => {
  return (
    <div>
      Events In Goma
      <div>
        {
          data.map(event => (
            <a href={`/event/${event.city}/${event.id}`} key={event.id}>
              <h2>{event.title}</h2>
              <Image src={event.image} width="350" height="300" alt={event.title} />
              <p>
                {event.description}
              </p>
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default EventsByCategoriePage;

export const getStaticPaths = async () => {
  const { events_categories } = await import('/data/data.json');

  const allPaths = events_categories.map(event => {
    return {
      params: {
        categorie: event.id
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.categorie;
  const { allEvents } = await import('/data/data.json');

  const data = allEvents.filter(ev => ev.city === id);

  return {
    props: {
      data
    }
  }
}