import React from "react";
import {
    Flex,
    Text, 
    Image,
    Box
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
            flexDirection="column"
            margin="20px auto"
            w={["100%","100%","100%","85%"]}
            padding="20px"
            >
                <Flex 
                flexDirection={["column","column","column","row"]}
                margin="0px auto 4px"
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
                            PKM Penelitian (PKM - P) [2021 menjadi PKM Riset (PKM - R)]
                        </Text>
                        <Text
                        fontWeight= "200"
                        fontSize= "18px"
                        lineHeight= "37px"
                        >
                        Meliputi penelitian yang mengungkap hubungan sebab-akibat, aksi-reaksi, rancang bangun, perilaku sosial, ekonomi, pendidikan, kesehatan atau budaya dalam desain eksperimental maupun deskriptif. Dikelompokkan menjadi Eksakta dan Sosial Humaniora
                        </Text>
                        <Box
                        mt="5px"
                        padding="20px"
                        background= "rgba(202, 202, 202, 0.54)"
                        borderRadius= "31px"
                        textAlign="left">
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Jumlah Anggota</b>: 3-5 Mahasiswa
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Luaran yang diharapkan</b>: Lap. Kemajuan, Lap. Akhir, Artikel Ilmiah, dan/atau Produk Program
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Pendanaan</b>: Rp5-10 Juta
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Contoh Judul Proposal</b>: LEACHING (H2SO4 DAN H2O2) DAN EKSTRAKSI LIMBAH BATERAI LI-ION UNTUK RECOVERY NIKEL
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

            <Flex
            flexDirection="column"
            margin="20px auto"
            w={["100%","100%","100%","85%"]}
            padding="20px"
            >
                <Flex 
                flexDirection={["column","column","column","row"]}
                margin="0px auto 4px"
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
                            PKM Penerapan Teknologi (PKM - T) [2021 menjadi PKM Penerapan Iptek (PKM - PI)]
                        </Text>
                        <Text
                        fontWeight= "200"
                        fontSize= "18px"
                        lineHeight= "37px"
                        >
                        Bertujuan untuk membuka wawasan iptek mahasiswa terhadap persoalan yang dihadapi dunia usaha (usaha mikro sampai perusahaan besar) atau masyarakat yang berorientasi pada profit. Solusi iptek yang diimplementasikan harus merupakan respon persoalan prioritas yang disampaikan calon mitra.
                        </Text>
                        <Box
                        mt="5px"
                        padding="20px"
                        background= "rgba(202, 202, 202, 0.54)"
                        borderRadius= "31px"
                        textAlign="left">
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Jumlah Anggota</b>: 3-5 Mahasiswa
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Luaran yang diharapkan</b>: Lap. Kemajuan, Lap. Akhir, dan/atau Produk Program
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Pendanaan</b>: Rp5-10 Juta
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Contoh Judul Proposal</b>: Cleft Sintesa_ Teknologi Sintesis Wajah 3D untuk Membantu Penanganan Pasien Bibir Sumbing di CCC (Cleft and Craniofacial Center)
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

            <Flex
            flexDirection="column"
            margin="20px auto"
            w={["100%","100%","100%","85%"]}
            padding="20px"
            >
                <Flex 
                flexDirection={["column","column","column","row"]}
                margin="0px auto 4px"
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
                        fontSize= "18px"
                        lineHeight= "37px"
                        >
                        Bertujuan membentuk kemampuan mahasiswa mengkreasikan sesuatu yang baru dan fungsional atas dasar karsa dan nalarnya. Karya cipta tersebut bisa saja belum memberikan kemanfaatan langsung bagi pihak lain. PKM-KC tidak meniru produk eksisting baik di dalam maupun luar negeri, kecuali memodifikasi prinsip dan/atau fungsinya.
                        </Text>
                        <Box
                        mt="5px"
                        padding="20px"
                        background= "rgba(202, 202, 202, 0.54)"
                        borderRadius= "31px"
                        textAlign="left">
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Jumlah Anggota</b>: 3-5 Mahasiswa
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Luaran yang diharapkan</b>: Lap. Kemajuan, Lap Akhir, Prototipe atau Produk Fungsional
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Pendanaan</b>: Rp5-10 Juta
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Contoh Judul Proposal</b>: LESTARI.IN : APLIKASI URUN DANA PELESTARIAN HUTAN MELALUI PENYIRAMAN RTH BERBASIS IOT
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

            <Flex
            flexDirection="column"
            margin="20px auto"
            w={["100%","100%","100%","85%"]}
            padding="20px"
            >
                <Flex 
                flexDirection={["column","column","column","row"]}
                margin="0px auto 4px"
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
                            PKM Pengabdian Masyarakat (PKM - M) [2021 menjadi PKM-PM]
                        </Text>
                        <Text
                        fontWeight= "200"
                        fontSize= "18px"
                        lineHeight= "37px"
                        >
                        Bertujuan untuk menumbuhkan empati mahasiswa kepada persoalan yang dihadapi masyarakat melalui penerapan iptek kampus yang menjadi solusi tepat bagi persoalan atau kebutuhan masyarakat yang tidak berorientasi pada profit. Direkomendasikan merupakan respon persoalan yang disampaikan masyarakat dan bukan inisiatif mahasiswa.
                        </Text>
                        <Box
                        mt="5px"
                        padding="20px"
                        background= "rgba(202, 202, 202, 0.54)"
                        borderRadius= "31px"
                        textAlign="left">
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Jumlah Anggota</b>: 3-5 Mahasiswa
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Luaran yang diharapkan</b>: Lap. Kemajuan, Lap. Akhir, dan/atau Produk Program
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Pendanaan</b>: Rp5-10 Juta
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Contoh Judul Proposal</b>: PROGRAM SEHATI SEBAGAI UPAYA PENCEGAHAN ANEMIA PADA REMAJA PUTRI
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

            <Flex
            flexDirection="column"
            margin="20px auto"
            w={["100%","100%","100%","85%"]}
            padding="20px"
            >
                <Flex 
                flexDirection={["column","column","column","row"]}
                margin="0px auto 4px"
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
                        fontSize= "18px"
                        lineHeight= "37px"
                        >
                        Bertujuan untuk meningkatkan daya imajinasi mahasiswa dalam merespon tantangan jaman, umumnya berupa konsep perubahan dan/atau pengembangan dari berbagai aspek berbangsa, bersifat futuristik, jangka panjang, tetapi berpotensi untuk direalisasikan.
                        </Text>
                        <Box
                        mt="5px"
                        padding="20px"
                        background= "rgba(202, 202, 202, 0.54)"
                        borderRadius= "31px"
                        textAlign="left">
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Jumlah Anggota</b>: 3-5 Mahasiswa
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Luaran yang diharapkan</b>: Artikel Ilmiah memuat konsep perubahan atau pengembangan
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Pendanaan</b>: Intensif Rp3 Juta
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Contoh Judul Proposal</b>: GENOM.ID : BASIS DATA GENETIK NASIONAL SEBAGAI REFERENSI PROFIL DNA INDONESIA
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

            <Flex
            flexDirection="column"
            margin="20px auto"
            w={["100%","100%","100%","85%"]}
            padding="20px"
            >
                <Flex 
                flexDirection={["column","column","column","row"]}
                margin="0px auto 4px"
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
                        <Box
                        mt="5px"
                        padding="20px"
                        background= "rgba(202, 202, 202, 0.54)"
                        borderRadius= "31px"
                        textAlign="left">
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Jumlah Anggota</b>: 3-5 Mahasiswa
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Luaran yang diharapkan</b>: Lap. Kemajuan, Lap. Akhir, Video yang diunggah ke YOUTUBE
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Pendanaan</b>: Rp5-10 Juta
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Contoh Judul Proposal</b>: INOVASI TEKNOLOGI PENANGGULANGAN BENCANA BERBASIS ENERGI SURYA DAN FILTRASI AIR PORTABEL
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

            <Flex
            flexDirection="column"
            margin="20px auto"
            w={["100%","100%","100%","85%"]}
            padding="20px"
            >
                <Flex 
                flexDirection={["column","column","column","row"]}
                margin="0px auto 4px"
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
                        <Box
                        mt="5px"
                        padding="20px"
                        background= "rgba(202, 202, 202, 0.54)"
                        borderRadius= "31px"
                        textAlign="left">
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Jumlah Anggota</b>: 3-5 Mahasiswa
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Luaran yang diharapkan</b>: Artikel Ilmiah
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Pendanaan</b>: Intensif Rp3 Juta
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Contoh Judul Proposal</b>: IMPLEMENTASI ARTIFICIAL NEURAL NETWORK DALAM MEMPREDIKSI HARGA SAHAM
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

            <Flex
            flexDirection="column"
            margin="20px auto"
            w={["100%","100%","100%","85%"]}
            padding="20px"
            >
                <Flex 
                flexDirection={["column","column","column","row"]}
                margin="0px auto 4px"
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
                        PKM Kewirausahaan (PKM - K)
                        </Text>
                        <Text
                        fontWeight= "200"
                        fontSize= "24px"
                        lineHeight= "37px"
                        >
                        Bertujuan untuk menumbuhkan pemahaman dan keterampilan mahasiswa dalam menghasilkan komoditas unik serta merintis kewirausahaan yang berorientasi pada profit. Namun, dalam hal ini lebih mengutamakan keunikan dan kemanfaatan komoditas usaha (ada muatan intelektual) daripada profit. Pelaku utama adalah mahasiswa, sementara pihak lainnya hanya sebagai faktor pendukung.
                        </Text>
                        <Box
                        mt="5px"
                        padding="20px"
                        background= "rgba(202, 202, 202, 0.54)"
                        borderRadius= "31px"
                        textAlign="left">
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Jumlah Anggota</b>: 3-5 Mahasiswa
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Luaran yang diharapkan</b>: Lap. Kemajuan, Lap. Akhir, Produk Usaha
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Pendanaan</b>: Rp5-10 Juta
                            </Text>
                            <Text
                            fontWeight= "200"
                            fontSize= "18px"
                            lineHeight= "28px"
                            padding="12px 0"
                            >
                                <b style={{fontWeight:"bold"}}>Contoh Judul Proposal</b>: KREASI KAIN BATIK BERMOTIFKAN SPESIES-SPESIES ALGA INDONESIA
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

            <Flex alignItems="center" justifyContent="center" paddingX="20px">
                <Text
                 as="i"
                fontSize= "18px"
                lineHeight= "20px">Sumber: PKM Center Universitas Indonesia & Pedoman PKM 2021</Text>
            </Flex>


        </Flex>
    );
};
export default AboutPR;