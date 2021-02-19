import React from "react";
import { Flex } from "@chakra-ui/core";
import Head from "next/head";
import BannerPR from "./component/PKMComponents/BannerPR";
import AboutPR from "./component/PKMComponents/AboutPR";
import ContentP from "./component/PKMComponents/ContentP";
import Header from "./component/header";

export default function Pkmrotom() {
    return (
      <div>
        <Head>
          <title>PKM | PIPTEK IME FTUI</title>
          <link rel="apple-touch-icon" href="/sos/piptek.png" />
          <link rel="icon" href="/sos/piptek.png" />
        </Head>
        <Header/>
        <BannerPR />
        <AboutPR />
        <ContentP/>
      </div>
    );
  }