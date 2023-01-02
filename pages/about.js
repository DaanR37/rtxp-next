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
                <div className={styles.backgroundimage} style={{
                    backgroundImage: "url(/images/background-image-hp.jpg)"
                }}></div>
                <div className={styles.googlemapcontainer}>
                    <div className={styles.contactdetails}>
                        {blogPostAbout.postabout
                            .filter((p) => p.locale === locale)
                            .map((blogPostAbout, i) => {
                                return <BlogCardAbout key={i} blogPostAbout={blogPostAbout} />
                            })}
                    </div>

                    {/* <h1>about</h1>
                        <h2>contact</h2>
                        <p>RTXP Amsterdam
                            <br />
                            Tel: 020 - 6261433
                            <br />
                            Email: info@rtxp.com
                            <br />
                            Adres gegevens:
                            <br />
                            1e Jacob van Campenstraat
                            <br />
                            59 1072 BD Amsterdam
                        </p>
                        <br />
                        <h2>bereikbaarheid</h2>
                        <p>
                            Openbaar vervoer:
                            Trams 1, 7, 19 (Halte Vijzelgracht),
                            <br />
                            lijn 24 (Halte Marie Heinekenplein)
                            <br />
                            & Metro 52 (Halte De Pijp)
                        </p>
                        <br />
                        <h2>parkeren</h2>
                        <p>
                            APCOA: Eerste van der Helststraat 6
                            1072 NV Amsterdam,
                            Parking Museumquarter
                            Nicolaas Maesstraat 2A
                            1071 RA Amsterdam,
                            Parkeergarage Albert Cuyp
                            Ruysdaelkade 93
                            1072 AM Amsterdam
                        </p>
                        <br />
                        <h2>fiets</h2>
                        <p>
                            Aan de voorzijde, verderop in de straat
                            en aan de overkant op het Marie Heinekenplein
                            zijn meerdere fietsenrekken om je fiets aan
                            te bevestigen.
                        </p> */}
                    {/* </div> */}
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

                <div className={styles.pinkarrowsicon}>
                    <Image
                        src="/images/pink-arrows-icon.svg"
                        alt="pink arrows icon"
                        className={styles.image}
                        width={350}
                        height={350}
                    />
                </div>

                <div className={styles.greencrossicon}>
                    <Image
                        src="/images/green-cross-icon.svg"
                        alt="green cross icon"
                        className={styles.image}
                        width={350}
                        height={350}
                    />
                </div>
            </section>
        </>
    );
}

export default About;