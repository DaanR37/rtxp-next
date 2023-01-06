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
                <title>RTXP - About</title>
                <meta name="keywords" content="contact page rtxp" />
                <meta name='description' content='RTXP contact details and location map where to find us' />
                <meta property="og:title" content="Contact Page RTXP" />
                <meta property="og:url" content="https://www.rtxp.nl/about" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.aboutcontainer}>
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
            </section>
        </>
    );
}

export default About;