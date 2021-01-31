import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Link as ChakraLink,
  Link, 
  Image
} from "@chakra-ui/core";
import { motion } from "framer-motion";

const TitlePR = () => {
    return(
        <Flex w="100%" flexDirection="column">
            <Flex align="center" justify="center" mx="auto" mt={["0","0","0","-50px"]} mb="20px">
                <Image width={["300px","300px","300px","500px"]} src="pkm.jpg"/>
            </Flex>
            <Box
                bgImage="url('/pkmbaner.jpg')"
                bgPos="center"
                bgSize="cover"
                minHeight="400px"
            >
                <Flex 
                backgroundColor="rgba(6, 0, 73,0.7)"
                padding="15px"
                h="100%"
                alignItems="center"
                >
                    <Text 
                    color="white"
                    fontWeight= "300"
                    fontSize= "27px"
                    lineHeight= {["140%","140%","140%","200.19%"]}
                    padding="25px"
                    fontFamily="thin"
                    textAlign="center"
                    >
                    Program Kreativitas Mahasiswa (PKM) adalah suatu wadah yang 
                    dibentuk oleh Direktorat Jenderal Pendidikan Tinggi Kementerian Riset, 
                    Teknologi, dan Pendidikan Tinggi Republik Indonesia dalam memfasilitasi 
                    potensi yang dimiliki mahasiswa Indonesia untuk mengkaji, 
                    mengembangkan, dan menerapkan ilmu dan teknologi yang telah dipelajarinya 
                    di perkuliahan kepada masyarakat luas. Program ini merupakan 
                    penerus dari Program Karya Alternatif Mahasiswa yang dibentuk pada 
                    tahun 1997, yang lalu berganti menjadi 
                    Program Kreativitas Mahasiswa tahun 2001 demi memperluas 
                    cakupan dan mengurangi batasan bagi mahasiswa dalam berkreasi.
                    </Text>
                </Flex>
            </Box>
        </Flex>
    );
};

export default TitlePR;
