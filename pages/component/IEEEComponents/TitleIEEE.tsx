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
                <Image width={["300px","300px","300px","600px"]} src="ieee.png"/>
            </Flex>
                </motion.div>

            <Box
                bgImage="url('/ieeebanner.jpg')"
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
                    Institute of Electrical and Electronics Engineers
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
                    IEEE Student Branch Universitas Indonesia merupakan Branch pertama dari IEEE yang ada di Indonesia. Suatu kebanggaan bagi mahasiswa elektro UI untuk menjadi pioneer organisasi berkelas internasional ini. IEEE sendiri adalah suatu organisasi non-profit yang pertama kali didirikan di New York (US) pada 16 maret 1896. Tujuan dibentuknya IEEE adalah untuk menampung minat dan bakat mahasiswa dalam bidang keilmiahan serta pendidikan dalam mencapai kemajuan ilmu teknik elektro, teknik komputer, dan teknik biomedik.
                    </Text>
                    </motion.div>
                </Flex>
            </Box>
        </Flex>
    );
};

export default TitleIEEE;
