import React from "react";
import {
    Heading,
    Flex,
    Text
} from "@chakra-ui/core";
import { motion } from "framer-motion";

const AboutPR = () => {
    return(
        <Flex alignItems="center" w="100%" bg="#CDDEEB" pt="20" flexDirection="column">
            <Flex flexDirection={["column","column","column","row"]} m="10">
                <Flex width={["100%","100%","100%","48%",]} justify="center">
                    <img src="pkmservice.png" width="400px" />
                </Flex>
                <Flex width={["100%","100%","100%","48%",]} justify="center" flexDirection="column"
                textAlign={["center","center","center","justify"]}>
                    <Heading
                        fontSize={["1.875rem", "2rem"]}
                        letterSpacing={".1rem"}
                        fontFamily="heading"
                        fontWeight="bold"
                    >
                        <Text color="#123f5e" fontFamily="heading">
                        What is PKM SERVICE
                        </Text>
                    </Heading>
                    <Text
                        color="black"
                        fontSize="x1"
                        letterSpacing={".1rem"}
                        w="100%"
                        lineHeight="1.6em"
                    >
                        Facilities for providing information, training in finding ideas and writing scientific papers, as well as assistance
                        to PIMNAS (Pekan Ilmiah Mahasiswa Nasional) in technical and administrative matters. In this program, training for
                        each type of PKM (Program Kreativitas Mahasiswa) was also held to assist students in determining their knowledge of PKM.
                    </Text>
                    <Text p="3" color="black" fontSize="x1" letterSpacing={".1rem"} fontWeight="bold">
                        <Text color="#123f5e">Date :</Text> 5 December 2020 at 13.00 WIB
                    </Text>
                </Flex>
            </Flex>
            <Flex pt="5" justify="center" flexDirection={["column","column","column","row-reverse"]}
                m="10">
                <Flex width={["100%","100%","100%","48%",]} justify="center">
                    <img src="rotom.png" width="300px"/>
                </Flex>
                <Flex width={["100%","100%","100%","48%",]} 
                justify="center" 
                flexDirection="column" 
                textAlign={["center","center","center","right"]}
                >
                    <Heading
                        fontSize={["1.875rem", "1.5rem"]}
                        letterSpacing={".1rem"}
                        fontFamily="heading"
                        fontWeight="bold"
                    >
                        <Text color="#123f5e" fontFamily="heading">
                        What is ROTOM (ELEKTRO ROAD TO OIM)
                        </Text>
                    </Heading>
                    <Text
                        color="black"
                        fontSize="x1"
                        letterSpacing={".1rem"}
                        w="100%"
                    >
                        Made training and DTE contingent networking for all kind of the competition in OIM FTUI. 
                        ROTOM is held to be able to prepare DTE FTUI students who want to participate in OIM FTUI.
                    </Text>
                    <Text p="3" color="black" fontSize="x1" letterSpacing={".1rem"} fontWeight="bold" textAlign={["center","center","center","left"]}>
                        <Text color="#123f5e">Date :</Text> 11 December 2020 - 12 December 2020
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
export default AboutPR;