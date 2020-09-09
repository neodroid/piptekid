import { Flex } from '@chakra-ui/core'

import Head from 'next/head'
import React from 'react'
import AboutTechno from './component/AboutTechno'
import BannerTechno from './component/BannerTechno'
import Header from './component/header'


import HomeFix from './component/Home'
import Pengertian from './component/Pengertian'

// function makeSound(){
//   var snare= new Audio("https://www.mboxdrive.com/Jingle%20PSAF.mp3")
//   snare.play();
//   console.log("play snare");
  
// // }


export default function Technoskill() {
  return (
    <div>
      <Head>
        <title>TECHNOSKILL-PIPTEK IME FTUI</title>
        <link rel="icon" href="/1 PIPTEK.png" />
      
      </Head>
      {/* <Header/> */}
     <BannerTechno/>
     <AboutTechno/>
      

      
    </div>
  )
}
