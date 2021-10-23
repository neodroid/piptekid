import React from "react";
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/core";

const FooterEcha = () => {
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
              Alifya Ananda<br />
              No. HP: 081282239806
              <br />
              ID Line: alifyaananda
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default FooterEcha;
