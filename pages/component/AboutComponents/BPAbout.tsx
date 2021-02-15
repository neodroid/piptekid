import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Link as ChakraLink,
  Link, 
  Image,Grid,Avatar
} from "@chakra-ui/core";
import { motion } from "framer-motion";

const TitleAbout = () => {
    return(
        <Flex w="100%" flexDirection="column">
          <Box>
            <Flex 
            padding="10px 50px" 
            my="20px" 
            background="linear-gradient(90deg, #090076 0%, rgba(81, 77, 128, 0.547297) 51.04%, rgba(255, 255, 255, 0) 100%)" 
            color="black" 
            w="100%"
            fontWeight= "bold"
            fontStyle= "italic"
            flexDirection="row-reverse"
            fontSize={["15px","25px","25px","30px"]}
            lineHeight="56px"
            >BADAN PENGURUS</Flex>
            </Box>
            <Grid 
             templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]} 
             gap={10} 
             width="80%"
             margin="20px"
             alignItems="center"
             justifyContent="center"
             m="0 auto"
            >

              <Box>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="afiya.png"
                       width="192px"
                       height="192px" 
                       borderRadius="100%"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Afiya Maritza</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf</Box>
                  </Flex>
              </Box>

              <Box>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="risky.png"
                       width="192px"
                       height="192px" 
                       borderRadius="100%"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Ahmad Risky Zachary</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf</Box>
                  </Flex>
              </Box>

              <Box>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="baihaqi.png"
                       width="192px"
                       height="192px" 
                       borderRadius="100%"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Baihaqi Hamiz</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf</Box>
                  </Flex>
              </Box>

              <Box>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="brandon.png"
                       width="192px"
                       height="192px" 
                       borderRadius="100%"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Brandon Matthew</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf</Box>
                  </Flex>
              </Box>

              <Box>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="kirana.jpg"
                       width="192px"
                       height="192px" 
                       borderRadius="100%"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Kirana Rashifa Zahra</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf</Box>
                  </Flex>
              </Box>

              <Box>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="akmal.png"
                       width="192px"
                       height="192px" 
                       borderRadius="100%"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Muhammad Akmal Zuhdi</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf</Box>
                  </Flex>
              </Box>

              <Box>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="haitsam.png"
                       width="192px"
                       height="192px" 
                       borderRadius="100%"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Muhammad Haitsam Sidqy</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf</Box>
                  </Flex>
              </Box>

              <Box>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="rafli.png"
                       width="192px"
                       height="192px" 
                       borderRadius="100%"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Muhammad Rafli Nurhidayat</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf</Box>
                  </Flex>
              </Box>

              <Box>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="noah.png"
                       width="192px"
                       height="192px" 
                       borderRadius="100%"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Noah Syanahan</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf</Box>
                  </Flex>
              </Box>

              <Box>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="annas.png"
                       width="192px"
                       height="192px" 
                       borderRadius="100%"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Rifqi Annas Albasyahri</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf</Box>
                  </Flex>
              </Box>

              <Box>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="robert.png"
                       width="192px"
                       height="192px" 
                       borderRadius="100%"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Robert Theodore</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf</Box>
                  </Flex>
              </Box>

              <Box>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="salma.jpg"
                       width="192px"
                       height="192px" 
                       borderRadius="100%"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Salma Dewi Taufiqoh</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf</Box>
                  </Flex>
              </Box>

              <Box>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="theo.jpg"
                       width="192px"
                       height="192px" 
                       borderRadius="100%"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Theonaldo Vincentius Androdi</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf</Box>
                  </Flex>
              </Box>

              <Box>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="thorik.png"
                       width="192px"
                       height="192px" 
                       borderRadius="100%"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Thoriksyah Putra</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf</Box>
                  </Flex>
              </Box>

              <Box>
                  <Flex flexDirection="column" py="50px" px="15px" alignItems="center" w="100%">
                      <Image 
                      src="tebe.png"
                       width="192px"
                       height="192px" 
                       borderRadius="100%"/>
                       <Text
                       fontStyle= "italic"
                       fontSize="20px"
                       fontWeight="400"
                       padding="10px"
                       textAlign="center">Tubagus Dylan</Text>
                       <Box
                       fontStyle= "italic"
                       borderRadius="10px 0 10px 0"
                       fontWeight="bold"
                       fontFamily="heading"
                       textAlign="center"
                       fontSize="22px"
                       >Staf</Box>
                  </Flex>
              </Box>

            </Grid>
        </Flex>
    );
};

export default TitleAbout;
