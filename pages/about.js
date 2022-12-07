import styles from '../styles/About.module.scss';

const About = () => {
    return (
        <section className={styles.aboutcontainer}>
            <div className={styles.backgroundimage} style={{
                backgroundImage: "url(/images/background-image-hp.svg)"
            }}></div>
            <div className={styles.googlemapcontainer}>
                <div className={styles.contactdetails}>
                    <h1>about</h1>
                    <h2>contact</h2>
                    <p>RTXP Amsterdam
                        <br />
                        Tel: 020 - 6261433
                        <br />
                        Email: info@rtxp.com
                        <br />
                        Adres gegevens:
                        <br />
                        1e Jacob van Campenstraat
                        <br />
                        59 1072 BD Amsterdam
                    </p>
                    <br />
                    <h2>bereikbaarheid</h2>
                    <p>
                        Openbaar vervoer:
                        Trams 1, 7, 19 (Halte Vijzelgracht),
                        <br />
                        lijn 24 (Halte Marie Heinekenplein)
                        <br />
                        & Metro 52 (Halte De Pijp)
                    </p>
                    <br />
                    <h2>parkeren</h2>
                    <p>
                        APCOA: Eerste van der Helststraat 6
                        1072 NV Amsterdam,
                        Parking Museumquarter
                        Nicolaas Maesstraat 2A
                        1071 RA Amsterdam,
                        Parkeergarage Albert Cuyp
                        Ruysdaelkade 93
                        1072 AM Amsterdam
                    </p>
                    <br />
                    <h2>fiets</h2>
                    <p>
                        Aan de voorzijde, verderop in de straat
                        en aan de overkant op het Marie Heinekenplein
                        zijn meerdere fietsenrekken om je fiets aan
                        te bevestigen.
                    </p>
                </div>
                <div className={styles.locationmap}>
                    <picture>
                        <img
                            src="images/location-map.svg"
                            alt="location map"
                        />
                    </picture>
                </div>
            </div>

            <div className={styles.pinkarrowsicon}>
                <picture>
                    <img
                        src="images/pink-arrows-icon.svg"
                        alt="pink arrows icon"
                    />
                </picture>
            </div>
            <div className={styles.greencrossicon}>
                <picture>
                    <img
                        src="images/green-cross-icon.svg"
                        alt="green cross icon"
                    />
                </picture>
            </div>
            {/* <div className={styles.fragilestickerabout}>
                <picture>
                    <img
                        src="images/our-art-is-not-fragile.svg"
                        alt="fragile sticker"
                    />
                </picture>
            </div> */}
        </section>
    );
}

export default About;