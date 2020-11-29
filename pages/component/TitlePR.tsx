import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Link as ChakraLink,
  Link, 
  useToast
} from "@chakra-ui/core";
import { motion } from "framer-motion";

const TitlePR = () => {
    const toast = useToast()
    return(
        <Flex w="100%" flexDirection={["column","column","column","row"]}>
            <Flex width={["100%", "100%", "100%", "45%"]} align="center" justify={["center","center","center","right"]} flexDirection="row-reverse">
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
                    }}>
                    <Box
                        mt={["10","10","10", "10",]}
                        textAlign="center"
                        padding="1.5rem"
                    >
                        <Box mb="10" fontSize="x1" color="white" fontWeight="bold"></Box>
                        <Text fontSize={["2.3rem","2.3rem","2.3rem","2.7rem"]}
                            letterSpacing={".1rem"}
                            my="5"
                            color="#123f5e"
                            fontFamily="heading">PKM SERVICE <br />
                            & <br /> ROTOM
                        </Text>
                    </Box>
                </motion.div>
            </Flex>
            <Flex width={["100%", "100%", "100%", "53%"]} align="center" justify="center">
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
                                delay: 1.8,
                                },
                            },
                        }}>
                    <Box
                        mt={["0","0","0", "10",]}
                        textAlign="center"
                        padding="1.5rem"
                    >
                        <Box mb={["0","0","0","10"]} fontSize="x1" color="white" fontWeight="bold"></Box>
                        <Text
                            color="black"
                            fontSize={["x1","x1","x2","1.4rem"]}
                            letterSpacing={".1rem"}
                            mb={["10","10","10","0"]}
                        >
                        Need a friend to study and make a project together? <br></br> Join us by push the button below.
                        </Text>
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
                                delay: 2,
                            },
                            },
                        }}
                    >
                    <Link href="https://forms.gle/xYrVPBshDU5f2N6k8">
                        <Button
                        width="200px" 
                        mb="10" 
                        mt="3" 
                        color="white" 
                        rounded="full" 
                        bg="#123f5e" 
                        boxShadow="xl" 
                        fontSize="1.2rem"
                        onClick={() =>
                            toast({
                              title: "Fill the form.",
                              description: "Thank you for joining us.",
                              status: "success",
                              duration: 1200,
                              isClosable: true,
                            })
                          }
                        >
                        {" "}
                        JOIN
                        </Button>
                    </Link>{" "}
                    </motion.div>
                    </Box>
                </motion.div>
            </Flex>
        </Flex>
    );
};

export default TitlePR;
