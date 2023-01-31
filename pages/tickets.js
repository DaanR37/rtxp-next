import Head from 'next/head'

const Tickets = () => {
    return (
        <section>
            <Head>
                <title>Reserveer je tickets online | RTXP Amsterdam</title>
                <meta name='description' content='Plan je bezoek aan RTXP en reserveer hier eenvoudig tickets. Ervaar binnenkort inspirerende studies van de grote meesterwerken in Amsterdam!' />
                <meta property="og:title" content="Reserveer je tickets online | RTXP Amsterdam" />
                <meta property="og:url" content="https://www.tickets.rtxp.nl/tickets" />
                {/* <meta name="keywords" content="tickets page rtxp" /> */}
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
        </section>
    );
}

export default Tickets;
