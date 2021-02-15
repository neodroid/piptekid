import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Link, 
  Image,
  Grid
} from "@chakra-ui/core";
import { motion } from "framer-motion";

const TitleAbout = () => {
    return(
        <Flex w="100%" flexDirection="column">
          <Box
          bgImage="url('/tim.jpg')"
          bgPos="center"
          bgSize="cover"
          minHeight="564px"
          >
          <Flex 
            backgroundColor="rgba(6, 0, 73,0.7)"
            w="100%"
            minHeight="564px"
            h="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            padding="15px">
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
            as="h1"
            color= "white"
            fontWeight= "bold"
            fontSize= {["38px","42px","48px","60px"]}
            lineHeight= "56px"
            margin="0 auto"
            fontFamily="heading"
            textAlign="center"
            mb="40px"
            >PIPTEK</Text>
            <Text 
            as="h1"
            color= "white"
            fontWeight= "bold"
            fontSize= {["28px","32px","38px","50px"]}
            lineHeight= "56px"
            margin="0 auto"
            fontFamily="thin"
            textAlign="center"
            fontStyle="italic"
            >IME FTUI 2021</Text>
            </motion.div>
          </Flex>
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
                  delay: 1.4,
                },
              },
            }}
          >
          <Box>
            <Flex 
            padding="10px 50px" 
            background="linear-gradient(90deg, #090076 0%, rgba(81, 77, 128, 0.547297) 51.04%, rgba(255, 255, 255, 0) 100%)" 
            color="black" 
            w="100%"
            fontWeight= "bold"
            fontStyle= "italic"
            flexDirection="row-reverse"
            fontSize={["15px","25px","25px","30px"]}
            lineHeight="56px"
            >BADAN PENGURUS HARIAN</Flex>
            </Box>
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
            <Grid 
             templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]} 
             gap={10} 
             width="80%"
             alignItems="center"
             justifyContent="center"
             m="0 auto"
            >
              <Box>
                <Link href="https://www.instagram.com/arkanayudhistira/" isExternal 
                _hover={{
                  textDecoration:"none",
                  transform: "scale(1.04)"
                  }}>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="kan.png"
                       width="192px" 
                       borderRadius="full"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">M Arkana Yudhistira</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Wakil Kepala Bidang</Box>
                  </Flex>
                </Link>
              </Box>

              <Box>
              <Link href="https://www.instagram.com/fairuzmummtaz/" isExternal
              _hover={{
                textDecoration:"none",
                transform: "scale(1.04)"
                }}>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="ruz.png"
                       width="192px" 
                       borderRadius="full"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">M Fairuz Mummtaz</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Kepala Bidang</Box>
                  </Flex>
                </Link>
              </Box>

              <Box>
                <Link href="https://www.instagram.com/ryhnmanda/" isExternal
                _hover={{
                  textDecoration:"none",
                  transform: "scale(1.04)"
                  }}>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="man.png"
                       width="192px" 
                       borderRadius="full"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Rayhan Rizky Akbar A</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Wakil Kepala Bidang</Box>
                  </Flex>
                </Link>  
              </Box>

            </Grid>
            </motion.div>
            <Grid 
             templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)"]} 
             gap={10} 
             width={["80%","80%","80%","60%"]}
             alignItems="center"
             justifyContent="center"
             m="0 auto"
            >

              <Box>
                <Link href="https://www.instagram.com/" isExternal
                _hover={{
                  textDecoration:"none",
                  transform: "scale(1.04)"
                  }}>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="tor.png"
                       width="192px" 
                       borderRadius="full"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Thariq Hadyan</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf Ahli</Box>
                  </Flex>
                </Link>
              </Box>

              <Box>
              <Link href="https://www.instagram.com/alifyandk/" isExternal
              _hover={{
                textDecoration:"none",
                transform: "scale(1.04)"
                }}>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="oi.png"
                       width="192px" 
                       borderRadius="full"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Alifya Ananda K</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf Ahli</Box>
                  </Flex>
                </Link>
              </Box>

            </Grid>
        </Flex>
    );
};

export default TitleAbout;
