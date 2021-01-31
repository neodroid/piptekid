import { Flex, Heading, Box, Button, Icon, Text } from "@chakra-ui/core";
import React from "react";
import TitleHome from "./TitleHome";
import Header from "./header";

const Forofor = () => {
  return (
    <Box
    w="100%"
    h="100%"
    m="0 auto"
    mt="80px">
        <Text
        as="h1"
        color= "#060049"
        fontWeight= "bold"
        fontSize= {["38px","42px","48px","56px"]}
        margin="0 auto"
        fontFamily="heading"
        textAlign="center"
        >
            MAINTANANCE
        </Text>
    </Box>
  );
}

export default Forofor