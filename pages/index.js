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
      <section className={styles.homepagecontainer}>
        <div className={styles.backgroundimage} style={{
          backgroundImage: "url(/images/background-image-hp.jpg)"
        }}></div>

        <div className={styles.rtxplogo}>
          <Image
            src="/images/rtxp-main-logo.svg"
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
        <div className={styles.bluecross}>
          <Image
            src="/images/blue-cross-icon.svg"
            alt="blue cross"
            className={styles.image}
            width={250}
            height={125}
          />
        </div>
        <div className={styles.redarrows}>
          <Image
            src="/images/red-arrows-icon.svg"
            alt="red arrows"
            className={styles.image}
            width={250}
            height={125}
          />
        </div>
      </section>
    </>
  )
}
