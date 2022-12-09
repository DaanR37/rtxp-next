import Head from 'next/head';
import Image from 'next/image';
import Form from '../components/Form';
import styles from '../styles/Shop.module.scss';

const Shop = () => {

    return (
        <>
            <Head>
                <title>RTXP - Contact Form</title>
                <meta name="keywords" content="shop page rtxp" />
                <meta name='description' content='Contact form to make a product order' />
                <meta property="og:title" content="Shop Page RTXP" />
                <meta property="og:url" content="https://www.rtxp.nl/shop" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.shopcontainer}>
                <div className={styles.backgroundimage} style={{
                    backgroundImage: "url(/images/background-image-exp.jpg)"
                }}></div>

                <div className={styles.shopitemscontainer}>
                    <div className={styles.textcontainer}>
                        <h1>shop</h1>
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
                    <div className={styles.formcontainer}>
                        <Form />
                    </div>
                </div>

                <div className={styles.chaticon}>
                    <Image
                        src="/images/chat-icon.svg"
                        alt="chat icon"
                        className={styles.image}
                        width={350}
                        height={350}
                        priority={true}
                    />
                </div>
            </section>
        </>
    );
}

export default Shop;