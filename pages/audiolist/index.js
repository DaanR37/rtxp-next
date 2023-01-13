import React from 'react';

import AudioTour from "../../components/audiotour.json";
import MappingAudio from '../../components/mappingAudio/index';


const AUDIO_LIST = [
    {   
        id: 1,
        title: "Dans Moulin Rouge",
        src: "/dans-moulin-rouge.mp3",
    },
    {   
        id: 2,
        title: "De Rode Boom",
        src: "/de-rode-boom.mp3",
    },
];

export default function AudioList(props) {
    return (
        <div>
            {AUDIO_LIST.map((audio, src) => (
                <div key={audio.id}>
                    <h1>{audio.title}</h1>
                    <audio controls src={src}>{audio.src}</audio>
                </div>
            ))}
            {/* {AudioTour.audiotour.map(audiotour => {
                return <MappingAudio key={audiotour.id} audiotour={audiotour} />
            })} */}
        </div>
    )
}
