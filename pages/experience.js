import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Experience.module.scss';

import { useRouter } from "next/router";

import blogPostExperience from "../components/postexperience.json";
import BlogCardExperience from '../components/blogCardExperience/index';

const Experience = () => {

    const { locale } = useRouter();

    return (
        <>
            <Head>
                <title>RTXP - Experience</title>
                <meta name="keywords" content="experience page rtxp" />
                <meta name='description' content='What are we doing exactly and what is our product and service?' />
                <meta property="og:title" content="Experience Page RTXP" />
                <meta property="og:url" content="https://www.rtxp.nl/experience" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.experiencecontainer}>
                <div className={styles.backgroundimage} style={{
                    backgroundImage: "url(/images/background-image-exp.jpg)"
                }}></div>

                <div className={styles.monetcontainer}>

                    <div className={styles.textcontainer}>
                        {blogPostExperience.postexperience
                            .filter((p) => p.locale === locale)
                            .map((blogPostExperience, i) => {
                                return <BlogCardExperience key={i} blogPostExperience={blogPostExperience} />
                            })}
                    </div>

                    <div className={styles.imagecontainer}>
                        <Image
                            src="/images/monet.jpg"
                            alt="monet painting"
                            className={styles.image}
                            width={350}
                            height={350}
                            priority={true}
                        />
                    </div>
                </div>
                <div className={styles.redcircle}>
                    <Image
                        src="/images/red-circle-icon.svg"
                        alt="red circle"
                        className={styles.image}
                        width={250}
                        height={150}
                    />
                </div>
                <div className={styles.umbrellasticker}>
                    <Image
                        src="/images/umbrella-icon.svg"
                        alt="umbrella sticker"
                        className={styles.image}
                        width={250}
                        height={150}
                    />
                </div>
            </section>

        </>
    );
}

export default Experience;