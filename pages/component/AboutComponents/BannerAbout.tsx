import React from "react";
import {
    Box,
    Heading,
    Flex,
    Text,
    Button,
    Link as ChakraLink,
    Link, 
  } from "@chakra-ui/core";
import { motion } from "framer-motion";
import TitleAbout from "./TitleAbout"
import Header from "../header"

const BannerAbout = () => {
    return(
        <>
        <Header/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#060049" fill-opacity="0.7" d="M0,160L26.7,149.3C53.3,139,107,117,160,144C213.3,171,267,245,320,234.7C373.3,224,427,128,480,117.3C533.3,107,587,181,640,197.3C693.3,213,747,171,800,165.3C853.3,160,907,192,960,202.7C1013.3,213,1067,203,1120,192C1173.3,181,1227,171,1280,165.3C1333.3,160,1387,160,1413,160L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
        </svg>
        <Flex w="100%">
            <TitleAbout />
        </Flex>
        </>
    );
};
export default BannerAbout;