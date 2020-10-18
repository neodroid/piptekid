import { Flex, Heading, Box, Button, Icon, Text } from "@chakra-ui/core";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import TitleHome from "./TitleHome";
import Header from "./header";
import HomeBan from "./HomeBanner";

const TimeMenu = (props) => (
  <Flex
    bg="white"
    mt="20"
    mb="20"
    align="center"
    justify="center"
    flexDirection={props.direc}
  >
    <Box w="wrap" bg="">
      <img width="100px" src={props.img} />{" "}
    </Box>
    <Box
      as="h1"
      fontSize="xl"
      letterSpacing={".1rem"}
      fontFamily="heading"
      fontWeight="bold"
      color="#254D69"
      bg="white"
    >
      {props.judul}
      <Text fontSize={["xs", "xl"]} letterSpacing={".1rem"} color="#254D69">
        {props.tanggal}
      </Text>
    </Box>
  </Flex>
);

const Timeline = () => {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      bgImage="url('/string.png')"
      bgPos="center"
      bgSize="cover"
      bg=""
      align="center"
      justify="center"
    >
      <Box
        as="h1"
        fontSize={["1.875rem", "2rem"]}
        letterSpacing={".1rem"}
        fontFamily="heading"
        fontWeight="bold"
        mb="5"
        color="#254D69"
        bg="white"
      >
        Timeline
      </Box>

      <Box
        bg=""
        mt={[
          "0", // base
          "0", // 480px upwards
          "5", // 768px upwards
          "5", // 992px upwards
        ]}
        width={[
          "100%", // base
          "100%", // 480px upwards
          "100%", // 768px upwards
          "50%", // 992px upwards
        ]}
        as="nav"
        textAlign="center"
        padding="1.5rem"
        color="#254D69"
      >
        <TimeMenu
          img="regis.png"
          judul="Open Registration"
          tanggal="11 September"
        />

        <TimeMenu
          img="worksh.png"
          judul="Workshop"
          tanggal="9 - 11 October"
          direc="row-reverse"
        />
        <TimeMenu
          img="compe.png"
          judul="Competition"
          tanggal="11 - 18 October"
        />
        <TimeMenu
          img="semin.png"
          judul="Seminar and Awarding"
          tanggal="31 October"
          direc="row-reverse"
        />
      </Box>
    </Flex>
  );
};

export default Timeline;
