import dynamic from 'next/dynamic'
import Head from 'next/head'

import FooterSection from '../sections/FooterSection'

const Navigation2 = dynamic(() => import('@/components/layout/Navigation2'), { ssr: false })

export default function Layout2({ children, title = null }) {
  const dev = process.env.NODE_ENV === 'development'

  return (
    <>
      <Head>
        <title>{title ? `${title} - Vindex` : 'Vindex Gym'}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />

        {/* Favicons */}
      </Head>
      <div className={`font-sans antialiased flex flex-col ${dev ? 'debug-screens' : ''}`}>
        {/* Navigation here */}
        <Navigation2 />

        {children}

        {/* Footer here */}
        <FooterSection />
      </div>
    </>
  )
}
