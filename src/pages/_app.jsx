import '@/styles/globals.css'
import Layout from'../components/layout'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect( () => {
    import('bootstrap/dist/css/bootstrap.css');
  }, [])
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
