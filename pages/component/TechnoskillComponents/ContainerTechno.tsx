import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Link as ChakraLink,
  Link,
  Image,
  useToast,
} from "@chakra-ui/core";
import { FramerTreeLayoutContext, motion } from "framer-motion";

const ContainerTechno = () => {
  return (
    <>
      <Heading
        as="h1"
        fontSize={["1.875rem", "2rem"]}
        letterSpacing={".1rem"}
        fontFamily="heading"
        fontWeight="bold"
        m="10px auto"
      >
        <Text color="#254D69" fontFamily="heading" textAlign="center">
          BEKERJA SAMA DENGAN
        </Text>
      </Heading>
      <Flex m="30px auto" alignItems="center" justifyContent="center">
        <Link style={{ textDecoration: "none" }} href="/">
          <Image
            width={["60px", "60px", "60px", "110px"]}
            src="/sos/piptek.png"
          />
        </Link>
        <Link style={{ textDecoration: "none" }} href="/exercise">
          <Box ml={["30px", "40px", "50px", "60px"]}>
            <Image width={["100px", "100px", "120px", "170px"]} src="exercise.png" />
          </Box>
        </Link>
        <Link style={{ textDecoration: "none" }} href="/ieee">
          <Box ml={["30px", "40px", "50px", "60px"]}>
            <Image width={["110px", "110px", "130px", "180px"]} src="ieee.png" />
          </Box>
        </Link>
      </Flex>
    </>
  );
};

export default ContainerTechno;
