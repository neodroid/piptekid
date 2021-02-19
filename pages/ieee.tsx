import React from "react";
import Head from "next/head";
import ContentIEEE from "./component/IEEEComponents/ContentIEEE";
import BannerIEEE from "./component/IEEEComponents/BannerIEEE";
import Header from "./component/header"

export default function Ieee() {
    return (
      <div>
        <Head>
          <title>IEEE | PIPTEK IME FTUI</title>
          <link rel="apple-touch-icon" href="/sos/piptek.png" />
          <link rel="icon" href="/sos/piptek.png" />
        </Head>
        <Header/>
        <BannerIEEE/>
        <ContentIEEE/>
      </div>
    );
  }