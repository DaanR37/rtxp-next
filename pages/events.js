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
                <title>RTXP - Events</title>
                <meta name="keywords" content="events page rtxp" />
                <meta name='description' content='Upcoming events at RTXP' />
                <meta property="og:title" content="Events Page RTXP" />
                <meta property="og:url" content="https://www.rtxp.nl/events" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.eventscontainer}>
                <div className={styles.backgroundimage} style={{
                    backgroundImage: "url(/images/background-image-exp.jpg)"
                }}></div>

                <div className={styles.slidercontainer}>
                    <div className={styles.banner1}>
                        <div className={styles.bannercontainerone}>
                            <Image
                                src="/images/events-text-banner.svg"
                                alt="text banner"
                                className={styles.image}
                                width={350}
                                height={350}
                                priority={true}
                            />
                        </div>
                        <div className={styles.bannercontainermonetone}>
                            <Image
                                src="/images/events-monet.png"
                                alt="monet painting"
                                className={styles.image}
                                width={350}
                                height={350}
                            />
                        </div>
                        <div>
                            {blogPostEvents.postevents
                                .filter((p) => p.locale === locale)
                                .map((blogPostEvents, i) => {
                                    return <BlogCardEvents key={i} blogPostEvents={blogPostEvents} />
                                })}
                        </div>

                        {/* <h1>Monet by <i>night</i></h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat. Ut wisi enim ad minim
                            veniam, quis nostrud exerci tation ullamcorper
                            suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat.</p> */}
                    </div>
                    <div className={styles.banner2}>
                        <div className={styles.bannercontainertwo}>
                            <Image
                                src="/images/events-text-banner.svg"
                                alt="text banner"
                                className={styles.image}
                                width={350}
                                height={350}
                                priority={true}
                            />
                        </div>
                        <div className={styles.bannercontainermonettwo}>
                            <Image
                                src="/images/events-monet.png"
                                alt="monet painting"
                                className={styles.image}
                                width={350}
                                height={350}
                            />
                        </div>
                        <div>
                            {blogPostEventsTwo.posteventstwo
                                .filter((p) => p.locale === locale)
                                .map((blogPostEventsTwo, i) => {
                                    return <BlogCardEventsTwo key={i} blogPostEventsTwo={blogPostEventsTwo} />
                                })}
                        </div>

                        {/* <h1>Monet by <i>night</i></h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat. Ut wisi enim ad minim
                            veniam, quis nostrud exerci tation ullamcorper
                            suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat.</p> */}
                    </div>
                    <div className={styles.banner3}>
                        <div className={styles.bannercontainerthree}>
                            <Image
                                src="/images/events-text-banner.svg"
                                alt="text banner"
                                className={styles.image}
                                width={350}
                                height={350}
                                priority={true}
                            />
                        </div>
                        <div className={styles.bannercontainermonetthree}>
                            <Image
                                src="/images/events-monet.png"
                                alt="monet painting"
                                className={styles.image}
                                width={350}
                                height={350}
                            />
                        </div>
                        <div>
                            {blogPostEventsThree.posteventsthree
                                .filter((p) => p.locale === locale)
                                .map((blogPostEventsThree, i) => {
                                    return <BlogCardEventsThree key={i} blogPostEventsThree={blogPostEventsThree} />
                                })}
                        </div>

                        {/* <h1>Monet by <i>night</i></h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat. Ut wisi enim ad minim
                            veniam, quis nostrud exerci tation ullamcorper
                            suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat.</p> */}
                    </div>
                </div>
                <div className={styles.winesticker}>
                    <Image
                        src="/images/events-wine.svg"
                        alt="blue cross"
                        className={styles.image}
                        width={350}
                        height={350}
                    />
                </div>
                <div className={styles.handsticker}>
                    <Image
                        src="/images/events-hand.svg"
                        alt="red arrows"
                        className={styles.image}
                        width={350}
                        height={350}
                    />
                </div>
            </section>
        </>
    );
}

export default Events;