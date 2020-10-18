import { Flex, Heading, Box, Button, Icon, Text } from "@chakra-ui/core";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import TitleHome from "./TitleHome";
import Header from "./header";
import HomeBan from "./HomeBanner";
import TitleTechno from "./TitleTechno";

const BannerTechno = () => {
  return (
    <Flex w="100%" flexDirection="column" pt="10" bg="">
      <Box
        zIndex={3}
        bg=""
        bgImage="url('/bekrontechno.png')"
        bgPos="center"
        bgSize="cover"
        // bgAttachment="fixed"
        color="black"
        textAlign="center"
      >
        <TitleTechno />
        {/* <HomeBan /> */}
      </Box>
    </Flex>
  );
};

export default BannerTechno;
