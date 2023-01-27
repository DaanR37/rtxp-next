import Head from 'next/head';
import Accordion from "../components/Accordion";
import Accordionright from "../components/Accordionright";
import styles from '../styles/Info.module.scss';

const Info = () => {

    return (
        <>
            <Head>
                <title>RTXP - Info & FAQ</title>
                <meta name="keywords" content="info page rtxp" />
                <meta name='description' content='Frequently Asked Questions' />
                <meta property="og:title" content="Info Page RTXP" />
                <meta property="og:url" content="https://www.rtxp.nl/info" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.faqcontainer}>
                <div className={styles.accordionleft}>
                    <Accordion
                        title="Wat zijn de openingstijden?"
                        content="Maandag t/m Zondag van 10:30 tot 20:00."
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
                        content="Monday till Sunday from 10:30 to 20:00."
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