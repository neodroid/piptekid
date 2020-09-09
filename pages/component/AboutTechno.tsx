import { Flex, Heading, Box, Button, Icon, Text } from '@chakra-ui/core'
import React from 'react'



    const AboutTechno = () => {
 
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
                <Heading as="h1" fontSize={["1.875rem", "2rem"]} letterSpacing={".1rem"}   fontFamily="heading" fontWeight="bold"> <Text color="#254D69"  fontFamily="heading">What is Technoskill?</Text ></Heading>
               
                <Text color="black" textAlign="justify" fontSize={["xs", "xl"]}   letterSpacing={".1rem"}   w="100%">Technoskill is an event created by PIPTEK IME FTUI, Technoskill consist series of workshop, competition, and seminar for undergradute student in electrical engineering students department at University of Indonesia. This year, technoskill will bring data science to predict and analyze all data around the world. So, come join and become the next data scientist!</Text >
                
        </Box>
            <Box 
             width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "50%", // 992px upwards
            ]}
            >
                <img src="/ardui.png"/>
            </Box>
        </Flex>



    </Flex>


);
};



export default AboutTechno;