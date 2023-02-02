import Image from 'next/image'

const EventPerCityPage = ({ data }) => {
    return (
        <>
            <h2>{data.title}</h2>
            <Image src={data.image} width={500} height={430} alt={data.title} />
            <p>
                {data.description}
            </p>
            <span>City: {data.city}</span>
        </>
    )
}

export default EventPerCityPage;

export const getStaticPaths = async () => {
    const { allEvents } = await import('/data/data.json');

    const allPaths = allEvents.map(event => {
        return {
            params: {
                eventId: event.id,
                town: event.city
            }
        }
    });

    return {
        paths: allPaths,
        fallback: true
    }
}

export const getStaticProps = async (context) => {
    const { eventId } = context.params;
    const { allEvents } = await import('/data/data.json');

    const singleEvent = allEvents.find(event => event.id === eventId);

    return {
        props: {
            data: singleEvent
        }
    }
}