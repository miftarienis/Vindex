import dynamic from 'next/dynamic'
import Head from 'next/head'

import FooterSection from '../sections/FooterSection'

const Navigation = dynamic(() => import('@/components/layout/Navigation'), { ssr: false })

export default function Layout({ children, title = null }) {
  const dev = process.env.NODE_ENV === 'development'

  return (
    <>
      <Head>
        <title>{title ? `${title} - Vindex` : 'Next Starter'}</title>
      </Head>
      <div className={`font-sans antialiased flex flex-col ${dev ? 'debug-screens' : ''}`}>
        {/* Navigation here */}
        <Navigation />

        {children}

        {/* Footer here */}
        <FooterSection />
      </div>
    </>
  )
}
