import '../styles/globals.css'

import { Poppins } from 'next/font/google'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'

import * as gtag from '../lib/gtag'

const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <NextSeo
        openGraph={{
          type: 'website',
          locale: 'en_EN',
          url: '',
          site_name: 'Vindex Gym',
          description: 'Home of the Champions',
        }}
      />
      <div className={`${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
