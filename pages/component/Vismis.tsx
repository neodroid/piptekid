import { Flex, Heading, Box, Button, Icon, Text } from '@chakra-ui/core'
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';
import TitleHome from './TitleHome';
import Header from './header';
import HomeBan from './HomeBanner';



const Vismis = () => {

    return (

        <Flex w="100%" flexDirection="column"
        bgImage="url('/vismis.png')"
        bgPos="center"
        bgSize="cover"
        bgAttachment="fixed"
        bg=""
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
                width={[
                    "100%", // base
                    "100%", // 480px upwards
                    "100%", // 768px upwards
                    "75%", // 992px upwards
                ]}
                as="nav"
                textAlign="center"
                padding="1.5rem"
                
                color="white"


            >

                    <Box
                       
                       as="h1" fontSize={["1.875rem", "2rem"]} letterSpacing={".1rem"}   fontFamily="heading" fontWeight="bold"
                        my="5"
                    >VISION</Box>
                   
                    <Text 
                    fontSize={["xs", "xl"]}   letterSpacing={".1rem"} 
                        color="white"  my="5"
                    >Creating a PIPTEK IME FTUI that is synergistic in developing DTE students' innovation capabilities who are superior in achievement.</Text>


                    <Box
                       
                       as="h1" fontSize={["1.875rem", "2rem"]} letterSpacing={".1rem"}   fontFamily="heading" fontWeight="bold"
                       my="5" mt="5"
                    >MISSION</Box>
                   
                    <Text
                    fontSize={["xs", "xl"]}   letterSpacing={".1rem"} 
                        color="white"  my="5"
                    >1. Making PIPTEK as a vessel for interaction to encourage the Department of Electrical Engineering UI students to innovate in the scientific field</Text>
                    <Text
                    fontSize={["xs", "xl"]}   letterSpacing={".1rem"} 
                        color="white"  my="5"
                    >2. Collaborating with PIPTEK stakeholders in maximizing scientific environment in the Department of Electrical Engineering UI</Text>
                    <Text  my="5"
                    fontSize={["xs", "xl"]}   letterSpacing={".1rem"} 
                        color="white"
                    >3. Increase achievement and appreciation to foster the spirit of innovation for the Department of Electrical Engineering UI Students</Text>
     
                  
        
                
            </Box>

              
          
        </Flex>




    );
};


export default Vismis;