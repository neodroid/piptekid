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
    <Flex flexDirection="column">
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
      <Heading
        as="h1"
        fontSize={["1.875rem", "2rem"]}
        letterSpacing={".1rem"}
        fontFamily="heading"
        fontWeight="bold"
        m="10px auto"
      >
        <Text color="#254D69" fontFamily="heading" textAlign="center">
          TIMELINE
        </Text>
      </Heading>
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
            judul="Open Registration (Presale)"
            tanggal="12 - 16 September 2021"
          />

          <TimeMenu
            img="regis.png"
            judul="Open Registration (Normal)"
            tanggal="17 September - 13 Oktober 2021"
            direc="row-reverse"
          />

          <TimeMenu
            img="worksh.png"
            judul="Workshop"
            tanggal="29 - 31 Oktober 2021"
          />
          <TimeMenu
            img="compe.png"
            judul="Competition"
            tanggal="1 - 6 November 2021"
            direc="row-reverse"
          />
          <TimeMenu
            img="worksh.png"
            judul="Webinar and Awarding"
            tanggal="1 - 6 November 2021"
          />
        </Box>
      </Flex>
      <Box bgImage="url('/rotomfooter.jpg')" bgPos="center" bgSize="cover">
        <Flex
          backgroundColor="rgba(6, 0, 73,0.7)"
          w="100%"
          h="100%"
          flexDirection="column"
          padding="15px"
        >
          <Box w="85%" m="40px auto">
            <Text
              color="white"
              fontStyle="italic"
              fontWeight="300"
              fontSize="24px"
              fontFamily="thin"
              lineHeight="42px"
            >
              For Further Information
            </Text>
            <Text color="white" fontSize="20px">
              Thoriksyah Putra
              <br />
              No. HP: 085716279458
              <br />
              ID Line: throiksyah_putra
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Timeline;
