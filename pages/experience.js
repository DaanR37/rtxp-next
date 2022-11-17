import styles from '../styles/Experience.module.scss';


const Experience = () => {
    return (
        <section className={styles.experiencecontainer}>
            <div className={styles.backgroundimage} style={{
                backgroundImage: "url(/images/background-image-exp.jpg)"
            }}>
                <div className={styles.monetcontainer}>
                </div>
                <div className={styles.redcircle}>
                    <picture>
                        <img
                            src="/images/red-circle-icon.svg"
                            alt="red circle"
                        />
                    </picture>
                </div>
                <div className={styles.umbrellasticker}>
                    <picture>
                        <img
                            src="/images/umbrella-icon.svg"
                            alt="umbrella sticker"
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
    );
}

export default Experience;