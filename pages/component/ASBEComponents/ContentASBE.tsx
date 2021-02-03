import React from "react";
import {
    Flex,
    Link,
    Box,
    Text,
    Image
  } from "@chakra-ui/core";

const ContentASBE = () => {
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
                        Tujuan ASBE
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
                    Membentuk asosiasi Teknik Biomedik di Universitas Indonesia yang dapat memfasilitasi mahasiswa dalam mencari informasi dan pengetahuan tentang Teknik Biomedis.
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
                    Berikut merupakan beberapa kegiatan yang dilakukan oleh ASBE UI:<br/>
                    1. Memberikan informasi tentang perkembangan ilmu pengetahuan dan teknologi dari Teknik Biomedis<br/>
                    2. Memfasilitasi mahasiswa Teknik Biomedik Universitas Indonesia dalam mencari informasi tentang karir di Teknik Biomedis<br/>
                    3. Menjalin hubungan dengan mahasiswa Teknik Biomedis dari perguruan tinggi lain dan perusahaan yang terkait dengan Teknik Biomedis<br/>
                    4. Meningkatkan kompetensi mahasiswa Teknik Biomedik UI dengan training dan seminar<br/>
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
                    Pencapaian ASBE
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
                    Dikarenakan ASBE UI merupakan organisasi yang masih tergolong baru karena baru didirikan pada tahun 2020 maka belum mendapatkan suatu pencapaian
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
export default ContentASBE;