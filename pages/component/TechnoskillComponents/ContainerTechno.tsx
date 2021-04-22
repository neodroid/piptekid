import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Link as ChakraLink,
  Link,
  Image,
  useToast
} from "@chakra-ui/core";
import { FramerTreeLayoutContext, motion } from "framer-motion";

const ContainerTechno = () => {
  return (
    <>
    <Box backgroundColor="rgba(2,0,73,0.8)" my="25px">
      <Flex
      p="40px"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center">
        <Text fontFamily="heading" mb="10px" color="#fff" fontSize="36px">TEMA</Text>
        <Text fontFamily="thin" color="#fff" fontSize={["24px","36px","44px","54px"]} fontWeight="450">BASIC PHYTON AND MACHINE LEARNING</Text>
      </Flex>
    </Box>

    <Flex
      color="black"
      textAlign="justify"
      fontSize="xl"
      letterSpacing={["0",".1rem"]}
      lineHeight="195%"
      w="80%"
      alignItems="center"
      justifyContent="center"
      m="5px auto"
    >
      Teknologi saat ini terus mengalami pergerakan dan perkembangan 
      yang sangat cepat untuk dapat segera menyelesaikan masalah dan 
      memudahkan pekerjaan manusia. Sistem konvensional mulai digantikan 
      oleh sistem digital dimana pekerjaan dapat dilakukan secara digital 
      dan informasi mulai didigitalisasikan. Banyak wadah teknologi digital 
      yang dapat digunakan dan penggunaannya yang mulai masif, manusia perlu 
      dapat menguasai salah satu bentuk teknologi agar dapat memudahkan 
      pekerjaan maupun tidak tertinggal oleh perkembangan teknologi.
    </Flex>

    <Box w="80%" m="50px auto">
      <img src="ContainerTechnoImage.png" width="100%"/>
    </Box>

    <Flex
      color="black"
      textAlign="justify"
      fontSize="xl"
      letterSpacing={["0",".1rem"]}
      lineHeight="195%"
      w="80%"
      alignItems="center"
      justifyContent="center"
      m="0 auto"
    ><Text>
      Technoskill 1.0 kali ini akan membawakan tema <b><em>Basic Phyton and Machine Learning </em></b> 
      dimana para peserta akan diberikan pengetahuan terkait bahasa 
      pemrograman Phyton dan sedikit pengetahuan dasar terkait penggunaan 
      <em> Machine Learning</em> menggunakan bahasa Phyton. Pelaksanaan Technoskill 
      kali akan dilakukan oleh PIPTEK IME FTUI 2021 yang bekerja sama dengan 
      ASBE UI 2021.</Text>
    </Flex>

    <Flex m="30px auto" alignItems="center" justifyContent="center">
      <Link style={{textDecoration:"none"}} href="/">
      <Image width={["95px","100px","120px","150px"]} src="/sos/piptek.png" /></Link>
      <Link style={{textDecoration:"none"}} href="/asbe">
      <Box pl="60px">
      <Image width={["95px","100px","120px","150px"]} src="asbe.png" /></Box></Link>
    </Flex>

    <Flex
    w="80%"
    alignItems="center"
    justifyContent="center"
    m="0 auto"
    flexDirection="column">
      <Box
        fontSize="2rem"
        fontWeight="normal"
        fontFamily="heading"
        color="060049"
        padding="10"
      >
      PELATIH
      </Box>

      <Flex flexDirection={["column","column","row","row"]}>
        <Link style={{textDecoration:"none"}} href="https://www.linkedin.com/in/joshfred/" isExternal>
          <Flex 
          maxW="400px" 
          m="0 auto" 
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p="20px"
          >
            <img src="Josh 1.png" width="55%"/>
            <Text 
            p="5px" 
            fontSize="24px"
            fontStyle="italic"
            >Josh Frederich</Text>
            <Text 
            p="10px" 
            fontSize="25px" 
            fontFamily="heading"
            fontStyle="italic"
            >Manager of Career and Development ASBE UI 2021</Text>
          </Flex>
        </Link>

        <Link style={{textDecoration:"none"}} href="https://www.linkedin.com/in/idahdam/" isExternal>
          <Flex 
          maxW="400px" 
          m="0 auto" 
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p="20px"
          >
            <img src="M Hadi, Tkom 1.png" width="55%"/>
            <Text 
            p="5px" 
            fontSize="24px"
            fontStyle="italic"
            >Muhammad Hadi</Text>
            <Text 
            p="10px" 
            fontSize="25px" 
            fontFamily="heading"
            fontStyle="italic"
            >Staff Ahli AKPRO IME FTUI 2021</Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
    </>
  );
};

export default ContainerTechno;