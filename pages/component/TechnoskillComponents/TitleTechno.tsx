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
} from "@chakra-ui/core";
import { motion } from "framer-motion";

const TitleTechno = () => {
  return (
    <Flex w="100%" bg="" align="center" justify="center">
      <Box
        mt={[
          "0", // base
          "0", // 480px upwards
          "20", // 768px upwards
          "20", // 992px upwards
        ]}
        width={[
          "100%", // base
          "100%", // 480px upwards
          "100%", // 768px upwards
          "75%", // 992px upwards
        ]}
        as="nav"
        textAlign={[
          "center", // base
          "center", // 480px upwards
          "left", // 768px upwards
          "left", // 992px upwards
        ]}
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
          <Flex
            align="center"
            mt="10"
            justify={[
              "center", // base
              "center", // 480px upwards
              "left", // 768px upwards
              "left", // 992px upwards
            ]}
            flexDirection="row"
          >
            <Box mx="5"></Box>
          </Flex>
        </motion.div>
        <Box mb="10" fontSize="xl" color="white" fontWeight="bold"></Box>

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
            TECHNOSKILL 2.0
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
          <Box as="i" mb="10" fontSize={"xl"} color="white">
            Forecasting in the era of Data
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
          <Box mt="10" fontSize={"xl"} color="white">
            in collaboration with :
          </Box>
          <Flex
            align="center"
            mb="10"
            justify={[
              "center", // base
              "center", // 480px upwards
              "left", // 768px upwards
              "left", // 992px upwards
            ]}
            flexDirection="row"
          >
            <Box mx="5">
              <img width="60px" src="ime.png" />
            </Box>
            <Box mx="5" bg="white" rounded="full">
              <img width="75px" src="ieee.png" />
            </Box>
            <Box mx="5">
              <img width="75px" src="exercise.png" />
            </Box>
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
                delay: 1.8,
              },
            },
          }}
        >
          <Box
            mt="20"
            fontSize={[
              "md", // base
              "md", // 480px upwards
              "xl", // 768px upwards
              "xl", // 992px upwards
            ]}
            color="white"
            fontWeight="bold"
          >
            WORKSHOP - SEMINAR - COMPETITION
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
                delay: 2,
              },
            },
          }}
        >
          <Link href="https://forms.gle/Csn5YvmZ9EvyQD1b6" isExternal>
            <Button
              width={[
                "75%", // base
                "75%", // 480px upwards
                "200px", // 768px upwards
                "200px", // 992px upwards
              ]}
              mb={[
                "0", // base
                "0", // 480px upwards
                "10", // 768px upwards
                "20", // 992px upwards
              ]}
              mt="5"
              color="#254D69"
              rounded="full"
              mx="2"
              variant="solid"
            >
              {" "}
              REGISTER
            </Button>
          </Link>
          <Link href="https://forms.gle/zzM3Z3JjLZYXDzqU8" isExternal>
            <Button
              width={[
                "75%", // base
                "75%", // 480px upwards
                "200px", // 768px upwards
                "200px", // 992px upwards
              ]}
              mb={[
                "0", // base
                "0", // 480px upwards
                "10", // 768px upwards
                "20", // 992px upwards
              ]}
              mt="5"
              color="white"
              rounded="full"
              bg="#254D69"
              mx="2"
              variant="solid"
              borderWidth="2px"
              borderColor="white"
            >
              {" "}
              SUBMISSION
            </Button>
          </Link>
        </motion.div>
      </Box>
    </Flex>
  );
};

export default TitleTechno;

{
  /* <Icon ml="3" name="chevron-right" /> */
}
