import Head from 'next/head';
import Image from 'next/image';
import Form from '../components/Form';
import styles from '../styles/Shop.module.scss';

import { useRouter } from 'next/router';

import blogPostShop from '../components/postshop.json';
import BlogCardShop from '../components/blogCardShop/index';


const Shop = () => {

    const { locale } = useRouter();

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
                        {blogPostShop.postshop
                            .filter((p) => p.locale === locale)
                            .map((blogPostShop, i) => {
                                return <BlogCardShop key={i} blogPostShop={blogPostShop} />
                            })}
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