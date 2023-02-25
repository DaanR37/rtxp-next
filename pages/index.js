import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dé Art Experience van Amsterdam | RTXP Amsterdam</title>
        <meta name='description' content='Reis aan de hand van realistische studies door vele eeuwen schilderkunst. Van de Renaissance tot de Moderne Tijd. Reserveer vandaag nog tickets!' />
        <meta property="og:title" content="Dé Art Experience van Amsterdam | RTXP Amsterdam" />
        <meta property="og:url" content="https://www.rtxp.nl/" />
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
    </>
  )
}
