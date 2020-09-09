import React from "react";
import { Box, Heading, Flex, Text, Button, Link as ChakraLink, Link,Icon } from "@chakra-ui/core";
import { motion } from 'framer-motion';


const TitleTechno = () => {

    return (


        <Flex
          
            
            w="100%"
            bg=""
            align="center"
            justify="center"

        >

            <Box
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
                    "75%", // 992px upwards
                ]}
                as="nav"
                textAlign="left"
                padding="1.5rem"
                bg=""
                color="white"


            ><motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.4
                    }
                },
            }}>
                <Flex  align="center"
            ><img width="100px" src="1 PIPTEK.png"/></Flex></motion.div>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.6
                    }
                },
            }}>
             <Box
                        mb="10"
                        fontSize="xl"
                        color="white"
                        fontWeight="bold"
                    >PIPTEK IME FTUI</Box></motion.div>

                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 1
                        }
                    },
                }}>
                    <Box
                       
                        fontSize= "3rem"
                        fontWeight="bold"
                        fontFamily="heading"
                        color="white"
                        
                    >TECHNOSKILL 2.0</Box>
                     </motion.div>
                     <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 1.4
                        }
                    },
                }}>
                    <Box
                    as="i"
                        fontSize={"xl"}
                        color="white"
                    >Forecasting in the era of Data</Box>
         </motion.div>
         <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 1.6
                        }
                    },
                }}>
                    <Box
                        mt="20"
                        fontSize="xl"
                        color="white"
                        fontWeight="bold"
                    >WORKSHOP - SEMINAR - COMPETITION</Box>
         </motion.div>
         <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 1.8
                        }
                    },
                }}>
                <Button width="200px" mb="10" mt="5" color="#254D69" rounded="full" mx="2" variant="solid"> REGISTER</Button> 
                <Button width="200px" mb="10" mt="5" color="white" rounded="full" bg="#254D69" mx="2" variant="solid" borderWidth="2px" borderColor="white"> GUIDEBOOK</Button></motion.div>
            </Box>

        </Flex>

    );
};

export default TitleTechno;


{/* <Icon ml="3" name="chevron-right" /> */}