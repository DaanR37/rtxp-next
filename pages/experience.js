import styles from '../styles/Experience.module.scss';

const Experience = () => {
    return (
        <section className={styles.experiencecontainer}>
            <div className={styles.backgroundimage} style={{
                backgroundImage: "url(/images/background-image-exp.jpg)"
            }}>
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
                        </p>
                    </div>
                    <div className={styles.imagecontainer}>
                        <picture>
                            <img
                                src="/images/monet.jpg"
                                alt="monet painting"
                            />
                        </picture>
                    </div>

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