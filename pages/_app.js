import Head from 'next/head'
import Layout from '../components/Layout'
import { createGlobalStyle } from 'styled-components'
import { StateContext } from "../context/StateContext"

export const GlobalStyle = createGlobalStyle`
  * 
    {
    font-family: "Public Sans", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

function MyApp({ Component, pageProps, ...appProps }) {

  return  ( 
    <>

        <Head>
          <title></title>
        </Head>

        <GlobalStyle />

          <StateContext>
            <Layout appProps={appProps}>
              <Component {...pageProps} />
            </Layout>
          </StateContext>

    </>
  )
  }


export default MyApp

