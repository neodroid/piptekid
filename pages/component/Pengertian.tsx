import { Flex, Heading, Box, Button, Icon, Text } from '@chakra-ui/core'
import React from 'react'



    const Pengertian = () => {
 
        return(


    <Flex justifyContent="center" alignItems="center" w="100%" bg="white">
        <Flex
            width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "1060px", // 992px upwards
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
            <Box m="5" 
             maxW={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "40%", // 992px upwards
            ]}
            justifyContent="center"
            >
                <Heading as="h1" fontSize={["1.875rem", "2rem"]} letterSpacing={".1rem"}   fontFamily="heading" fontWeight="bold"> <Text color="black"  fontFamily="heading">ABOUT US</Text ></Heading>
               
                <Text color="black" textAlign="justify" fontSize={["xs", "xl"]}   letterSpacing={".1rem"}   w="100%">Piptek IME FTUI is a division from IME FTUI which accommodates the scientific needs (competition, seminar, etc) and act as a catalyst for students of department electrical engineering, University of Indonesia</Text >
                
        </Box>
            <Box 
             width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "50%", // 992px upwards
            ]}
            >
                <img src="/BPH.png"/>
            </Box>
        </Flex>



    </Flex>


);
};



export default Pengertian;