import React from 'react';
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
        ReactPixel.init(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID);
        ReactPixel.pageView();

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        })
      })
  }, [router.events])

  return (
    <>
      <Head>
        <title>RTXP Amsterdam</title>
        <meta name='description' content='Art experience, workplace and auction for affordable art, based in Amsterdam' />
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        {/* <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
