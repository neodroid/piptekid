import React from "react";
import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  Image
} from "@chakra-ui/core";
import { motion } from "framer-motion";

const TitleExercise = () => {
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
            <Flex align="center" justify="center" mx="auto" mb="40px">
                <Image width={["300px","300px","300px","600px"]} src="exercise.png"/>
            </Flex>
                </motion.div>

            <Box
                bgImage="url('/exercisebanner.jpg')"
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
                    Experimental of Electro Technical Engineering and Science
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
                    EXERCISE merupakan salah satu grup ilmiah mahasiswa jurusan Teknik Elektro dan Komputer di Universitas Indonesia. Exercise sendiri berdiri sudah lama, namun sempat dalam masa vakum atau mati selama beberapa tahun, kira-kira dari tahun 2000 hingga akhirnya diaktifkan kembali pada tahun 2008.
                    </Text>
                    </motion.div>
                </Flex>
            </Box>
        </Flex>
    );
};

export default TitleExercise;
