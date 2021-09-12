import { Flex, Heading, Box, Button, Image, Text } from "@chakra-ui/core";
import React from "react";

const AboutTechno = () => {
  return (
    <Flex justifyContent="center" alignItems="center" w="100%" bg="white">
      <Flex
        width="80%"
        align="center"
        justify="space-between"
        wrap="wrap"
        bg="white"
        color="#2F80ED"
        flexDirection={["column","column","column","row"]}
        my="10"
      >
        <Box
          w={["80%","80%","80%","50%"]}
          justifyContent="center"
        >
          <Heading
            as="h1"
            fontSize={["1.875rem", "2rem"]}
            letterSpacing={".1rem"}
            fontFamily="heading"
            fontWeight="bold"
            mb="10px"
          >
            <Text color="#254D69" fontFamily="heading">
              APA ITU TECHNOSKILL?
            </Text>
          </Heading>

          <Text
            color="black"
            textAlign="justify"
            fontSize="xl"
            letterSpacing={".1rem"}
            w="100%"
          >
            Technoskill merupakan sebuah acara yang dibuat 
            oleh PIPTEK IME FTUI dimana acara tersebut berupa 
            pelatihan untuk meningkatkan hardskill dan wawasan 
            ke-IPTEK-an. Technoskill tahun ini akan membawa tema 
            <em> Gains Fundamental Knowledge to Prepare Society 5.0. </em>
            yang didalamnya terdapat mikrokontroller dan IoT sebagai core
            competence Departemen Teknik Elektro. Tujuannya
            untuk memberikan keahlian yang dibutuhkan agar dapat 
            menunjang masa perkuliahan dan masa kerjanya nanti.
          </Text>
        </Box>
        <Box
          w={["80%","80%","80%","50%"]}
          m={["0 auto","0 auto","0 auto","0 0 0 auto"]}
        >
          <Image src="/introimagetechno.jpg" m={["0 auto","0 auto","0 auto","0 0 0 auto"]}/>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AboutTechno;
