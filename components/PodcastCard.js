import Link from 'next/link';
import { useState } from 'react';


export default function PodcastCard({ podcast }) {
    const { title, slug, audio, fields } = podcast.fields

    return (
        <div className="podcast-card-container">
                <Link href={'/podcasts/' + slug}>
                    <div className="title">
                        <h4>{title}</h4>
                    </div>
                    <div className="audio">
                        <audio
                            controls
                            src={'https:' + audio[0].fields.file.url}
                            type="audio/mpeg"
                        >
                        </audio>
                    </div>
                </Link>
        </div>
    )
}
