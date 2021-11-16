import React from "react";
import { Box, Flex, Text, Grid, Image } from "@chakra-ui/core";

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

const ContentMKI = () => {
  return (
    <>
      <Flex
        padding="10px 0"
        background="linear-gradient(270deg, rgba(255, 255, 255, 0), rgba(81, 77, 128, 0.5473), rgba(9, 0, 118, 1))"
        w="100%"
        my="50px"
      >
        <Text
          fontWeight="bold"
          fontStyle="italic"
          fontSize="24px"
          lineHeight="56px"
          w="75%"
          color="white"
          m="0 auto"
        >
          DTE Scientific League
        </Text>
      </Flex>
      <Box m="40px auto" w="75%">
        <Text
          fontWeight="500"
          fontSize={["20px", "25px"]}
          lineHeight="195.19%"
          textAlign={["left", "justify"]}
          fontFamily="thin"
        >
          Sub-proker MKI yang merupakan pendataan keikutsertaan mahasiswa DTE
          dalam berbagai ajang perlombaan keilmiahan yang dikemas dalam bentuk
          turnamen. Setiap bulannya akan dilakukan pendataan perlombaan melalui
          form yang disebar kepada mahasiswa DTE. Setiap triwulan, hasil
          pendataan akan diakumulasikan dan{" "}
          <Text fontWeight="bold" display="inline">
            {" "}
            3 orang mahasiswa DTE{" "}
          </Text>{" "}
          dengan poin terbanyak akan dinyatakan sebagai pemenang turnamen pada
          triwulan tersebut dan mendapatkan uang sebesar{" "}
          <Text fontWeight="bold" display="inline">
            {" "}
            Rp 200.000 Rupiah / Individu.{" "}
          </Text>
        </Text>
      </Box>
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
          <TimeMenu img="regis.png" judul="Tekan Button 'Form Pendataan'" />

          <TimeMenu
            img="worksh.png"
            judul="Isi data perlombaan yang diikuti"
            direc="row-reverse"
          />

          <TimeMenu img="compe.png" judul="Submit & Ikut lomba lagi!" />
        </Box>
      </Flex>

      <Flex
        padding="10px 0"
        background="linear-gradient(270deg, rgba(255, 255, 255, 0), rgba(81, 77, 128, 0.5473), rgba(9, 0, 118, 1))"
        w="100%"
        my="50px"
      >
        <Text
          fontWeight="bold"
          fontStyle="italic"
          fontSize="24px"
          lineHeight="56px"
          w="75%"
          color="white"
          m="0 auto"
        >
          Info Lomba & Webinar
        </Text>
      </Flex>
      <Box m="40px auto" w="75%">
        <Text
          fontWeight="500"
          fontSize={["20px", "25px"]}
          lineHeight="195.19%"
          textAlign={["left", "justify"]}
          fontFamily="thin"
        >
          Sub-proker MKI yang merupakan pemberian informasi{" "}
          <Text fontWeight="bold" display="inline">
            {" "}
            event lomba keilmiahan{" "}
          </Text>{" "}
          ataupun{" "}
          <Text fontWeight="bold" display="inline">
            {" "}
            webinar keilmiahan{" "}
          </Text>
          . Informasi dikemas dalam bentuk poster yang kemudian akan
          dipublikasikan pada{" "}
          <Text fontWeight="bold" display="inline">
            {" "}
            instagram IME FTUI 2021.{" "}
          </Text>
        </Text>
      </Box>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={3}
        alignItems="center"
        justifyContent="center"
        w="75%"
        m="0 auto"
      >
        <Image
          src="/info_1.png"
          width="450px"
          objectFit="cover"
        />
        <Image
          src="/info_2.png"
          width="450px"
          objectFit="cover"
        />
      </Grid>

      <Flex
        padding="10px 0"
        background="linear-gradient(270deg, rgba(255, 255, 255, 0), rgba(81, 77, 128, 0.5473), rgba(9, 0, 118, 1))"
        w="100%"
        my="50px"
      >
        <Text
          fontWeight="bold"
          fontStyle="italic"
          fontSize="24px"
          lineHeight="56px"
          w="75%"
          color="white"
          m="0 auto"
        >
          Info Keiptekan
        </Text>
      </Flex>
      <Box m="40px auto" w="75%">
        <Text
          fontWeight="500"
          fontSize={["20px", "25px"]}
          lineHeight="195.19%"
          textAlign={["left", "justify"]}
          fontFamily="thin"
        >
          Sub-proker MKI yang merupakan pemberian informasi mengenai{" "}
          <Text fontWeight="bold" display="inline">
            {" "}
            teknologi terkini{" "}
          </Text>{" "}
          yang sedang berkembang{" "}
          <Text fontWeight="bold" display="inline">
            {" "}
            di Indonesia{" "}
          </Text>{" "}
          maupun{" "}
          <Text fontWeight="bold" display="inline">
            {" "}
            mancanegara.{" "}
          </Text>
          Informasi dikemas dalam bentuk infografis yang kemudian akan
          dipublikasikan pada{" "}
          <Text fontWeight="bold" display="inline">
            {" "}
            instagram IME FTUI 2021.{" "}
          </Text>
        </Text>
      </Box>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={3}
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        w="75%"
        m="0 auto 50px"
      >
        <Image
          src="/keip_1.png"
          width="450px"
          objectFit="cover"
        />
        <Image
          src="/keip_2.png"
          width="450px"
          objectFit="cover"
        />
      </Grid>
    </>
  );
};

export default ContentMKI;
