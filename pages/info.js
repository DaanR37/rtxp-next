import React, { useState } from "react";
import Accordion from "../components/Accordion";
import Accordionright from "../components/Accordionright";
import styles from '../styles/Info.module.scss';

const Info = () => {

    return (
        <section className={styles.infocontainer}>
            <div className={styles.backgroundimage} style={{
                backgroundImage: "url(images/background-image-hp.jpg)"
            }}></div>
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
            <div className={styles.bluecrossinfo}>
                <picture>
                    <img
                        src="images/blue-cross-icon.svg"
                        alt="blue cross"
                    />
                </picture>
            </div>
            <div className={styles.purplearrows}>
                <picture>
                    <img
                        src="images/purple-arrows-icon.svg"
                        alt="purple arrows"
                    />
                </picture>
            </div>
            <div className={styles.chaticon}>
                <picture>
                    <img
                        src="images/chat-icon.svg"
                        alt="chat icon"
                    />
                </picture>
            </div>

        </section>
    )
}

export default Info;