import { Flex, Heading, Box, Button, Icon, Text } from "@chakra-ui/core";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import TitleHome from "./TitleHome";
import Header from "./header";
import HomeBan from "./HomeBanner";

const Vismis = () => {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      bgImage="url('/vismis.jpg')"
      bgPos="center"
      bgSize="cover"
      // bgAttachment="fixed"
      bg=""
      align="center"
      justify="center"
    >
      <Flex 
      backgroundColor="rgba(6, 0, 73, 0.8)"
      padding="15px"
      align="center"
      justify="center"
      >
        <Box
          bg=""
          mt={[
            "0", // base
            "0", // 480px upwards
            "5", // 768px upwards
            "5", // 992px upwards
          ]}
          mb={[
            "0", // base
            "0", // 480px upwards
            "5", // 768px upwards
            "5", // 992px upwards
          ]}
          width={[
            "100%", // base
            "100%", // 480px upwards
            "100%", // 768px upwards
            "65%", // 992px upwards
          ]}
          padding="1.6rem"
          color="white"
        >
          <Flex 
          padding="10px" 
          alignItems="center"
          flexDirection={["column","column","column","row"]}
          textAlign={["center","center","center","left"]}
          my="5"
          >
            <Flex flexBasis="30%">
            <Box
              as="h1"
              fontSize={["1.875rem", "2rem"]}
              letterSpacing={".1rem"}
              fontFamily="heading"
              fontWeight="bold"
              mt={["5","5","5","0"]}
            >
              VISION
            </Box></Flex>

            <Flex flexBasis="70%">
            <Text
              fontSize={["15px", "20px"]}
              letterSpacing={".1rem"}
              color="white"
              mb="5"
            >
              Creating a PIPTEK IME FTUI that is synergistic in accommodating 
              the aspirations of DTE student in scientific so as to create
              a climate innovating superior and useful.
            </Text></Flex>
          </Flex>

          <Flex 
          padding="10px" 
          alignItems="center"
          flexDirection={["column","column","column","row"]}
          textAlign={["center","center","center","left"]}
          >
            <Flex flexBasis="30%" >
              <Box
                as="h1"
                fontSize={["1.875rem", "2rem"]}
                letterSpacing={".1rem"}
                fontFamily="heading"
                fontWeight="bold"
                mt="5"
              >
                MISSION
              </Box>
              </Flex>

              <Flex flexBasis="70%" flexDirection="column">
                <Text
                  fontSize={["15px", "20px"]}
                  letterSpacing={".1rem"}
                  color="white"
                  mt="10px"
                  mb="5"
                >
                  - Making PIPTEK as a vessel for interaction to encourage the
                  Department of Electrical Engineering UI students to innovate in the
                  scientific field
                </Text>
                <Text
                  fontSize={["15px", "20px"]}
                  letterSpacing={".1rem"}
                  color="white"
                  my="10px"
                >
                  - Collaborating with PIPTEK stakeholders in maximizing scientific
                  environment in the Department of Electrical Engineering UI
                </Text>
                <Text
                  my="10px"
                  fontSize={["15px", "20px"]}
                  letterSpacing={".1rem"}
                  color="white"
                >
                  - Increase achievement and appreciation to foster the spirit of
                  innovation for the Department of Electrical Engineering UI Students
                </Text>
                </Flex>
              </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Vismis;
