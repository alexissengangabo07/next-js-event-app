const EventPerCityPage = () => {
    return (
        <>
            <h2>Single Event</h2>
        </>
    )
}

export default EventPerCityPage;

export const getStaticPaths = async () => {
    return {
        paths: [
            {
                params: {
                    categorie: 'london',
                    eventId: '12'
                }
            }
        ],
        fallback: true
    }
}

export const getStaticProps = async (context) => {
    return {
        props: {}
    }
}