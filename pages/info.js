import Head from 'next/head';
import Accordion from "../components/Accordion";
import Accordionright from "../components/Accordionright";
import styles from '../styles/Info.module.scss';

const Info = () => {

    return (
        <>
            <Head>
                <title>Vragen over Art Experience? Vind hier alle info | RTXP</title>
                <meta name='description' content='Openingstijden, huisregels, ticketverkoop en nog veel meer! Hier vind je alle informatie die je nodig hebt voor jouw bezoek.' />
                <meta property="og:title" content="Vragen over Art Experience? Vind hier alle info | RTXP" />
                <meta property="og:url" content="https://www.rtxp.nl/info" />
                {/* <meta name="keywords" content="info page rtxp" />
                <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <div className={styles.faqcontainer}>
                <div className={styles.accordionleft}>
                    <Accordion
                        title="Wat zijn de openingstijden?"
                        content="zondag & maandag: 12:00 - 18:00 | dinsdag & woensdag: 10:30 - 18:00 | donderdag-zaterdag: 10:30 - 19:00."
                    />
                    <Accordion
                        title="Is de Museumkaart geldig bij RTXP?"
                        content="RTXP is geen museum en daarom niet aangesloten bij deze organisatie. Wel bieden wij €7,50 korting
                        aan."
                    />
                    <Accordion
                        title="Zijn er invalidenvoorzieningen beschikbaar bij RTXP?"
                        content="Nee, er zijn op dit moment helaas geen invalidenvoorzieningen beschikbaar."
                    />
                    <Accordion
                        title="Is RTXP rolstoel vriendelijk?"
                        content="Nee, op dit moment is het niet mogelijk om RTXP met een rolstoel te bezoeken."
                    />
                    <Accordion
                        title="Zijn er zitplaatsen beschikbaar?"
                        content="Ja er zijn 40 zitplaatsen beschikbaar verspreid over de tentoonstelling."
                    />
                    <Accordion
                        title="Is er een garderobe?"
                        content="Ja er is een (onbewaakte) garderobe beschikbaar."
                    />
                    <Accordion
                        title="Mogen dieren mee naar RTXP?"
                        content="Nee, dieren zijn niet toegestaan. Met uitzondering van geleidehonden."
                    />
                    <Accordion
                        title="Kan ik wat eten of drinken bij RTXP?"
                        content="Er is een bar met koffie, thee, fris en diverse zoetigheden."
                    />
                    <Accordion
                        title="Wat is de minimale leeftijd?"
                        content="Er is geen minimale leeftijd. Kinderen tot 6 jaar mogen gratis naar binnen. Kinderen van 7 tot 12 jaar betalen €7,50."
                    />
                </div>
                <div className={styles.accordionright}>
                    <Accordionright
                        title="What are the opening hours?"
                        content="Sunday & Monday: 12:00 AM - 6:00 PM | Tuesday & Wednesday: 10:30 AM - 6:00 PM | Thursday-Saturday: 10:30 AM - 7:00 PM"
                    />
                    <Accordionright
                        title="Is the Museum Card valid at RTXP?"
                        content="RTXP is not a museum and therefore not affiliated with this organization. However, we do offer a €7.50
                        discount."
                    />
                    <Accordionright
                        title="Are disabled facilities available at RTXP?"
                        content="No, unfortunately there are no disabled facilities available at this time."
                    />
                    <Accordionright
                        title="Is RTXP wheelchair friendly?"
                        content="No, at this time it is not possible to visit RTXP with a wheelchair."
                    />
                    <Accordionright
                        title="Is there seating available?"
                        content="Yes there are 40 seats available throughout the exhibition."
                    />
                    <Accordionright
                        title="Is there a wardrobe?"
                        content="Yes there is a (unattended) wardrobe available."
                    />
                    <Accordionright
                        title="Are animals allowed to visit RTXP?"
                        content="No, animals are not allowed. With the exception of guide dogs."
                    />
                    <Accordionright
                        title="Can I get something to eat or drink at RTXP?"
                        content="There is a bar with coffee, tea, soft drinks and various sweets."
                    />
                    <Accordionright
                        title="What is the minimum age?"
                        content="There is no minimum age. Children up to 6 years may enter for free. Children between 7 and 12 years pay €7.50."
                    />
                </div>
            </div>
        </>
    )
}

export default Info;