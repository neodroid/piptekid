import { Flex } from "@chakra-ui/core";

import Head from "next/head";
import React from "react";
import AboutTechno from "./component/TechnoskillComponents/AboutTechno";
import BannerTechno from "./component/TechnoskillComponents/BannerTechno";
import Header from "./component/header";

import HomeFix from "./component/Home";
import Pengertian from "./component/Pengertian";
import Timeline from "./component/Timeline";

// function makeSound(){
//   var snare= new Audio("https://www.mboxdrive.com/Jingle%20PSAF.mp3")
//   snare.play();
//   console.log("play snare");

// // }

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
      <Timeline />
    </div>
  );
}
