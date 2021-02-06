import { Flex, Heading, Box, Button, Icon, Text } from "@chakra-ui/core";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import TitleHome from "./TitleHome";
import Header from "./header";
import HomeBan from "./HomeBanner";

const HomeFix = () => {
  return (
    <Flex w="100% !important" flexDirection="column" bg="">
      <Box
        zIndex={3}
        bgImage="url('/bekron.jpg')"
        bgPos="center"
        bgSize="cover"
        // bgAttachment="fixed"
        color="black"
        textAlign="center"
        minHeight="400px"
      ><Box 
      backgroundColor="rgba(6, 0, 73,0.45)"
      padding="15px"
      zIndex={4}>
        <TitleHome />
        </Box>
      </Box>
    </Flex>
  );
};

export default HomeFix;
