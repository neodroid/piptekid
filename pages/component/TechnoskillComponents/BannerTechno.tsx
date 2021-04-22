import { 
  Flex, 
  Box, 
  Button, 
  Text,
  Link,
  useToast
} from "@chakra-ui/core";
import React from "react";
import { motion } from "framer-motion";

const BannerTechno = () => {
  const toast = useToast()
  return (
    <>
      <Box
        bgImage="url('/bekrontechno.jpg')"
        bgPos="center"
        bgSize="cover"
        minHeight="700px"
        >
          <Flex 
            backgroundColor="rgba(6, 0, 73,0.7)"
            w="100%"
            minHeight="700px"
            h="100%"
            flexDirection="column"
            padding="15px">
                    <Box 
                    m="220px auto 20px"
                    w="85%"
                    height="100%"
                    textAlign={["center","right"]}
                    color="white">
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
                        fontFamily="heading"
                        fontStyle= "normal"
                        fontWeight= "900"
                        fontSize= {["44px","54px","72px","72px"]}
                        lineHeight= {["50px","67px","92px","112px"]}
                        >
                        TECHNOSKILL 1.0
                        </Text>
                        </motion.div>
                    </Box>
                <Flex
                  width="85%"
                  m="150px auto 10px"
                  textAlign="center"
                  flexDirection={["column","column","column","row"]}
                  alignSelf="center">
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
                              delay: 1.6,
                            },
                          },
                        }}
                      >
                    <Link style={{textDecoration:"none"}}>
                        <Button
                        background="rgba(196, 196, 196,0.2)"
                          fontWeight= "bold"
                          fontSize= "30px"
                          textAlign="center"
                          padding="25px"
                          borderRadius="34px"
                          color="white"
                          m="20px"
                          outline="none"
                          w={["230px","230px","250px","350px"]}
                          _hover={{ 
                            transform: "scale(1.05)",
                          }}
                          onClick={() =>
                            toast({
                              title: "GUIDEBOOK",
                              description: "Akan datang",
                              status: "success",
                              duration: 2500,
                              isClosable: true,
                            })}
                          >
                            Guidebook
                        </Button>
                    </Link>
                    </motion.div>

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
                        }}
                      >
                    <Link style={{textDecoration:"none"}}>
                        <Button
                        background="rgba(196, 196, 196,0.2)"
                          fontWeight= "bold"
                          fontSize= "30px"
                          textAlign="center"
                          padding="25px"
                          borderRadius="34px"
                          color="white"
                          outline="none"
                          w={["230px","230px","250px","350px"]}
                          m="20px"
                          _hover={{ 
                            transform: "scale(1.05)",
                          }}
                          onClick={() =>
                            toast({
                              title: "SUBMISSION",
                              description: "Dibuka setelah workshop technoskill!",
                              status: "success",
                              duration: 2500,
                              isClosable: true,
                            })}
                          >
                            Submission
                        </Button>
                    </Link>
                    </motion.div>

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
                    <Link style={{textDecoration:"none"}} href="https://forms.gle/EVN4DfTiHTukf3ut7" isExternal>
                        <Button
                        background="rgba(196, 196, 196,0.2)"
                          fontWeight= "bold"
                          fontSize= "30px"
                          textAlign="center"
                          padding="25px"
                          borderRadius="34px"
                          color="white"
                          m="20px"
                          outline="none"
                          w={["230px","230px","250px","350px"]}
                          _hover={{ 
                            transform: "scale(1.05)",
                          }}>
                            Registration
                        </Button>
                    </Link>
                    </motion.div>
                </Flex>
          </Flex>
        </Box>
    </>
  );
};

export default BannerTechno;
