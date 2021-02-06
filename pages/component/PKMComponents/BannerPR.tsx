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
import TitlePR from "./TitlePR"
import Header from "../header"

const BannerPR = () => {
    return(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#060049" fill-opacity="0.8" d="M0,160L34.3,149.3C68.6,139,137,117,206,112C274.3,107,343,117,411,154.7C480,192,549,256,617,250.7C685.7,245,754,171,823,133.3C891.4,96,960,96,1029,133.3C1097.1,171,1166,245,1234,245.3C1302.9,245,1371,171,1406,133.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </svg>
        <Flex w="100%">
            <TitlePR />
        </Flex>
        </>
    );
};
export default BannerPR;