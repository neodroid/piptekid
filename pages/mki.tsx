import React from "react";
import Head from "next/head";
import Header from "./component/header";
import BannerMKI from "./component/MKIComponents/BannerMKI";
import AboutMKI from "./component/MKIComponents/AboutMKI";
import ContentMKI from "./component/MKIComponents/ContentMKI";
import FooterMKI from "./component/MKIComponents/FooterMKI";

export default function Mki() {
  return (
    <div>
      <Head>
        <title>MKI | PIPTEK IME FTUI</title>
        <link rel="apple-touch-icon" href="/sos/piptek.png" />
        <link rel="icon" href="/sos/piptek.png" />
      </Head>
      <Header />
      <BannerMKI />
      <AboutMKI />
      <ContentMKI />
      <FooterMKI />
    </div>
  );
}
