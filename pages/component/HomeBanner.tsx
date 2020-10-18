import { Flex, Heading, Box, Button, Icon, Text } from "@chakra-ui/core";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const HomeBan = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      mt="0"
      w="100%"
      bg=""
      zIndex={3}
    >
      <Box
        width={[
          "100%", // base
          "100%", // 480px upwards
          "100%", // 768px upwards
          "1060px", // 992px upwards
        ]}
        height={[
          "350px", // base
          "400px", // 480px upwards
          "600px", // 768px upwards
          "546px", // 992px upwards
        ]}
        bg=""
        bgImage="url('/jakun.png')"
        bgPos="center"
        bgSize="cover"
        rounded="lg"
        color="black"
        textAlign="center"
        bgAttachment="fixed"
      ></Box>
      <Box></Box>
    </Flex>
  );
};

export default HomeBan;
