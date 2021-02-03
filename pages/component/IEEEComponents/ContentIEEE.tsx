import React from "react";
import {
    Flex,
    Link,
    Box,
    Text,
    Image
  } from "@chakra-ui/core";

const ContentIEEE = () => {
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
                        Tujuan IEEE
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
                    IEEE Universitas Indonesia pada dasarnya merupakan suatu organiasi yang bergerak dan ada untuk membantu anggota-anggotanya agar lebih kompeten dan cerdas dengan diadakannya pelatihan-pelatihan keilmiahan, penyediaan database paper dari berbagai negara, lomba-lomba keilmiahan yang berstandar nasional sampai internasional, serta akses yang mudah dalam mencari infomasi mengenai Teknik Elektro maupun Komputer.
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
                    Jadi jika kamu tertarik dengan karya ilmiah, research paper, dan lomba-lomba berstandar nasional-internasional, serta ingin melatih kemampuan dalam berbahasa inggris. Inilah saat yang tepat untuk bergabung dengan IEEE!<br/>
                    1. Webinar Series<br/>
                    2. Innovation Seminar & Competition<br/>
                    3. IEEE xTreme Selection<br/>
                    4. Workshop<br/>
                    5. World Telecommunication Day with Lab Telcom University of Indonesia<br/>
                    6. IEEE Volunteers
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
                    Pencapaian IEEE
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
                    Berikut merupakan beberapa pencapaian IEEE SBUI di tahun 2020:<br/>
                    1. Menjadi urutan pertama pada kompetisi “Student Branch IEEE Indonesia Section Student Congress 2020”<br/>
                    2.  Mendapatkan predikat “The best Student Branch performance” ditahun 2020
                </Text>
                
        </Box>
        <Box
        bgImage="url('/ieeefooter.png')"
        bgPos="center"
        bgSize="cover"
        minHeight="400px"
        overflow="hidden"
        />
        </>
    );
};
export default ContentIEEE;