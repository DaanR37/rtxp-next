import React from 'react';
import Script from 'next/script';
import * as gtag from "../lib/gtag";
import { GA_MEASUREMENT_ID } from '../lib/gtag';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Layout from '../components/Layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1361833161019573');
        ReactPixel.pageView();

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        })
      })
  }, [router.events])

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Dé Art Experience van Amsterdam | RTXP Amsterdam</title>
        <meta name='description' content='Reis aan de hand van realistische studies door vele eeuwen schilderkunst. Van de Renaissance tot de Moderne Tijd. Reserveer vandaag nog tickets!' />
        <meta property="og:title" content="Dé Art Experience van Amsterdam | RTXP Amsterdam" />
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        {/* <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
