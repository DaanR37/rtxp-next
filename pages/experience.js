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
                <title>Art Experience | RTXP Amsterdam</title>
                <meta name='description' content='In een van de mooiste gebouwen van de Pijp word je aan de hand van realistische studies meegenomen door vele eeuwen schilderkunst. Reserveer nu online!' />
                <meta property="og:title" content="Art Experience | RTXP Amsterdam" />
                <meta property="og:url" content="https://www.rtxp.nl/experience" />
                {/* <meta name="keywords" content="experience page rtxp" />
                <link rel="icon" href="/favicon.ico" /> */}
            </Head>
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
                        src="/images/van-gogh-nieuw.jpg"
                        alt="monet painting"
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

export default Experience;