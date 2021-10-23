import React from "react";
import { Box, Flex, Text, } from "@chakra-ui/core";
import { motion } from "framer-motion";

const BannerEcha = () => {
  return (
    <>
      <Box
        bgImage="url('/bannerEcha.png')"
        bgPos="center"
        bgSize="cover"
        minHeight="440px"
      >
        <Flex
          backgroundColor="rgba(6, 0, 73,0.7)"
          w="100%"
          minHeight="440px"
          h="100%"
          flexDirection="column"
          padding="15px"
        >
          <Box
            m="220px auto 20px"
            w="85%"
            height="100%"
            textAlign={["center", "right"]}
            color="white"
            marginTop="auto"
          >
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
              <Text
                fontFamily="heading"
                fontStyle="normal"
                fontWeight="900"
                fontSize={["44px", "72px", "96px", "96px"]}
                lineHeight={["50px", "67px", "92px", "112px"]}
              >
                ELEKTRO CHARITY
              </Text>
            </motion.div>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default BannerEcha;
