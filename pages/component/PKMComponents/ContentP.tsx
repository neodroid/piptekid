import React from "react";
import {
    Flex,
    Text, 
    Image,
    Box,
    Grid,
    Button
} from "@chakra-ui/core";

const ContentP = () => {
    return(
        <Flex w="100%" pt="30px" flexDirection="column">
            <Text
            as="h1"
            fontSize={["1.875rem", "2rem"]}
            letterSpacing={".1rem"}
            fontFamily="heading"
            fontWeight="bold"
            color="#060049"
            py="30px"
            pl="50px"
            >
                Poster PKM (dalam PIMNAS):
            </Text>
            <Box
                bgImage="url('/posterpkm.jpg')"
                bgPos="center"
                bgSize="cover"
                minHeight="400px"
                overflow="hidden"
            >
                <Box
                backgroundColor="rgba(6, 0, 73,0.3)"
                padding="15px"
                height="100%"
                minHeight="400px"
                >
                    <Grid 
                    templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]} 
                    gap={3} 
                    width="100%"
                    margin="20px"
                    alignItems="center"
                    justifyContent="center"
                    >
                        <Box 
                        w={["300px","300px","400px"]}
                        h="500px"
                        bgImage="url('pkmpposter.jpg')" 
                        bgSize="cover"
                        backgroundRepeat="no-repeat"
                        borderRadius="10px">
                                <Flex 
                                flexDirection="column-reverse"
                                w="100%"
                                h="100%"
                                as="h1"
                                paddingBottom="20px"
                                borderRadius="10px"
                                textAlign="center"
                                fontSize={["1.875rem", "2rem"]}
                                letterSpacing={".1rem"}
                                fontFamily="heading"
                                fontWeight="bold"
                                color="white"
                                background= "linear-gradient(357.39deg, #000000 2.63%, rgba(0, 0, 0, 0.9) 23%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 90.58%)"
                                >
                                    PKM-P (2021 menjadi PKM-R)
                                </Flex>
                        </Box>

                        <Box 
                        w={["300px","300px","400px"]} 
                        h="500px" 
                        bgImage="url('pkmtposter.jpg')" 
                        bgSize="cover"
                        backgroundRepeat="no-repeat"
                        borderRadius="10px">
                            <Flex 
                                flexDirection="column-reverse"
                                w="100%"
                                h="100%"
                                as="h1"
                                paddingBottom="20px"
                                borderRadius="10px"
                                textAlign="center"
                                fontSize={["1.875rem", "2rem"]}
                                letterSpacing={".1rem"}
                                fontFamily="heading"
                                fontWeight="bold"
                                color="white"
                                background= "linear-gradient(357.39deg, #000000 2.63%, rgba(0, 0, 0, 0.9) 23%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 90.58%)"
                                >
                                    PKM-T (2021 menjadi PKM-PI)
                                </Flex>
                        </Box>

                        <Box 
                        w={["300px","300px","400px"]} 
                        h="500px" 
                        bgImage="url('pkmmposter.jpg')"
                        bgSize="cover"
                        backgroundRepeat="no-repeat"
                        borderRadius="10px">
                            <Flex 
                                flexDirection="column-reverse"
                                w="100%"
                                h="100%"
                                as="h1"
                                paddingBottom="20px"
                                borderRadius="10px"
                                textAlign="center"
                                fontSize={["1.875rem", "2rem"]}
                                letterSpacing={".1rem"}
                                fontFamily="heading"
                                fontWeight="bold"
                                color="white"
                                background= "linear-gradient(357.39deg, #000000 2.63%, rgba(0, 0, 0, 0.9) 23%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 90.58%)"
                                >
                                    PKM-M (2021 menjadi PKM-PM)
                                </Flex>
                        </Box>
                    </Grid>

                    <Flex alignItems="center" justifyContent="center" paddingX="20px">
                        <Text
                        color="white"
                        as="i"
                        fontSize= "18px"
                        lineHeight= "20px">Sumber: PKM Center Universitas Indonesia & Pedoman PKM 2021</Text>
                    </Flex>

                </Box>
            </Box>
        </Flex>
    );
};
export default ContentP;