import React from "react";
import { Box, Flex, Text,} from "@chakra-ui/core";

const EventEcha = () => {
  return (
    <>
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
        ACARA
      </Flex>
      <Box width="85%" m="20px auto">
        <Text
          fontFamily="heading"
          fontStyle="normal"
          fontWeight="900"
          fontSize="35px"
          lineHeight="44px"
        >
          Grand Launching
        </Text>
        <Text
          color="black"
          fontSize="27px"
          letterSpacing={".1rem"}
          lineHeight="195.19%"
          fontWeight="300"
          w="100%"
        >
          Senin, 6 September 2021
        </Text>
        <br />
        <Text
          color="black"
          textAlign={["left","left","justify","justify"]}
          fontSize="27px"
          letterSpacing={".1rem"}
          lineHeight="195.19%"
          fontWeight="300"
          w="100%"
        >
          Grand Launching merupakan acara pembukaan sekaligus memperkenalkan
          acara yang berlangsung selama Elektro Charity 2021. Acara ini
          berisikan penjelasan rangkaian ECHA 2021 , sharing session interaktif
          dengan narasumber hebat dan keren, Charity Concert yang dimeriahkan
          oleh bintang-bintang DTE, dan games berhadiah.
        </Text>
        <br />
        <br />

        <Text
          fontFamily="heading"
          fontStyle="normal"
          fontWeight="900"
          fontSize="35px"
          lineHeight="44px"
        >
          Elektro Peduli
        </Text>
        <Text
          color="black"
          fontSize="27px"
          letterSpacing={".1rem"}
          lineHeight="195.19%"
          fontWeight="300"
          w="100%"
        >
          7 - 18 September 2021
        </Text>
        <br />
        <Text
          color="black"
          textAlign={["left","left","justify","justify"]}
          fontSize="27px"
          letterSpacing={".1rem"}
          lineHeight="195.19%"
          fontWeight="300"
          w="100%"
        >
          Elektro Peduli merupakan rangkaian mentoring disertai arahan untuk
          melakukan pengabdian masyarakat (share to care dan aksi 10k). Acara
          ini berisikan 2 kali sesi mentoring yang akan membahas tentang konsep
          pengabdian masyarakat, teknologi masyarakat serta pengarahan aksi
          pengabdian masyarakat.
        </Text>
        <br />
        <br />

        <Text
          fontFamily="heading"
          fontStyle="normal"
          fontWeight="900"
          fontSize="35px"
          lineHeight="44px"
        >
          Act to Care
        </Text>
        <Text
          color="black"
          fontSize="27px"
          letterSpacing={".1rem"}
          lineHeight="195.19%"
          fontWeight="300"
          w="100%"
        >
          Senin, 4 Oktober 2021
        </Text>
        <br />
        <Text
          color="black"
          textAlign={["left","left","justify","justify"]}
          fontSize="27px"
          letterSpacing={".1rem"}
          lineHeight="195.19%"
          fontWeight="300"
          w="100%"
        >
          Act to Care merupakan kegiatan pemilihan Duta ECHA kategori Putra dan
          Putri ECHA 2021. Acara ini akan diisi denganp emaparan gagasan ide
          pengabdian masyarakat serta penjurian oleh juri-juri yang berkompeten.
        </Text>
        <br />
        <br />

        <Text
          fontFamily="heading"
          fontStyle="normal"
          fontWeight="900"
          fontSize="35px"
          lineHeight="44px"
        >
          Main Event
        </Text>
        <Text
          color="black"
          fontSize="27px"
          letterSpacing={".1rem"}
          lineHeight="195.19%"
          fontWeight="300"
          w="100%"
        >
          9 Oktober 2021
        </Text>
        <br />
        <Text
          color="black"
          textAlign={["left","left","justify","justify"]}
          fontSize="27px"
          letterSpacing={".1rem"}
          lineHeight="195.19%"
          fontWeight="300"
          w="100%"
        >
          Main Event merupakan acara inti dari Elektro Peduli dengan memberikan
          bantuan kepada desa tujuan berupa teknologi kerakyatan dan kebutuhan
          pokok yang dapat dihadiri oleh seluruh warga DTE UI. Acara akan diisi
          dengan penyerahan bantuan teknologi kerakyatan dan kebutuhan pokok,
          penayangan proses pembuatan teknologi kerakyatan dan profil desa
          tujuan, serta acara menarik lainnya.
        </Text>
        <br />
        <br />

        <Text
          fontFamily="heading"
          fontStyle="normal"
          fontWeight="900"
          fontSize="35px"
          lineHeight="44px"
        >
          Grand Closing
        </Text>
        <Text
          color="black"
          fontSize="27px"
          letterSpacing={".1rem"}
          lineHeight="195.19%"
          fontWeight="300"
          w="100%"
        >
          Selasa, 12 Oktober
        </Text>
        <br />
        <Text
          color="black"
          textAlign={["left","left","justify","justify"]}
          fontSize="27px"
          letterSpacing={".1rem"}
          lineHeight="195.19%"
          fontWeight="300"
          w="100%"
        >
          Grand Closing merupakan acara penutupan Elektro Charity 2021 yang
          dimeriahkan oleh berbagai rangkaian acara yang menarik. Acara ini akan
          diisi dengan webinar dengan tema yang relate dengan core competence
          DTE serta pengabdian masyarakat, pengumuman Duta Kategori Pria dan
          Wanita ECHA 2021, dan games berhadiah menarik.
        </Text>
        <br />
        <br />
      </Box>
    </>
  );
};

export default EventEcha;
