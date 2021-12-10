import React from "react"
import { AppProps } from "next/app"
import { Fragment } from "react"
import Head from "next/head"

import "../styles/index.css"
import Layout from "../layout/Main"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <title key="title">Sorcerer College | Sorcerers Lodge for financial freedom</title>

                <meta key="description" name="description" content="Sorcerers Lodge for financial freedom" />

                <meta name="application-name" content="Sorcerer College | Sorcerers Lodge for financial freedom" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="Sorcerer College | Sorcerers Lodge for financial freedom" />

                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="theme-color" content="#3E4A94" />

                <meta key="twitter:card" name="twitter:card" content="app" />
                <meta key="twitter:title" name="twitter:title" content="Sorcerer College | Sorcerers Lodge for financial freedom" />
                <meta key="twitter:url" name="twitter:url" content="https://sorcerer.college" />

                <meta key="twitter:description" name="twitter:description" content="Sorcerers Lodge for financial freedom" />
                <meta key="twitter:image" name="twitter:image" content="https://sorcerer.college/ms-icon-310x310.png" />
                <meta key="twitter:creator" name="twitter:creator" content="@SorcererCollege" />
                <meta key="og:type" property="og:type" content="website" />
                <meta key="og:site_name" property="og:site_name" content="Sorcerer College | Sorcerers Lodge for financial freedom" />
                <meta key="og:url" property="og:url" content="https://sorcerer.college" />
                <meta key="og:image" property="og:image" content="https://sorcerer.college/ms-icon-310x310.png" />
                <meta key="og:description" property="og:description" content="Sorcerers Lodge for financial freedom" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Fragment>
    )
}

export default MyApp
