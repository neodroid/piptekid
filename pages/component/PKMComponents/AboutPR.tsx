import React from "react";
import {
    Flex,
    Text, 
    Image
} from "@chakra-ui/core";

const AboutPR = () => {
    return(
        <Flex w="100%" py="20px" flexDirection="column">
            <Text
            as="h1"
            fontSize={["1.875rem", "2rem"]}
            letterSpacing={".1rem"}
            fontFamily="heading"
            fontWeight="bold"
            color="#060049"
            py="20px"
            pl="50px"
            >
                Macam PKM :
            </Text>

            <Flex 
            flexDirection={["column","column","column","row"]}
            w={["100%","100%","100%","85%"]}
            margin="20px auto"
            padding="20px"
            >
                <Flex flexBasis="20%" alignItems="center" justifyContent="center" pb={["50px","50px","50px","0"]}>
                    <Image width="120px" src="pkmp.png"/>
                </Flex>
                <Flex 
                flexBasis="80%" 
                flexDirection="column"
                textAlign={["center","center","center","left"]}
                >
                    <Text
                    fontWeight= "bold"
                    fontSize= "24px"
                    lineHeight= "28px"
                    padding="12px 0"
                    >
                        PKM Penelitian (PKM - P)
                    </Text>
                    <Text
                    fontWeight= "200"
                    fontSize= "24px"
                    lineHeight= "37px"
                    >
                    Meliputi penelitian yang mengungkap hubungan sebab-akibat, aksi-reaksi, rancang bangun, perilaku sosial, ekonomi, pendidikan, kesehatan atau budaya dalam desain eksperimental maupun deskriptif. Dikelompokkan menjadi Eksakta (PKM-PE) dan Sosial Humaniora (PKMP-SH)
                    </Text>
                </Flex>
            </Flex>

            <Flex 
            flexDirection={["column","column","column","row"]}
            w={["100%","100%","100%","85%"]}
            margin="20px auto"
            padding="20px"
            >
                <Flex flexBasis="20%" alignItems="center" justifyContent="center" pb={["50px","50px","50px","0"]}>
                    <Image width="120px" src="pkmt.png"/>
                </Flex>
                <Flex 
                flexBasis="80%" 
                flexDirection="column"
                textAlign={["center","center","center","left"]}
                >
                    <Text
                    fontWeight= "bold"
                    fontSize= "24px"
                    lineHeight= "28px"
                    padding="12px 0"
                    >
                        PKM Penerapan Teknologi (PKM - T)
                    </Text>
                    <Text
                    fontWeight= "200"
                    fontSize= "24px"
                    lineHeight= "37px"
                    >
                    Bertujuan untuk membuka wawasan iptek mahasiswa terhadap persoalan yang dihadapi dunia usaha (usaha mikro sampai perusahaan besar) atau masyarakat yang berorientasi pada profit. Solusi iptek yang diimplementasikan harus merupakan respon persoalan prioritas yang disampaikan calon mitra.
                    </Text>
                </Flex>
            </Flex>

            <Flex 
            flexDirection={["column","column","column","row"]}
            w={["100%","100%","100%","85%"]}
            margin="20px auto"
            padding="20px"
            >
                <Flex flexBasis="20%" alignItems="center" justifyContent="center" pb={["50px","50px","50px","0"]}>
                    <Image width="120px" src="pkmkc.png"/>
                </Flex>
                <Flex 
                flexBasis="80%" 
                flexDirection="column"
                textAlign={["center","center","center","left"]}
                >
                    <Text
                    fontWeight= "bold"
                    fontSize= "24px"
                    lineHeight= "28px"
                    padding="12px 0"
                    >
                    PKM Karsa Cipta (PKM - KC)
                    </Text>
                    <Text
                    fontWeight= "200"
                    fontSize= "24px"
                    lineHeight= "37px"
                    >
                    Bertujuan membentuk kemampuan mahasiswa mengkreasikan sesuatu yang baru dan fungsional atas dasar karsa dan nalarnya. Karya cipta tersebut bisa saja belum memberikan kemanfaatan langsung bagi pihak lain. PKM-KC tidak meniru produk eksisting baik di dalam maupun luar negeri, kecuali memodifikasi prinsip dan/atau fungsinya. 
                    </Text>
                </Flex>
            </Flex>

            <Flex 
            flexDirection={["column","column","column","row"]}
            w={["100%","100%","100%","85%"]}
            margin="20px auto"
            padding="20px"
            >
                <Flex flexBasis="20%" alignItems="center" justifyContent="center" pb={["50px","50px","50px","0"]}>
                    <Image width="120px" src="pkmm.png"/>
                </Flex>
                <Flex 
                flexBasis="80%" 
                flexDirection="column"
                textAlign={["center","center","center","left"]}
                >
                    <Text
                    fontWeight= "bold"
                    fontSize= "24px"
                    lineHeight= "28px"
                    padding="12px 0"
                    >
                    PKM Pengabdian Masyarakat (PKM - M)
                    </Text>
                    <Text
                    fontWeight= "200"
                    fontSize= "24px"
                    lineHeight= "37px"
                    >
                    Bertujuan untuk menumbuhkan empati mahasiswa kepada persoalan yang dihadapi masyarakat melalui penerapan iptek kampus yang menjadi solusi tepat bagi persoalan atau kebutuhan masyarakat yang tidak berorientasi pada profit. Direkomendasikan merupakan respon persoalan yang disampaikan masyarakat dan bukan inisiatif mahasiswa.
                    </Text>
                </Flex>
            </Flex>

            <Flex 
            flexDirection={["column","column","column","row"]}
            w={["100%","100%","100%","85%"]}
            margin="20px auto"
            padding="20px"
            >
                <Flex flexBasis="20%" alignItems="center" justifyContent="center" pb={["50px","50px","50px","0"]}>
                    <Image width="120px" src="pkmgt.png"/>
                </Flex>
                <Flex 
                flexBasis="80%" 
                flexDirection="column"
                textAlign={["center","center","center","left"]}
                >
                    <Text
                    fontWeight= "bold"
                    fontSize= "24px"
                    lineHeight= "28px"
                    padding="12px 0"
                    >
                    PKM Gagasan Tertulis (PKM - GT)
                    </Text>
                    <Text
                    fontWeight= "200"
                    fontSize= "24px"
                    lineHeight= "37px"
                    >
                    Bertujuan untuk meningkatkan daya imajinasi mahasiswa dalam merespon tantangan jaman, umumnya berupa konsep perubahan dan/atau pengembangan dari berbagai aspek berbangsa, bersifat futuristik, jangka panjang, tetapi berpotensi untuk direalisasikan. 
                    </Text>
                </Flex>
            </Flex>

            <Flex 
            flexDirection={["column","column","column","row"]}
            w={["100%","100%","100%","85%"]}
            margin="20px auto"
            padding="20px"
            >
                <Flex flexBasis="20%" alignItems="center" justifyContent="center" pb={["50px","50px","50px","0"]}>
                    <Image width="120px" src="pkmgfk.png"/>
                </Flex>
                <Flex 
                flexBasis="80%" 
                flexDirection="column"
                textAlign={["center","center","center","left"]}
                >
                    <Text
                    fontWeight= "bold"
                    fontSize= "24px"
                    lineHeight= "28px"
                    padding="12px 0"
                    >
                    PKM Gagasan Futuristik Konstruktif (PKM - GFK)
                    </Text>
                    <Text
                    fontWeight= "200"
                    fontSize= "24px"
                    lineHeight= "37px"
                    >
                    Bertujuan untuk memotivasi partisipasi mahasiswa dalam mengelola imajinasi, persepsi dan nalarnya, memikirkan tatakelola yang futuristik namun konstruktif sebagai upaya pencapaian tujuan SDGs di Indonesia ataupun solusi keprihatinan bangsa Indonesia.
                    </Text>
                </Flex>
            </Flex>

            <Flex 
            flexDirection={["column","column","column","row"]}
            w={["100%","100%","100%","85%"]}
            margin="20px auto"
            padding="20px"
            >
                <Flex flexBasis="20%" alignItems="center" justifyContent="center" pb={["50px","50px","50px","0"]}>
                    <Image width="120px" src="pkmai.png"/>
                </Flex>
                <Flex 
                flexBasis="80%" 
                flexDirection="column"
                textAlign={["center","center","center","left"]}
                >
                    <Text
                    fontWeight= "bold"
                    fontSize= "24px"
                    lineHeight= "28px"
                    padding="12px 0"
                    >
                    PKM Artikel Ilmiah (PKM - AI)
                    </Text>
                    <Text
                    fontWeight= "200"
                    fontSize= "24px"
                    lineHeight= "37px"
                    >
                    Bertujuan untuk memberi pengalaman mahasiswa menghasilkan karya tulis ilmiah. Merupakan program penulisan artikel ilmiah yang bersumber dari hasil kegiatan akademik lainnya dalam bidang pendidikan, penelitian atau pengabdian kepada masyarakat (misalnya studi kasus, praktik lapang, KKN, PKM, magang).
                    </Text>
                </Flex>
            </Flex>

            <Flex 
            flexDirection={["column","column","column","row"]}
            w={["100%","100%","100%","85%"]}
            margin="20px auto"
            padding="20px"
            >
                <Flex flexBasis="20%" alignItems="center" justifyContent="center" pb={["50px","50px","50px","0"]}>
                    <Image width="120px" src="pkmk.png"/>
                </Flex>
                <Flex 
                flexBasis="80%" 
                flexDirection="column"
                textAlign={["center","center","center","left"]}
                >
                    <Text
                    fontWeight= "bold"
                    fontSize= "24px"
                    lineHeight= "28px"
                    padding="12px 0"
                    >
                    PKM Kewirausahaan (PKM - K)
                    </Text>
                    <Text
                    fontWeight= "200"
                    fontSize= "24px"
                    lineHeight= "37px"
                    >
                    Bertujuan untuk menumbuhkan pemahaman dan keterampilan mahasiswa dalam menghasilkan komoditas unik serta merintis kewirausahaan yang berorientasi pada profit. Namun, dalam hal ini lebih mengutamakan keunikan dan kemanfaatan komoditas usaha (ada muatan intelektual) daripada profit. Pelaku utama adalah mahasiswa, sementara pihak lainnya hanya sebagai faktor pendukung. 
                    </Text>
                </Flex>
            </Flex>

            <Flex alignItems="center" justifyContent="center" paddingX="20px">
                <Text
                as="i"
                fontSize= "18px"
                lineHeight= "20px">Sumber: PKM Center Universitas Indonesia</Text>
            </Flex>
        </Flex>
    );
};
export default AboutPR;