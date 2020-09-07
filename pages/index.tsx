import { Flex } from '@chakra-ui/core'

import Head from 'next/head'
import React from 'react'
import Header from './component/header'


import HomeFix from './component/Home'
import Pengertian from './component/Pengertian'

// function makeSound(){
//   var snare= new Audio("https://www.mboxdrive.com/Jingle%20PSAF.mp3")
//   snare.play();
//   console.log("play snare");
  
// // }


export default function Home() {
  return (
    <div>
      <Head>
        <title>PIPTEK IME FTUI</title>
        <link rel="icon" href="/1 PIPTEK.png" />
      
      </Head>
      {/* <Header/> */}
     <HomeFix/>
     <Pengertian/>
      

      
    </div>
  )
}
