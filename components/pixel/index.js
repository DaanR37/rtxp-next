/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Head from 'next/head';

import FaceBookPixel from './facebook/pixel-1';

const Pixel = ({ name }) => {
    return (
        <Head>
            {name === 'FaceBookPixel' && <FaceBookPixel />}
        </Head>
    )
}

export default Pixel;