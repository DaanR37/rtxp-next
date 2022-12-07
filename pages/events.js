import styles from '../styles/Events.module.scss';

const Events = () => {
    return (
        <section className={styles.eventscontainer}>
            <div className={styles.backgroundimage} style={{
                backgroundImage: "url(/images/background-image-exp.svg)"
            }}></div>

            <div className={styles.slidercontainer}>
                <div className={styles.banner1}>
                    <picture>
                        <img
                            src="/images/events-text-banner.svg"
                            alt="text banner"
                        />
                    </picture>
                    <picture className={styles.paintingone}
                    >
                        <img
                            src="/images/events-monet.png"
                            alt="monet painting"
                        />
                    </picture>
                    <h1>Monet by <i>night</i></h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat. Ut wisi enim ad minim
                        veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat.</p>
                </div>

                <div className={styles.banner2}>
                    <picture>
                        <img
                            src="/images/events-text-banner.svg"
                            alt="text banner"
                        />
                    </picture>
                    <picture className={styles.paintingtwo}
                    >
                        <img
                            src="/images/events-monet.png"
                            alt="monet painting"
                        />
                    </picture>

                    <h1>Monet by <i>night</i></h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat. Ut wisi enim ad minim
                        veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat.</p>
                </div>

                <div className={styles.banner3}>
                    <picture>
                        <img
                            src="/images/events-text-banner.svg"
                            alt="text banner"
                        />
                    </picture>
                    <picture className={styles.paintingthree}
                    >
                        <img
                            src="/images/events-monet.png"
                            alt="monet painting"
                        />
                    </picture>

                    <h1>Monet by <i>night</i></h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat. Ut wisi enim ad minim
                        veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat.</p>
                </div>
            </div>

            <div className={styles.winesticker}>
                <picture>
                    <img
                        src="/images/events-wine.svg"
                        alt="blue cross"
                    />
                </picture>
            </div>
            <div className={styles.handsticker}>
                <picture>
                    <img
                        src="/images/events-hand.svg"
                        alt="red arrows"
                    />
                </picture>
            </div>
            {/* <div className={styles.fragilesticker}>
                <picture>
                    <img
                        src="/images/our-art-is-not-fragile.svg"
                        alt="fragile sticker"
                    />
                </picture>
            </div> */}
        </section>
    );
}

export default Events;