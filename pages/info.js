import Head from 'next/head';
import Accordion from "../components/Accordion";
import Accordionright from "../components/Accordionright";
import styles from '../styles/Info.module.scss';

const Info = (props) => {

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

            <section className={styles.infocontainer}>
                <div className={styles.faqcontainer}>
                    <div className={styles.accordionleft}>
                        <Accordion
                            title="When?"
                            content="Our grand openening will be at the 22nd of December."
                        />
                        <Accordion
                            title="Where can I get tickets?"
                            content="At the door or buy them via our website."
                        />
                        <Accordion
                            title="Minimum age?"
                            content="All ages"
                        />
                        <Accordion
                            title="Food & Drinks"
                            content="Lorem Ipsum Ballzium"
                        />
                        <Accordion
                            title="Dissability Acces"
                            content="We are situated on ground floor, therefore we are wheelchair friendly."
                        />
                        <Accordion
                            title="House Rules"
                            content="Lorem Ipsum Ballzium"
                        />
                        <Accordion
                            title="Identification"
                            content="Lorem Ipsum Ballzium"
                        />
                        <Accordion
                            title="Lost & Found"
                            content="Lorem Ipsum Ballzium"
                        />
                        <Accordion
                            title="Contact us"
                            content="Lorem Ipsum Ballzium"
                        />
                    </div>
                    <div className={styles.accordionright}>
                        <Accordionright
                            title="When?"
                            content="Our grand openening will be at the 22nd of December."
                        />
                        <Accordionright
                            title="Where can I get tickets?"
                            content="At the door or buy them via our website."
                        />
                        <Accordionright
                            title="Minimum age?"
                            content="All ages"
                        />
                        <Accordionright
                            title="Food & Drinks"
                            content="Lorem Ipsum Ballzium"
                        />
                        <Accordionright
                            title="Dissability Acces"
                            content="We are situated on ground floor, therefore we are wheelchair friendly."
                        />
                        <Accordionright
                            title="House Rules"
                            content="Lorem Ipsum Ballzium"
                        />
                        <Accordionright
                            title="Identification"
                            content="Lorem Ipsum Ballzium"
                        />
                        <Accordionright
                            title="Lost & Found"
                            content="Lorem Ipsum Ballzium"
                        />
                        <Accordionright
                            title="Contact us"
                            content="Lorem Ipsum Ballzium"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Info;