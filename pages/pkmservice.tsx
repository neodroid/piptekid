import React from "react";
import Head from "next/head";
import Header from "./component/header";
import BannerPKMService from "./component/PKMServiceComponents/BannerPKMService";
import ContentPKMService from "./component/PKMServiceComponents/ContentPKMService";
import TimelinePKMServis from "./component/PKMServiceComponents/TimelinePKMServis";

export default function Pkmservice() {
  return (
    <div>
      <Head>
        <title>PKM SERVICE | PIPTEK IME FTUI</title>
        <link rel="apple-touch-icon" href="/sos/piptek.png" />
        <link rel="icon" href="/sos/piptek.png" />
      </Head>
      <Header />
      <BannerPKMService />
      <ContentPKMService />
      <TimelinePKMServis />
    </div>
  );
}
