import dynamic from 'next/dynamic'
import Head from 'next/head'

import FooterSection from '../sections/FooterSection'

const Navigation2 = dynamic(() => import('@/components/layout/Navigation2'), { ssr: false })

export default function Layout2({ children, title = null }) {
  const dev = process.env.NODE_ENV === 'development'

  return (
    <>
      <Head>
        <title>{title ? `${title} - Vindex Gym` : 'Vindex Gym'}</title>

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
