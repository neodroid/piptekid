import React from "react";
import Head from "next/head";
import BannerASBE from "./component/ASBEComponents/BannerASBE";
import ContentASBE from "./component/ASBEComponents/ContentASBE"

export default function Asbe() {
    return (
      <div>
        <Head>
          <title>ASBE | PIPTEK IME FTUI</title>
          <link rel="icon" href="/piptek.png" />
        </Head>
        <BannerASBE/>
        <ContentASBE/>
      </div>
    );
  }