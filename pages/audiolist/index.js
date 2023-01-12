import React from 'react';

import AudioTour from "../../components/audiotour.json";
import MappingAudio from '../../components/mappingAudio/index';

export default function AudioList() {
    return (
        <div>
            {AudioTour.audiotour.map(audiotour => {
                return <MappingAudio key={audiotour.id} audiotour={audiotour} />
            })}
        </div>
    )
}
