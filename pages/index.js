import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rediters!</title>
    <meta http-equiv="Refresh" content="0; url='https://crmusic.tk'" />
      </Head>

      <main>
        <Header title="Welcome to my crmusic you using www. you will Forwarding to crmusic.tk!" />
        <p className="description">
         Thanks <code>!</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
