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
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. tetur adipiscing elit. Iaculis et lectus tellus mi varius commodo nulla. Suspendisse accumsan, dui morbi vitae augue risus lectus. Velit magna id nunc, aliquam suscipit lorem. Habitant felis commodo viverra faucibus nec.<br/>
                    1. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. tetur adipiscing elit. Iaculis et lectus tellus mi varius commodo nulla.<br/>
                    2. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. tetur adipiscing elit. Iaculis et lectus tellus mi varius commodo nulla.<br/>
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
                    Pencapaian Exercise
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
                    Pada tahun 2012, Exercise pernah menyelesaikan satu proyek dari alumni berupa auto-manual controller motor induksi untuk kepentingan industri. Pada tahun 2013, Exercise dapat dikatakan ‘mati suri’, meskipun terdapat juga proyek atas nama Exercise.<br/>
                    1. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. tetur adipiscing elit. Iaculis et lectus tellus mi varius commodo nulla.<br/>
                    2. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. tetur adipiscing elit. Iaculis et lectus tellus mi varius commodo nulla. 
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