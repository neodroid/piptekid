import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/core";

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

const ContentRotom = () => {
  return (
    <>
      <Box m="40px auto" w="85%">
        <Text
          fontWeight="300"
          fontSize={["20px", "25px"]}
          lineHeight="195.19%"
          textAlign={["left", "justify"]}
        >
          Olimpiade Ilmiah Mahasiswa (OIM) FTUI adalah kompetisi keilmiahan
          terbesar di Fakultas Teknik yang terdiri atas 14 cabang lomba, yaitu
          PKM-P, PKM-K, PKM-M, PKM-T, PKM-KC, PKM-GT, PKM-AI, PKM-GFK, Quiz,
          Debat Bahasa Indonesia, Debat Bahasa Inggris, Esai, Infografis, dan
          Persembahan Departemen. Elektro Road to OIM FTUI (ROTOM) 2.0 merupakan
          program kerja PIPTEK IME FTUI yang bertujuan untuk mencerdaskan dan
          melatih mahasiswa DTE agar siap untuk menghadapi OIM FTUI 2022. ROTOM
          2.0 terdiri atas pelatihan 3 cabang lomba non-PKM yaitu Quiz, Debat
          Bahasa Indonesia dan Debat Bahasa Inggris.
        </Text>
      </Box>
      <Flex
        padding="10px 50px"
        background="linear-gradient(90deg, #090076 0%, rgba(81, 77, 128, 0.547297) 51.04%, rgba(255, 255, 255, 0) 100%)"
        color="black"
        w="100%"
        my="50px"
        fontWeight="bold"
        fontStyle="italic"
        flexDirection="row-reverse"
        fontSize={["25px", "25px", "25px", "30px"]}
        lineHeight="56px"
      >
        TIMELINE
      </Flex>
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
            tanggal="18 November 2021"
          />

          <TimeMenu
            img="worksh.png"
            judul="Briefing"
            tanggal="7-8 Desember 2021"
            direc="row-reverse"
          />

          <TimeMenu img="compe.png" judul="Quiz" tanggal="9 Desember 2021" />
          <TimeMenu
            img="compe.png"
            judul="Debat"
            tanggal="10 Desember 2021"
            direc="row-reverse"
          />
        </Box>
      </Flex>
      <Box bgImage="url('/rotomfooter.jpg')" bgPos="center" bgSize="cover" minH="300px">
        <Flex
          backgroundColor="rgba(6, 0, 73,0.7)"
          w="100%"
          h="100%"
          flexDirection="column"
          minH="300px"
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
              Baihaqi Hamiz
              <br />
              ID Line: baihaqihamiz_
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ContentRotom;
