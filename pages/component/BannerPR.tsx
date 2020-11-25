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

const BannerPR = () => {
    return(
        <Flex w="100%" 
        zIndex={3}
        bg="" bgImage="url('/pkmrotombg.png')" bgPos="center" bgSize="cover" pt="10" minH={["0", "0", "500px", "650px", ]}>
            <TitlePR />
        </Flex>
    );
};
export default BannerPR;