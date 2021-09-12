import { Flex } from "@chakra-ui/core";

import Head from "next/head";
import React from "react";
import AboutTechno from "./component/TechnoskillComponents/AboutTechno";
import BannerTechno from "./component/TechnoskillComponents/BannerTechno";
import Header from "./component/header";
import Timeline from "./component/TechnoskillComponents/Timeline";
import ContainerTechno from "./component/TechnoskillComponents/ContainerTechno";

export default function Technoskill() {
  return (
    <div>
      <Head>
        <title>TECHNOSKILL | PIPTEK IME FTUI</title>
        <link rel="apple-touch-icon" href="/sos/piptek.png" />
          <link rel="icon" href="/sos/piptek.png" />
      </Head>
      <Header/>
      <BannerTechno />
      <AboutTechno />
      {/*<ContainerTechno/>*/}
      <Timeline />
    </div>
  );
}
