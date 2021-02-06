import { Flex, Heading, Box, Button, Icon, Text } from "@chakra-ui/core";
import React from "react";
import TitleTechno from "./TitleTechno";
import Header from "../header"

const BannerTechno = () => {
  return (
    <Flex w="100%" flexDirection="column" bg="">
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
