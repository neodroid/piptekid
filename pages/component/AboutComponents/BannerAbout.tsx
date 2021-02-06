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
        <Flex w="100%">
            <TitleAbout />
        </Flex>
        </>
    );
};
export default BannerAbout;