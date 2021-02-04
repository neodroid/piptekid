import React from "react";
import { 
  Box, 
  Flex, 
  Button,  
  Image,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Link,
  Grid
} from "@chakra-ui/core";

const ContentRotom = () => {
  return (
    <>
    <Box 
    m="40px auto"
    w="85%">
        <Text
        fontWeight= "300"
        fontSize= {["20px","25px"]}
        lineHeight= "195.19%"
        textAlign={["left","justify"]}
        >
        Olimpiade Ilmiah Mahasiswa (OIM) FTUI 
        adalah kompetisi keilmiahan terbesar di Fakultas 
        Teknik Universitas Indonesia dengan tujuan menyalurkan 
        minat dan bakat dan meningkatkan iklim  keilmiahan mahasiswa Fakultas 
        Teknik Universitas Indonesia di bidang keilmiahan. 
        OIM FTUI terdiri atas 14 cabang lomba, yaitu PKM-P, PKM-K, 
        PKM-M, PKM-T, PKM-KC, PKM-GT, PKM-AI, PKM-GFK, Quiz, Debat 
        Bahasa Indonesia, Debat Bahasa Inggris, Esai, Infografis, dan 
        Persembahan Departemen.
        </Text>
    </Box>
    <Flex 
        padding="10px 50px" 
        background="linear-gradient(90deg, #090076 0%, rgba(81, 77, 128, 0.547297) 51.04%, rgba(255, 255, 255, 0) 100%)" 
        color="black" 
        w="100%"
        my="20px"
        fontWeight= "bold"
        fontStyle= "italic"
        flexDirection="row-reverse"
        fontSize={["25px","25px","25px","30px"]}
        lineHeight="56px"
        >TIMELINE
    </Flex>
    <Box
    w="100%"
    overflowX="scroll">
        <Image src="timelineoim.jpg" minWidth="1310px"/>
    </Box>
    <Flex 
        padding="10px 50px" 
        background="linear-gradient(90deg, #090076 0%, rgba(81, 77, 128, 0.547297) 51.04%, rgba(255, 255, 255, 0) 100%)" 
        color="black" 
        w="100%"
        my="30px"
        fontWeight= "bold"
        fontStyle= "italic"
        flexDirection="row-reverse"
        fontSize={["25px","25px","25px","30px"]}
        lineHeight="56px"
        >DTE Road to OIM
    </Flex>
    <Grid
    m="40px auto"
    w="85%"
    gap={10} 
    alignItems="center"
    justifyContent="center"
    templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)"]} 
    >
        <Box w="90%" m="0 auto 50px">
            <Box 
            w="100%" 
            m="0 auto"
            color="white"
            background= "#514D80"
            borderRadius= "20px 20px 0 0"
            fontWeight= "bold"
            textAlign="center"
            zIndex={3}
            fontSize= "28px"
            lineHeight= "200.19%">
                Debat Bahasa Inggris
            </Box>
            <Box 
            w="100%"
            padding="30px"
            borderRadius= "0 0 31px 31px"
            background= "rgba(202, 202, 202, 0.45)"
            fontSize= "20px"
            lineHeight= "200.19%">
                <b>Jadwal Pelatihan :</b> 
                <Text fontSize="19px">
                26 Februari 2021<br/>
                3 Maret 2021<br/>
                12 Maret 2021
                </Text>
            </Box>
        </Box>

        <Box w="90%" m="0 auto 50px">
            <Box 
            w="100%" 
            m="0 auto"
            color="white"
            background= "#514D80"
            borderRadius= "20px 20px 0 0"
            fontWeight= "bold"
            textAlign="center"
            fontSize= "28px"
            lineHeight= "200.19%">
                Debat Bahasa Indonesia
            </Box>
            <Box 
            w="100%"
            padding="30px"
            borderRadius= "0 0 31px 31px"
            background= "rgba(202, 202, 202, 0.45)"
            fontSize= "20px"
            lineHeight= "200.19%">
                <b>Jadwal Pelatihan :</b> 
                <Text fontSize="19px">
                26 Februari 2021<br/>
                3 Maret 2021<br/>
                12 Maret 2021
                </Text>
            </Box>
        </Box>

        <Box w="90%" m="0 auto 50px">
            <Box 
            w="100%" 
            m="0 auto"
            color="white"
            background= "#514D80"
            borderRadius= "20px 20px 0 0"
            fontWeight= "bold"
            textAlign="center"
            fontSize= "28px"
            lineHeight= "200.19%">
                PKM
            </Box>
            <Box 
            w="100%"
            padding="30px"
            borderRadius= "0 0 31px 31px"
            background= "rgba(202, 202, 202, 0.45)"
            fontSize= "20px"
            lineHeight= "200.19%">
                <b>Jadwal Pelatihan Pembuatan Proposal :</b> 
                <Text fontSize="19px">
                20 Februari 2021
                </Text>
                <b>Jadwal Pelatihan Presentasi :</b> 
                <Text fontSize="19px">
                7 Maret 2021
                </Text>
            </Box>
        </Box>

        <Box w="90%" m="0 auto 50px">
            <Box 
            w="100%" 
            m="0 auto"
            color="white"
            background= "#514D80"
            borderRadius= "20px 20px 0 0"
            fontWeight= "bold"
            textAlign="center"
            fontSize= "28px"
            lineHeight= "200.19%">
                Quiz
            </Box>
            <Box 
            w="100%"
            padding="30px"
            borderRadius= "0 0 31px 31px"
            background= "rgba(202, 202, 202, 0.45)"
            fontSize= "20px"
            lineHeight= "200.19%">
                <b>Jadwal Pelatihan :</b> 
                <Text fontSize="19px">
                23 Februari 2021<br/>
                4 Maret 2021<br/>
                11 Maret 2021
                </Text>
            </Box>
        </Box>

        <Box w="90%" m="0 auto 50px">
            <Box 
            w="100%" 
            m="0 auto"
            color="white"
            background= "#514D80"
            borderRadius= "20px 20px 0 0"
            fontWeight= "bold"
            textAlign="center"
            fontSize= "28px"
            lineHeight= "200.19%">
                Infografis
            </Box>
            <Box 
            w="100%"
            padding="30px"
            borderRadius= "0 0 31px 31px"
            background= "rgba(202, 202, 202, 0.45)"
            fontSize= "20px"
            lineHeight= "200.19%">
                <b>Jadwal Pelatihan :</b> 
                <Text fontSize="19px">
                sesuai kontingen
                </Text>
            </Box>
        </Box>

        <Box w="90%" m="0 auto 50px">
            <Box 
            w="100%" 
            m="0 auto"
            color="white"
            background= "#514D80"
            borderRadius= "20px 20px 0 0"
            fontWeight= "bold"
            textAlign="center"
            fontSize= "28px"
            lineHeight= "200.19%">
                Esai
            </Box>
            <Box 
            w="100%"
            padding="30px"
            borderRadius= "0 0 31px 31px"
            background= "rgba(202, 202, 202, 0.45)"
            fontSize= "20px"
            lineHeight= "200.19%">
                <b>Jadwal Pelatihan :</b> 
                <Text fontSize="19px">
                sesuai kontingen
                </Text>
            </Box>
        </Box>
    </Grid>
    <Box w={["80%","77%","50%","40%"]} m="40px auto 50px">
            <Box 
            w="100%" 
            m="0 auto"
            color="white"
            background= "#514D80"
            borderRadius= "20px 20px 0 0"
            fontWeight= "bold"
            textAlign="center"
            fontSize= "28px"
            lineHeight= "200.19%">
                PersDept
            </Box>
            <Box 
            w="100%"
            padding="30px"
            borderRadius= "0 0 31px 31px"
            background= "rgba(202, 202, 202, 0.45)"
            fontSize= "20px"
            lineHeight= "200.19%">
                <b>Jadwal Pelatihan :</b> 
                <Text fontSize="19px">
                28 Februari - 4 Maret 2021
                </Text>
            </Box>
        </Box>
        <Text 
        padding="50px"
        fontWeight= "500"
        fontSize= "20px">
            *Jadwal Pelatihan masih dapat berubah sesuai kesepakatan kontingen
        </Text>
        <Box
        bgImage="url('/rotomfooter.jpg')"
        bgPos="center"
        bgSize="cover"
        >
          <Flex 
            backgroundColor="rgba(6, 0, 73,0.7)"
            w="100%"
            h="100%"
            flexDirection="column"
            padding="15px">
                <Box 
                w="85%"
                m="40px auto"
                >
                    <Text
                    color="white"
                    fontStyle= "italic"
                    fontWeight= "300"
                    fontSize= "24px"
                    fontFamily="thin"
                    lineHeight= "42px">
                        For Further Information
                    </Text>
                    <Text
                    color="white"
                    fontSize= "20px"
                    >
                        M Arkana Y<br/>
                        No. HP: 085216523908<br/>
                        ID Line: arkana.y
                    </Text>
                </Box>
          </Flex>
        </Box>
    </>
  );
};

export default ContentRotom;
