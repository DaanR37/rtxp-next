// import Head from 'next/head'
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <section className={styles.homepagecontainer}>
      <div className={styles.backgroundimage} style={{
        backgroundImage: "url(/images/background-image-hp.jpg)"
      }}>
        <div className={styles.rtxplogo}>
          <picture>
            <img
              src="/images/rtxp-main-logo.svg"
              alt="rtxp logo"
            />
          </picture>
        </div>
        <div className={styles.ticketssticker}>
          <picture>
            <img
              src="/images/tickets-sticker.svg"
              alt="tickets sticker"
            />
          </picture>
        </div>
        <div className={styles.bluecross}>
          <picture>
            <img
              src="/images/blue-cross-icon.svg"
              alt="blue cross"
            />
          </picture>
        </div>
        <div className={styles.redarrows}>
          <picture>
            <img
              src="/images/red-arrows-icon.svg"
              alt="red arrows"
            />
          </picture>
        </div>
        <div className={styles.fragilesticker}>
          <picture>
            <img
              src="/images/our-art-is-not-fragile.svg"
              alt="fragile sticker"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
