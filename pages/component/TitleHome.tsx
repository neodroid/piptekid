import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Link as ChakraLink,
  Link,
  Icon,
  useToast
} from "@chakra-ui/core";
import { motion } from "framer-motion";

const TitleHome = () => {
  const toast = useToast()
  return (
    <Flex
      w="100%"
      align="center"
      justify="center"
      mb={[
        "5", // base
        "5", // 480px upwards
        "20", // 768px upwards
        "20", // 992px upwards
      ]}
      height="fit-content"
      mt="20px;"
    >
      <Box
        mt={[
          "0", // base
          "0", // 480px upwards
          "5", // 768px upwards
          "5", // 992px upwards
        ]}
        width={[
          "100%", // base
          "100%", // 480px upwards
          "100%", // 768px upwards
          "75%", // 992px upwards
        ]}
        as="nav"
        textAlign="center"
        padding="1.5rem"
        bg=""
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
                delay: 0.4,
              },
            },
          }}
        >
          <Flex align="center" justify="center" mt="10">
            <img width="119px" src="ime.png" />
            <Box padding="10px">
            <img width="119px" src="/sos/piptek.png" /></Box>
          </Flex>
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
                delay: 0.6,
              },
            },
          }}
        >
          <Box 
          mt="2" 
          color="white" 
          fontSize="24px"
          fontFamily="thin"
          fontWeight="100"
          lineHeight="28px">
            PIPTEK IME FTUI 2021
          </Box>
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
                delay: 1,
              },
            },
          }}
        >
          <Box
            fontSize={[
              "2rem", // base
              "2rem", // 480px upwards
              "3rem", // 768px upwards
              "4.5rem", // 992px upwards
            ]}
            fontWeight="normal"
            fontFamily="heading"
            color="white"
            padding="10"
          >
            SELAMAT DATANG
          </Box>
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
                delay: 1.4,
              },
            },
          }}
        >
          <Box fontSize="24px" color="white" fontFamily="thin">
          Tekan Tombol di bawah untuk mengetahui program yang sedang dijalankan
          </Box>
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
                delay: 1.6,
              },
            },
          }}
        >
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
          <Link style={{textDecoration:"none"}} href="/rotom">
            <Button
            as="a"
            backgroundColor="rgba(30, 113, 131,0.8)"
            width="270px" 
            mt="5" 
            color="white" 
            borderRadius="15px"
            transition="0.5s all ease"
            _hover={{ 
              transform: "scale(1.2)",
            }}
            onClick={() =>
              toast({
                title: "ROAD TO OIM",
                description: "Gains Fundamental Knowledge to Prepare Society 5.0.",
                status: "success",
                duration: 2500,
                isClosable: true,
              })
            }
            >
              {" "}
              TEKAN!
            </Button>
          </Link>{" "}
        </motion.div>
      </Box>
    </Flex>
  );
};

export default TitleHome;