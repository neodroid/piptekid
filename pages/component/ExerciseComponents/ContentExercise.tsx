import React from "react";
import {
    Flex,
    Link,
    Box,
    Text,
    Image
  } from "@chakra-ui/core";

const ContentExercise = () => {
    return(
        <>
        <Box 
        w="80%"
        m="50px auto"
        >
            <Flex 
            m="55px auto 20px"
            >
                    <Flex 
                    flexBasis={["30%","30%","30%","20%"]} 
                    >
                        <Image width={["90px","100px","120px","130px"]} src="goals.png"/>
                    </Flex>
                    <Flex 
                    flexBasis={["70%","70%","70%","80%"]} 
                    flexDirection="column"
                    textAlign={["center","center","center","left"]}
                    alignSelf="center"
                    >
                        <Text
                        fontWeight= "bold"
                        fontSize= {["19px","20px","22px","24px"]} 
                        lineHeight= "28px"
                        padding="12px 0"
                        >
                        Tujuan Exercise
                        </Text>
                        </Flex>
                        </Flex>
                    <Text
                    fontWeight= "300"
                    fontSize= {["15px","16px","18px","20px"]} 
                    lineHeight= "200%"
                    textAlign="justify"
                    mb="60px"
                    >
                    Exercise sendiri didirikan dengan tujuan sebagai wadah perkumpulan mahasiswa dalam mengembangkan hobi dan penerapan ilmu mahasiswa DTE UI dalam suatu aplikasi langsung. Jika pada kuliah mahasiswa lebih banyak mendapatkan teori maka Exercise dijadikan tempat untuk menerapkannya sekaligus mengembangkan hobinya. Dengan kegiatan-kegiatan seperti itu, maka tidak heran Exercise terkenal mampu menerima proyek dari luar maupun dari dalam kampus seperti pembuatan serta perbaikan perangkat teknologi.
                    </Text>

            <Flex 
            m="55px auto 20px"
            >
                <Flex 
                flexBasis={["30%","30%","30%","20%"]} 
                >
                    <Image width={["90px","100px","120px","130px"]} src="proker.jpg"/>
                </Flex>
                <Flex 
                flexBasis={["70%","70%","70%","80%"]} 
                flexDirection="column"
                textAlign={["center","center","center","left"]}
                alignSelf="center"
                >
                    <Text
                    fontWeight= "bold"
                    fontSize= {["19px","20px","22px","24px"]} 
                    lineHeight= "28px"
                    padding="12px 0"
                    >
                    Program Kerja
                    </Text>
                    </Flex>
                    </Flex>
                <Text
                fontWeight= "300"
                fontSize= {["15px","16px","18px","20px"]} 
                lineHeight= "200%"
                textAlign="justify"
                mb="60px"
                >
                    Jika kamu tertarik dengan proyek dengan pihak eksternal, perancangan pelatihan, dan lain sebagainya. Inilah saat yang tepat untuk bergabung dengan Exercise!<br/>
                    1. E-Competition<br/>
                    2. E-Kongkow<br/>
                    3. E-News<br/>
                    4. Training<br/>
                    5. Pengerjaan Proyek<br/>
                    6. Workplace QC<br/>
                </Text>

            <Flex 
            m="55px auto 20px"
            >
                <Flex 
                flexBasis={["30%","30%","30%","20%"]} 
                >
                    <Image width={["90px","100px","120px","130px"]} src="ach.jpg"/>
                </Flex>
                <Flex 
                flexBasis={["70%","70%","70%","80%"]} 
                flexDirection="column"
                textAlign={["center","center","center","left"]}
                alignSelf="center"
                >
                    <Text
                    fontWeight= "bold"
                    fontSize= {["19px","20px","22px","24px"]} 
                    lineHeight= "28px"
                    padding="12px 0"
                    >
                    Projek Exercise
                    </Text>
                    </Flex>
                    </Flex>
                <Text
                fontWeight= "300"
                fontSize= {["15px","16px","18px","20px"]} 
                lineHeight= "200%"
                textAlign="justify"
                mb="60px"
                >
                    Berikut adalah projek yang pernah dilakukan oleh Exercise<br/>
                    1. Fintech Automation System<br/>
                    2. Electric Bike & Solar Charging Station <br/>
                    3. Microwave Imaging System <br/>
                    4. Portable Electric Suitcase <br/>
                    5. Coding Management On Medical Device
                </Text>
                
        </Box>
        <Box
        bgImage="url('/posterpkm.jpg')"
        bgPos="center"
        bgSize="cover"
        minHeight="400px"
        overflow="hidden"
        >
            <Box
                backgroundColor="rgba(6, 0, 73,0.3)"
                padding="15px"
                height="100%"
                minHeight="400px"
                />
        </Box>
        </>
    );
};
export default ContentExercise;