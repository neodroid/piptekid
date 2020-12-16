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
      bg=""
      align="center"
      justify="center"
      mb={[
        "5", // base
        "5", // 480px upwards
        "20", // 768px upwards
        "20", // 992px upwards
      ]}
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
          <Flex align="center" justify="center">
            <img width="100px" src="1 PIPTEK.png" />
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
          <Box mb="10" fontSize="xl" color="white" fontWeight="bold">
            PIPTEK IME FTUI
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
            fontWeight="bold"
            fontFamily="heading"
            color="white"
          >
            WELCOME TO
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
          <Box as="i" fontSize={"xl"} color="white">
            PIPTEK IME 2020 WEBSITE
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
          <Box mt="20" fontSize="xl" color="white" fontWeight="bold">
            Click the button below to find out what program is running on PIPTEK IME!
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
                delay: 1.8,
              },
            },
          }}
        >
          <Link href="">
            <Button 
            width="200px" 
            mb="10" 
            mt="5" 
            color="black" 
            rounded="full"
            onClick={() =>
              toast({
                title: "Sorry :(",
                description: "There is no program running in PIPTEK IME FTUI 2020, See you in 2021!",
                status: "error",
                duration: 2000,
                isClosable: true,
              })
            }
            >
              {" "}
              PROGRAM
            </Button>
          </Link>{" "}
        </motion.div>
      </Box>
    </Flex>
  );
};

export default TitleHome;

{
  /* <Icon ml="3" name="chevron-right" /> */
}
