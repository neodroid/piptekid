import React from "react";
import Head from "next/head";
import BannerASBE from "./component/ASBEComponents/BannerASBE";
import ContentASBE from "./component/ASBEComponents/ContentASBE";
import Header from "./component/header";

export default function Asbe() {
    return (
      <div>
        <Head>
          <title>ASBE | PIPTEK IME FTUI</title>
          <link rel="apple-touch-icon" href="/sos/piptek.png" />
          <link rel="icon" href="/sos/piptek.png" />
        </Head>
        <Header/>
        <BannerASBE/>
        <ContentASBE/>
      </div>
    );
  }