import { createClient } from 'contentful';
import PodcastCard from '../components/PodcastCard';

export async function getStaticProps() {
    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({ content_type: 'podcast' })

    return {
        props: {
            podcasts: res.items
        }
    }
}

export default function Podcasts({ podcasts }) {

    return (
        <div className='podcasts-container'>
            {podcasts.map(podcast => (
                <PodcastCard key={podcast.sys.id} podcast={podcast} />
            ))}
        </div>
    )
}
