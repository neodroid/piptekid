import React from "react";
import {
    Flex,
    Link,
  } from "@chakra-ui/core";
import Header from "../header";
import TitleExercise from "./TitleExercise"

const BannerExercise = () => {
    return(
        <>
        <Header/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#060049" fill-opacity="0.7" d="M0,224L18.5,213.3C36.9,203,74,181,111,186.7C147.7,192,185,224,222,240C258.5,256,295,256,332,266.7C369.2,277,406,299,443,282.7C480,267,517,213,554,165.3C590.8,117,628,75,665,80C701.5,85,738,139,775,149.3C812.3,160,849,128,886,138.7C923.1,149,960,203,997,234.7C1033.8,267,1071,277,1108,261.3C1144.6,245,1182,203,1218,170.7C1255.4,139,1292,117,1329,117.3C1366.2,117,1403,139,1422,149.3L1440,160L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path>
        </svg>
        <Flex w="100%">
            <TitleExercise/>
        </Flex>
        </>
    );
};
export default BannerExercise;