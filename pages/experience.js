import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Experience.module.scss';

import Pixel from '../components/pixel';


const Experience = () => {
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
                <Pixel name='FaceBookPixel' />

                <div className={styles.backgroundimage} style={{
                    backgroundImage: "url(/images/background-image-exp.jpg)"
                }}></div>

                <div className={styles.monetcontainer}>
                    <div className={styles.textcontainer}>
                        <h1>the experience</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry.
                            Lorem Ipsum has been the industrys standard
                            dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also
                            the leap into electronic typesetting,
                            remaining essentially unchanged. It was
                            popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages.
                            It is a long established fact that a reader
                            will be distracted by the readable content of
                            a page when looking at its layout.
                            The point of using Lorem Ipsum is that it
                            has a more-or-less normal distribution
                            of letters, as opposed to using Content here,
                            content here, making it look like readable English.
                            Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry.
                        </p>
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