import { Flex, Heading, Box, Button, Icon, Text } from "@chakra-ui/core";
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
        my="10"
      >
        <Box
          maxW="100%"
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
            {" "}
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
            <em> Basic Phyton</em> and <em>Machine Learning </em> 
            untuk memberikan keahlian yang dibutuhkan agar dapat 
            menunjang masa perkuliahan dan masa kerjanya nanti.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AboutTechno;
