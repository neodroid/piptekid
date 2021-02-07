import { Flex, Heading, Box, Button, Icon, Text } from "@chakra-ui/core";
import React from "react";

const Pengertian = () => {
  return (
    <>
    <Flex 
    justifyContent="center" 
    alignItems="center" 
    w="100%" 
    bg="white"
    padding="60px 0">
      <Flex
        width={[
          "100%", // base
          "100%", // 480px upwards
          "100%", // 768px upwards
          "1160px", // 992px upwards
        ]}
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="white"
        color="#2F80ED"
        flexDirection="row"
      >
        <Box
          m={["2","2","2","5"]}
          maxW={[
            "100%", // base
            "100%", // 480px upwards
            "100%", // 768px upwards
            "40%", // 992px upwards
          ]}
          justifyContent="center"
        >
          <Heading
            as="h1"
            fontSize={["1.875rem", "2rem"]}
            letterSpacing={".1rem"}
            fontFamily="heading"
            fontWeight="bold"
            marginBottom="20px"
          >
            {" "}
            <Text 
            color="#060049" 
            fontFamily="heading"
            font-size= "48px"
            line-height= "56px"
            ml={["0","0","0","-40px"]}
            textAlign={["center","center","center","left"]}
            >
              TENTANG KAMI
            </Text>
          </Heading>

          <Text
            color="black"
            textAlign={["center","center","center","left"]}
            font-weight= "200"
            fontSize={["15px", "20px"]}
            letterSpacing={".1rem"}
            w="100%"
            marginBottom={["15px", "15px", "15px","0"]}
            lineHeight= {["22px", "22px", "22px","37px"]}
          >
            PIPTEK IME FTUI merupakan bidang yang berperan 
            sebagai <b>fasilitator</b> dan <b>katalisator</b> minat, 
            bakat, serta aspirasi warga Departemen Teknik 
            Elektro di <b>bidang keilmiahan.</b>
          </Text>
        </Box>
        <Box
          width={[
            "100%", // base
            "100%", // 480px upwards
            "100%", // 768px upwards
            "50%", // 992px upwards
          ]}
          m="2"
          marginBottom={["15px", "15px", "15px","0"]}
        >
          <video src="/PIPTEK.mp4" controls 
          style={{outline: "none", 
          border: "none", 
          borderRadius:"20px",
          }}/>
        </Box>
      </Flex>
    </Flex>
    </>
  );
};

export default Pengertian;
