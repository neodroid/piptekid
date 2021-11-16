import React from "react";
import { Box, Flex, Button, Text, Link } from "@chakra-ui/core";
import { motion } from "framer-motion";
import { NONAME } from "dns";

const BannerPKMService = () => {
  return (
    <>
      <Box
        bgImage="url('/bannerservis.jpg')"
        bgPos="center"
        bgSize="cover"
        minHeight="700px"
      >
        <Flex
          backgroundColor="rgba(6, 0, 73,0.7)"
          w="100%"
          minHeight="700px"
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
                fontSize={["44px", "54px", "72px", "72px"]}
                lineHeight={["50px", "67px", "92px", "112px"]}
              >
                PKM SERVICE
              </Text>
            </motion.div>
          </Box>
          <Flex
            width="85%"
            m="130px auto 10px"
            textAlign="center"
            flexDirection={["column", "column", "column", "row"]}
            alignSelf="center"
            justifyContent="center"
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
                    delay: 1.6,
                  },
                },
              }}
            >
              <Button
                background="rgba(196, 196, 196,0.2)"
                fontWeight="bold"
                fontSize="30px"
                textAlign="center"
                padding="25px"
                borderRadius="34px"
                color="white"
                m="20px"
                outline="none"
                w={["230px", "230px", "250px", "340px"]}
                _hover={{
                  transform: "scale(1.05)",
                }}
              >
                PKM
              </Button>
            </motion.div>

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
                    delay: 1.8,
                  },
                },
              }}
            >
              <Button
                background="rgba(196, 196, 196,0.2)"
                fontWeight="bold"
                fontSize="30px"
                textAlign="center"
                padding="25px"
                borderRadius="34px"
                color="white"
                outline="none"
                w={["230px", "230px", "250px", "350px"]}
                m="20px"
                _hover={{
                  transform: "scale(1.05)",
                }}
              >
                Registration
              </Button>
            </motion.div>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default BannerPKMService;
