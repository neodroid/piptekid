import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/core";

const AboutMKI = () => {
  return (
    <>
      <Box m="40px auto" w="85%">
        <Text
          fontWeight="300"
          fontSize={["20px", "25px"]}
          lineHeight="195.19%"
          textAlign={["left", "justify"]}
        >
          Manajemen Karya Ilmiah (MKI) merupakan salah satu program kerja PIPTEK
          yang membantu mahasiswa DTE dengan memberikan pembekalan tentang
          pengetahuan IPTEK yang sesuai dengan core-competence dan memberikan
          info-info kepada warga DTE untuk siap berpartisipasi dalam macam-macam
          keilmuan semacam lomba-lomba keilmiahan. MKI tahun ini akan
          terbagi-bagi menjadi beberapa sub-proker yaitu{" "}
          <Text fontWeight="bold" display="inline">DTE Scientific League, Info Bulanan Lomba & Webinar,</Text>{" "}
          dan <Text fontWeight="bold" display="inline"> Info Keiptekan </Text>.
        </Text>
      </Box>
    </>
  );
};

export default AboutMKI;
