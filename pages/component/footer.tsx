import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Link as ChakraLink,
  Link,
} from "@chakra-ui/core";

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Footer = (props) => {
  return (
    <footer>
      <Flex w="100%" bg="#333333" align="center" justify="center">
        <Flex
          width={[
            "100%", // base
            "100%", // 480px upwards
            "100%", // 768px upwards
            "90%", // 992px upwards
          ]}
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          padding="1.5rem"
          bg="#333333"
          color="#2F80ED"
          flexDirection={[
            "column", // base
            "column", // 480px upwards
            "column", // 768px upwards
            "row", // 992px upwards
          ]}
          {...props}
        >
          <Box mr={5} bg=""
          display={[
            "none","none","none","block"
          ]}>
            <Flex align="center" mr={5}>
              <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                <Box width="85px">
                  <img src="/ime.png" />
                </Box>
              </Heading>
              <Heading
                as="h1"
                size="lg"
                ml="5"
                letterSpacing={".1rem"}
                color="white"
                fontFamily="default"
              >
                {" "}
                <Text>IME</Text>FTUI 2021
              </Heading>
            </Flex>
          </Box>

          <Box
            mr={[0,0,0,5]}
            bg=""
            textAlign={["center","center","center","right"]}
            maxW={[
              "100%", // base
              "100%", // 480px upwards
              "100%", // 768px upwards
              "75%", // 992px upwards
            ]}
          >
            <Flex align="center" mr={[0,0,0,5]}
            textAlign={["center","center","center","right"]}>
              <Text as="nav" my={8} fontFamily="default">
                <Flex 
                fontWeight="bold" 
                flexDirection={["row","row","row","row-reverse"]} 
                justifyContent={["center","center","center","right"]}>
                  <ChakraLink href="https://www.instagram.com/piptekimeftui/" isExternal>
                    <Box width="30px" h="30px" m="1">
                      <img src="sos ig.png" />
                    </Box>
                  </ChakraLink>

                  <ChakraLink href="" isExternal>
                    <Box width="30px" h="30px" m="1">
                      <img src="sos line.png" />
                    </Box>
                  </ChakraLink>

                  <ChakraLink href="https://www.youtube.com/channel/UC6fC58wiDUMAYytdEshrw2Q" isExternal>
                    <Box width="30px" h="30px" m="1">
                      <img src="sos yutub.png" />
                    </Box>
                  </ChakraLink>
                </Flex>
                <Heading
                  as="h1"
                  size="xs"
                  ml={["0","0","0","5"]}
                  letterSpacing={".1rem"}
                  color="white"
                  fontFamily="thin"
                  fontWeight="500"
                  textAlign={["center","center","center","right"]}
                >
                  &copy; 2021 PIPTEK IME FTUI <br/> All Right Reserved <br/> Designed by Shafa Tasya & PIPTEK IME FTUI
                </Heading>
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
