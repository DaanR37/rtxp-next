import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Events.module.scss';

import { useRouter } from "next/router";

import blogPostEvents from '../components/postevents.json';
import BlogCardEvents from '../components/blogCardEvents/index';

import blogPostEventsTwo from '../components/posteventstwo.json';
import BlogCardEventsTwo from '../components/blogCardEventsTwo/index';

import blogPostEventsThree from '../components/posteventsthree.json';
import BlogCardEventsThree from '../components/blogCardEventsThree/index';


const Events = () => {
    const { locale } = useRouter();

    return (
        <>
            <Head>
                <title>Beleef het moment tijdens onze Art Experience Events | RTXP</title>
                <meta name='description' content='De Nachtwacht LIVE of een 360° ervaring waarbij je je waant in de Tuin van Monet in Giverny met het Japanse bruggetje? Reserveer vandaag nog tickets!' />
                <meta property="og:title" content="Beleef het moment tijdens onze Art Experience Events | RTXP" />
                <meta property="og:url" content="https://www.rtxp.nl/events" />
            </Head>
            <div className={styles.slidercontainer}>
                <div className={styles.bannercontainerone}>
                    <Image
                        src="/images/building-rtxp.jpg"
                        alt="rtxp gebouw"
                        className={styles.image}
                        width={350}
                        height={350}
                    />
                    <div className={styles.overlay}>
                        {blogPostEvents.postevents
                            .filter((p) => p.locale === locale)
                            .map((blogPostEvents, i) => {
                                return <BlogCardEvents key={i} blogPostEvents={blogPostEvents} />
                            })}
                    </div>
                </div>
                <div className={styles.bannercontainertwo}>
                    <Image
                        src="/images/nachtwacht.jpg"
                        alt="nachtwacht"
                        className={styles.image}
                        width={350}
                        height={350}
                    />
                    <div className={styles.overlay}>
                        {blogPostEventsTwo.posteventstwo
                            .filter((p) => p.locale === locale)
                            .map((blogPostEventsTwo, i) => {
                                return <BlogCardEventsTwo key={i} blogPostEventsTwo={blogPostEventsTwo} />
                            })}
                    </div>
                </div>
                <div className={styles.bannercontainerthree}>
                    <Image
                        src="/images/garden-monet-kopie.jpg"
                        alt="monet's garden"
                        className={styles.image}
                        width={350}
                        height={350}
                    />
                    <div className={styles.overlay}>
                        {blogPostEventsThree.posteventsthree
                            .filter((p) => p.locale === locale)
                            .map((blogPostEventsThree, i) => {
                                return <BlogCardEventsThree key={i} blogPostEventsThree={blogPostEventsThree} />
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Events;