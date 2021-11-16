import { Flex, Box, Text } from "@chakra-ui/core";
import React from "react";

const FooterMKI = () => {
  return (
    <>
      <Box bgImage="url('/rotomfooter.jpg')" bgPos="center" bgSize="cover">
        <Flex
          backgroundColor="rgba(6, 0, 73,0.7)"
          w="100%"
          h="100%"
          flexDirection="column"
          padding="15px"
        >
          <Box w="85%" m="40px auto">
            <Text
              color="white"
              fontStyle="italic"
              fontWeight="300"
              fontSize="24px"
              fontFamily="thin"
              lineHeight="42px"
            >
              For Further Information
            </Text>
            <Text color="white" fontSize="20px">
              Muhammad Fairuz Mummtaz
              <br />
              ID Line: mfairuzm
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default FooterMKI;
