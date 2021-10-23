import React from "react";
import Head from "next/head";
import Header from "./component/header";
import BannerEcha from "./component/EchaComponents/BannerEcha";
import AboutEcha from "./component/EchaComponents/AboutEcha";
import EventEcha from "./component/EchaComponents/EventEcha";
import FooterEcha from "./component/EchaComponents/FooterEcha";

export default function Echa() {
  return (
    <div>
      <Head>
        <title>ECHA | PIPTEK IME FTUI</title>
        <link rel="apple-touch-icon" href="/sos/piptek.png" />
        <link rel="icon" href="/sos/piptek.png" />
      </Head>
      <Header />
      <BannerEcha />
      <AboutEcha />
      <EventEcha />
      <FooterEcha />
    </div>
  );
}
