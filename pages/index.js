import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>RTXP - Home</title>
        <meta name="keywords" content="home page rtxp" />
        <meta name='description' content='home page rtxp' />
        <meta property="og:title" content="Home Page RTXP" />
        <meta property="og:url" content="https://www.rtxp.nl/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.rtxplogo}>
        <Image
          src="/images/rtxp-main-logo-new.svg"
          alt="rtxp logo"
          className={styles.image}
          width={250}
          height={150}
          priority={true}
        />
      </div>
      <div className={styles.ticketssticker}>
        <Image
          src="/images/tickets-sticker.jpg"
          alt="tickets sticker"
          className={styles.image}
          width={250}
          height={125}
        />
      </div>
    </>
  )
}
