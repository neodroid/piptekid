import React from "react";
import Head from "next/head";
import ContentIEEE from "./component/IEEEComponents/ContentIEEE"
import BannerIEEE from "./component/IEEEComponents/BannerIEEE";

export default function Ieee() {
    return (
      <div>
        <Head>
          <title>IEEE | PIPTEK IME FTUI</title>
          <link rel="icon" href="/sos/piptek.png" />
        </Head>
        <BannerIEEE/>
        <ContentIEEE/>
      </div>
    );
  }