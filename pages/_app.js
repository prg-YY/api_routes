import Head from "next/head"
import "../styles/globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/layout.css"

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <Head>
        <title>PRG-Coding</title>
        <meta name="description" content="PRG-netxt-js" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
