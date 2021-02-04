import React from "react";
import { 
  Box, 
  Flex, 
  Button,  
  Text,
  Link,
} from "@chakra-ui/core";
import { motion } from "framer-motion";

const BannerRotom = () => {
  return (
    <>
      <Box
        bgImage="url('/rotombanner.jpg')"
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
                              delay: 1.2,
                            },
                          },
                        }}
                      >
                        <Text
                        fontStyle= "italic"
                        fontWeight= "500"
                        fontSize= {["28px","36px","54px","60px"]}
                        lineHeight= {["40px","54px","72px","84px"]}
                        >
                        Departemen Teknik Elektro
                        </Text>
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
                        Road To OIM!
                        </Text>
                        </motion.div>
                    </Box>
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
                <Flex
                  width="85%"
                  m="130px auto 10px"
                  textAlign="center"
                  flexDirection={["column","column","row","row"]}
                  alignSelf="center">
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
                          w={["fit-content","fit-content","250px","350px"]}
                          _hover={{ 
                            transform: "scale(1.05)",
                          }}>
                            Guidebook
                        </Button>
                    </Link>

                    <Link style={{textDecoration:"none"}}>
                        <Button
                        background="rgba(196, 196, 196,0.2)"
                        fontWeight= "bold"
                        w={["230px","230px","250px","350px"]}
                        fontSize= "30px"
                        textAlign="center"
                        padding="25px"
                        borderRadius="34px"
                        color="white"
                        m="20px"
                        _hover={{ 
                            transform: "scale(1.05)",
                        }}>
                            Registration
                        </Button>
                    </Link>
                </Flex>
                </motion.div>
          </Flex>
        </Box>
    </>
  );
};

export default BannerRotom;
