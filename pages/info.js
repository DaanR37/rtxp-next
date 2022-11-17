import React, { useState } from "react";
import Accordion from "../components/Accordion";
import Accordionright from "../components/Accordionright";

const Info = () => {

    return (
        <section id="info-container">
            <div className="background-image-info" style={{
                backgroundImage: "url(images/background-image-hp.jpg)"
            }}>
                <div className="faq-container">
                    <div className="accordion-left">
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
                    <div className="accordion-right">
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
                <div className="blue-cross-info">
                    <picture>
                        <img
                            src="images/blue-cross-icon.svg"
                            alt="blue cross"
                        />
                    </picture>
                </div>
                <div className="purple-arrows">
                    <picture>
                        <img
                            src="images/purple-arrows-icon.svg"
                            alt="purple arrows"
                        />
                    </picture>
                </div>
                <div className="chat-icon">
                    <picture>
                        <img
                            src="images/chat-icon.svg"
                            alt="chat icon"
                        />
                    </picture>
                </div>
            </div>
        </section>
    )
}

export default Info;