import React from "react";
import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  Image
} from "@chakra-ui/core";
import { motion } from "framer-motion";

const TitleIEEE = () => {
    return(
        <Flex w="100%" flexDirection="column">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                    scale: 0.8,
                    opacity: 0,
                    },
                    visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 1.2,
                    },
                    },
                }}
                >
            <Flex align="center" justify="center" mx="auto" mt={["0","0","0","-50px"]} mb="20px">
                <Image width="300px" src="asbe.png"/>
            </Flex>
                </motion.div>

            <Box
                bgImage="url('/asbebanner.jpg')"
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
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                            scale: 0.8,
                            opacity: 0,
                            },
                            visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: 1.4,
                            },
                            },
                        }}
                        >
                    <Text 
                    color="white"
                    fontWeight= "500"
                    fontStyle="italic"
                    fontSize= "36px"
                    lineHeight= {["140%","140%","140%","200%"]}
                    padding="25px"
                    fontFamily="heading"
                    textAlign="center"
                    mt="15px"
                    >
                    Association Of Biomedical Engineering UI
                    </Text>
                    <Text 
                    color="white"
                    fontWeight= "300"
                    fontSize= "27px"
                    lineHeight= {["140%","140%","140%","200.19%"]}
                    padding="25px"
                    fontFamily="thin"
                    textAlign={["center","justify"]}
                    >
                    Association of Biomedical Engineering Universitas Indonesia merupakan suatu organisasi non-profit yang ada di Fakultas Teknik Universitas Indonesia yang didirikan pada tahun 2020. Organisasi ini memiliki basis program kerja pada infografis-infografis mengenai info teknik biomedis.
                    </Text>
                    </motion.div>
                </Flex>
            </Box>
        </Flex>
    );
};

export default TitleIEEE;
