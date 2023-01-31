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
                <title>Interesse in een werk? | RTXP Amsterdam</title>
                <meta name='description' content='Elk werk bij RTXP is te koop. Wil je een werk kopen of heb je iets in gedachte dat wij niet hebben hangen maar je wel graag zou willen? Laat het ons weten!' />
                <meta property="og:title" content="Interesse in een werk? | RTXP Amsterdam" />
                <meta property="og:url" content="https://www.rtxp.nl/shop" />
                {/* <meta name="keywords" content="shop page rtxp" />
                <link rel="icon" href="/favicon.ico" /> */}
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