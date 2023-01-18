import { createClient } from 'contentful';
// import { title } from 'process';


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'podcast'
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: 'podcast',
        'fields.slug': params.slug
    })

    return {
        props: { podcast: items[0] }
    }
}


export default function PodcastDetails({ podcast }) {
    const { title, audio } = podcast.fields

    return (
        <div className="slug-container">
            <div className="title-slug">
                {title}
            </div>
            <div className="audio-slug">
                <audio
                    controls
                    src={'https:' + audio[0].fields.file.url}
                    type="audio/mpeg"
                >
                </audio>
            </div>
        </div>
    )
}