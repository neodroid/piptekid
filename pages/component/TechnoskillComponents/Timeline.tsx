import { Flex, Heading, Box, Button, Icon, Text } from "@chakra-ui/core";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import TitleHome from "../TitleHome";
import Header from "../header";
import HomeBan from "../HomeBanner";

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
    <Flex
    flexDirection="column">
      <Box
        as="h1"
        fontSize="xl"
        letterSpacing={".1rem"}
        fontFamily="heading"
        fontWeight="900"
        bg="white"
        fontStyle="italic"
      >
        {props.judul}
      </Box>
      <Text fontSize={["xs", "xl"]} letterSpacing={".1rem"} fontStyle="italic">
        {props.tanggal}
      </Text>
    </Flex>
  </Flex>
);

const Timeline = () => {
  return (
    <>
    <Flex 
      padding="10px 50px" 
      my="20px" 
      background="linear-gradient(90deg, #090076 0%, rgba(81, 77, 128, 0.547297) 51.04%, rgba(255, 255, 255, 0) 100%)" 
      color="black" 
      w="100%"
      fontWeight= "bold"
      fontStyle= "italic"
      flexDirection="row-reverse"
      fontSize={["15px","25px","25px","30px"]}
      lineHeight="56px"
    >TIMELINE</Flex>
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
      >
        <TimeMenu
          img="regis.png"
          judul="Open Registration"
          tanggal="23 April 2021"
        />

        <TimeMenu
          img="worksh.png"
          judul="Workshop"
          tanggal="30 April,1 - 2 Mei 2021"
          direc="row-reverse"
        />
        <TimeMenu
          img="compe.png"
          judul="Competition"
          tanggal="2 Mei 2021"
        />
      </Box>
    </Flex>
    <Box
        bgImage="url('/rotomfooter.jpg')"
        bgPos="center"
        bgSize="cover"
        >
          <Flex 
            backgroundColor="rgba(6, 0, 73,0.7)"
            w="100%"
            h="100%"
            flexDirection="column"
            padding="15px">
                <Box 
                w="85%"
                m="40px auto"
                >
                    <Text
                    color="white"
                    fontStyle= "italic"
                    fontWeight= "300"
                    fontSize= "24px"
                    fontFamily="thin"
                    lineHeight= "42px">
                        For Further Information
                    </Text>
                    <Text
                    color="white"
                    fontSize= "20px"
                    >
                        Muhammad Rafli Nurhidayat<br/>
                        No. HP: 085711859735<br/>
                        ID Line: Mhmdrrfli
                    </Text>
                </Box>
          </Flex>
        </Box>
    </>
  );
};

export default Timeline;
