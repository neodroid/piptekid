import React from "react";
import { Flex } from "@chakra-ui/core";
import Head from "next/head";
import BannerPR from "./component/PKMComponents/BannerPR";
import AboutPR from "./component/PKMComponents/AboutPR";
import ContentP from "./component/PKMComponents/ContentP"

export default function Pkmrotom() {
    return (
      <div>
        <Head>
          <title>PKM | PIPTEK IME FTUI</title>
          <link rel="icon" href="/sos/piptek.png" />
        </Head>
        <BannerPR />
        <AboutPR />
        <ContentP/>
      </div>
    );
  }