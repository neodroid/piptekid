import React from "react";
import { Box, Text,  Image } from "@chakra-ui/core";

const AboutEcha = () => {
  return (
    <>
      <Box width="85%" m="20px auto">
        <Text
          color="black"
          textAlign="justify"
          fontSize="27px"
          letterSpacing={".1rem"}
          lineHeight="195.19%"
          fontWeight="300"
          w="100%"
        >
          ELEKTRO CHARITY merupakan program kerja kolaborasi antara PIPTEK
          dengan PENGMAS FTUI yang bertujuan untuk meningkatkan rasa kepedulian
          mahasiswa Departemen Teknik Elektro dan melaksanakan kegiatan sosial
          yang bermanfaat bagi masyarakat dengan pengaplikasian core competence
          Departemen Teknik Elektro.
        </Text>
        <Image src="/logoEcha.png" m="30px auto"/>
      </Box>
    </>
  );
};

export default AboutEcha;
