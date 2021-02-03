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
              VISI
            </Box></Flex>

            <Flex flexBasis="70%">
            <Text
              fontSize={["15px", "20px"]}
              letterSpacing={".1rem"}
              color="white"
              mb="5"
            >
              Mewujudkan PIPTEK IME FTUI yang 
              sinergis dalam mewadahi aspirasi warga DTE 
              dalam keilmiahan sehingga terciptanya iklim 
              berinovasi yang unggul dan bermanfaat.
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
                MISI
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
                  - Menjadikan PIPTEK sebagai 
                  wadah interaksi untuk memicu warga 
                  DTE dalam berinovasi di bidang keilmiahan.
                </Text>
                <Text
                  fontSize={["15px", "20px"]}
                  letterSpacing={".1rem"}
                  color="white"
                  my="10px"
                >
                  - Bekerja sama dengan stakeholders PIPTEK 
                  dalam menuansakan keilmiahan di DTE.
                </Text>
                <Text
                  my="10px"
                  fontSize={["15px", "20px"]}
                  letterSpacing={".1rem"}
                  color="white"
                >
                  - Meningkatkan prestasi serta 
                  apresiasi untuk menumbuhkan 
                  jiwa semangat berkarya warga DTE
                </Text>
                </Flex>
              </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Vismis;
