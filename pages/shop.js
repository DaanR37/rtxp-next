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
        </>
    );
}

export default Shop;