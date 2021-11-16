import React from "react";
import { Box, Grid, Text, Image, Flex } from "@chakra-ui/core";

const ContentPKMService = () => {
  return (
    <>
      <Box m="40px auto" w="85%">
        <Text
          fontWeight="300"
          fontSize={["20px", "25px"]}
          lineHeight="195.19%"
          textAlign={["left", "justify"]}
        >
          PKM Service adalah program kerja PIPTEK IME FTUI yang bertujuan untuk
          mempersiapkan mahasiswa DTE menuju Pekan Ilmiah Mahasiswa Nasional
          (PIMNAS) dan meningkatkan antusiasme mahasiswa DTE terhadap PKM. Pada
          PKM Service, akan dilaksanakan webinar bertema “PKM Insight: Membuat
          Ide Menjadi Nyata” serta terdapat sesi diskusi untuk membahas suatu
          ide yang dapat direalisasikan dalam bentuk PKM.
        </Text>
      </Box>
      <Text
        fontFamily="heading"
        fontStyle="normal"
        fontWeight="900"
        fontSize="36px"
        lineHeight="96px"
        color="#060049"
        textAlign="center"
      >
        PEMBICARA
      </Text>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={3}
        alignItems="center"
        justifyContent="center"
        w="75%"
        m="0 auto"
      >
        <Flex flexDirection="column" alignItems="center">
          <Image
            src="/nopal.jpg"
            width="200px"
            height="200px"
            objectFit="cover"
            borderRadius="100%"
          />
          <Text
            as="h1"
            fontWeight="bold"
            fontSize="20px"
            margin="10px auto 5px"
            fontFamily="thin"
            textAlign="center"
            fontStyle="italic"
          >
            Naufal Inas Fikri
          </Text>
          <Text
            as="h1"
            fontWeight="bold"
            fontSize="20px"
            margin="0 auto"
            fontFamily="heading"
            textAlign="center"
            fontStyle="italic"
          >
            Teknik Elektro 2019
          </Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <Image
            src="/syahrul.jpg"
            width="200px"
            height="200px"
            objectFit="cover"
            borderRadius="100%"
          />
          <Text
            as="h1"
            fontWeight="bold"
            fontSize="20px"
            margin="10px auto 5px"
            fontFamily="thin"
            textAlign="center"
            fontStyle="italic"
          >
            M Syahrul Gunawan
          </Text>
          <Text
            as="h1"
            fontWeight="bold"
            fontSize="20px"
            margin="0 auto"
            fontFamily="heading"
            textAlign="center"
            fontStyle="italic"
          >
            Teknik Elektro 2019
          </Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <Image
            src="/vito.jpg"
            width="200px"
            height="200px"
            objectFit="cover"
            borderRadius="100%"
          />
          <Text
            as="h1"
            fontWeight="bold"
            fontSize="20px"
            margin="10px auto 5px"
            fontFamily="thin"
            textAlign="center"
            fontStyle="italic"
          >
            Vito Louis Nathaniel
          </Text>
          <Text
            as="h1"
            fontWeight="bold"
            fontSize="20px"
            margin="0 auto"
            fontFamily="heading"
            textAlign="center"
            fontStyle="italic"
          >
            Teknik Elektro 2019
          </Text>
        </Flex>

      </Grid>
      <Text
        as="h1"
        fontWeight="bold"
        fontSize="28px"
        margin="30px auto"
        fontFamily="thin"
        textAlign="center"
      >
        Peserta PKM KC PIMNAS 34
      </Text>
    </>
  );
};

export default ContentPKMService;
