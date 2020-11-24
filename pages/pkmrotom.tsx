import React from "react";
import { Flex } from "@chakra-ui/core";
import Head from "next/head";
import Header2 from "./component/header2";
import BannerPR from "./component/BannerPR";
import AboutPR from "./component/AboutPR"

export default function Technoskill() {
    return (
      <div>
        <Head>
          <title>PKM & ROTOM-PIPTEK IME FTUI</title>
          <link rel="icon" href="/1 PIPTEK.png" />
        </Head>
        <Header2 />
        <BannerPR />
        <AboutPR />
      </div>
    );
  }