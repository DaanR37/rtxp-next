import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/About.module.scss';

import { useRouter } from "next/router";

import blogPostAbout from "../components/postabout.json";
import BlogCardAbout from "../components/blogCardAbout/index";


const About = () => {
    const { locale } = useRouter();

    return (
        <>
            <Head>
                <title>Over Ons | RTXP Amsterdam</title>
                <meta name='description' content='Op deze pagina vind je alle informatie met betrekking tot onze openingstijden, bereikbaarheid, parkeren en contactgegevens.' />
                <meta property="og:title" content="Over Ons | RTXP Amsterdam" />
                <meta property="og:url" content="https://www.rtxp.nl/about" />
            </Head>
            <div className={styles.googlemapcontainer}>
                <div className={styles.contactdetails}>
                    {blogPostAbout.postabout
                        .filter((p) => p.locale === locale)
                        .map((blogPostAbout, i) => {
                            return <BlogCardAbout key={i} blogPostAbout={blogPostAbout} />
                        })}
                </div>
                <div className={styles.locationmap}>
                    <Image
                        src="/images/location-map.svg"
                        alt="location map"
                        className={styles.image}
                        width={350}
                        height={350}
                        priority={true}
                    />
                </div>
            </div>
        </>
    );
}

export default About;