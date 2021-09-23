import {
  Flex,
  Box,
  Text,
  Link,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/core";
import { Formik, Form, Field } from "formik";
import { useDisclosure } from "@chakra-ui/hooks";
import React from "react";
import { motion } from "framer-motion";
import firebase from "../../../firebase/clientApp";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const BannerTechno = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageName, setImageName] = React.useState("");
  const toast = useToast();
  return (
    <>
      <Box
        bgImage="url('/bekrontechno2.jpg')"
        bgPos="center"
        bgSize="cover"
        minHeight="700px"
      >
        <Flex
          backgroundColor="rgba(6, 0, 73,0.7)"
          w="100%"
          minHeight="700px"
          h="100%"
          flexDirection="column"
          padding="15px"
        >
          <Box
            m="220px auto 20px"
            w="85%"
            height="100%"
            textAlign={["center", "right"]}
            color="white"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 1.4,
                  },
                },
              }}
            >
              <Text
                fontFamily="heading"
                fontStyle="normal"
                fontWeight="900"
                fontSize={["44px", "54px", "72px", "72px"]}
                lineHeight={["50px", "67px", "92px", "112px"]}
              >
                TECHNOSKILL 2.0
              </Text>
              <Flex flexDirection={["column", "row", "row", "row"]}>
                <Text
                  fontFamily="thin"
                  m={["0 auto", "0 0 0 auto", "0 0 0 auto", "0 0 0 auto"]}
                >
                  Bekerja sama dengan
                </Text>
                <Link style={{ textDecoration: "none" }} href="/">
                  <Box m={["0 auto", "0 0 0 15px", "0 0 0 15px", "0 0 0 15px"]}>
                    <Image
                      width="30px"
                      src="/sos/piptek.png"
                      m={["0 auto", "0 0 0 15px", "0 0 0 15px", "0 0 0 15px"]}
                    />
                  </Box>
                </Link>
                <Link style={{ textDecoration: "none" }} href="/exercise">
                  <Box m={["0 auto", "0 0 0 15px", "0 0 0 15px", "0 0 0 15px"]}>
                    <Image
                      width="60px"
                      src="exercise.png"
                      m={["0 auto", "0 0 0 15px", "0 0 0 15px", "0 0 0 15px"]}
                    />
                  </Box>
                </Link>
                <Link style={{ textDecoration: "none" }} href="/ieee">
                  <Box
                    m={["0 auto", "0 0 0 15px", "0 0 0 15px", "0 0 0 15px"]}
                    backgroundColor="white"
                    w="fit-content"
                  >
                    <Image width="70px" src="ieee.png" m="0 auto" />
                  </Box>
                </Link>
              </Flex>
            </motion.div>
          </Box>
          <Flex
            width="85%"
            m="130px auto 10px"
            textAlign="center"
            flexDirection={["column", "column", "column", "row"]}
            alignSelf="center"
          >
            {/*
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 1.6,
                  },
                },
              }}
            >
              <Link style={{ textDecoration: "none" }} href="/" isExternal>
                <Button
                  background="rgba(196, 196, 196,0.2)"
                  fontWeight="bold"
                  fontSize="30px"
                  textAlign="center"
                  padding="25px"
                  borderRadius="34px"
                  color="white"
                  m="20px"
                  outline="none"
                  w={["230px", "230px", "250px", "350px"]}
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                >
                  Guidebook
                </Button>
              </Link>
            </motion.div> */}

            {/*<motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {
                            scale: 0.8,
                            opacity: 0,
                          },
                          visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                              delay: 1.8,
                            },
                          },
                        }}
                      >
                    <Link style={{textDecoration:"none"}} href="https://www.kaggle.com/t/df69ff54095b49cfadcd464cbb157c30" isExternal>
                        <Button
                        background="rgba(196, 196, 196,0.2)"
                          fontWeight= "bold"
                          fontSize= "30px"
                          textAlign="center"
                          padding="25px"
                          borderRadius="34px"
                          color="white"
                          outline="none"
                          w={["230px","230px","250px","350px"]}
                          m="20px"
                          _hover={{ 
                            transform: "scale(1.05)",
                          }}
                          >
                            Submission
                        </Button>
                    </Link>
                        </motion.div>*/}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 2,
                  },
                },
              }}
            >
              <Link
                style={{ textDecoration: "none" }}
                href="https://forms.gle/xZbDtj4SWLszmp9XA"
                isExternal
              >
                <Button
                  background="rgba(196, 196, 196,0.2)"
                  fontWeight="bold"
                  fontSize="30px"
                  textAlign="center"
                  padding="25px"
                  borderRadius="34px"
                  color="white"
                  m="20px"
                  outline="none"
                  w={["230px", "230px", "250px", "350px"]}
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  onClick={() =>
                    toast({
                      title: "PRESALE SUDAH DITUTUP",
                      description:
                        "Maaf masa presale sudah ditutup, tunggu esok hari untuk harga normal!",
                      status: "info",
                      duration: 10000,
                      isClosable: true,
                    })
                  }
                >
                  Registration
                </Button>
              </Link>
              {/*
              <Button
                background="rgba(196, 196, 196,0.2)"
                fontWeight="bold"
                fontSize="30px"
                textAlign="center"
                padding="25px"
                borderRadius="34px"
                color="white"
                m="20px"
                outline="none"
                onClick={onOpen}
                w={["230px", "230px", "250px", "350px"]}
                _hover={{
                  transform: "scale(1.05)",
                }}
              >
                Registration
              </Button>
              <Modal
                isOpen={isOpen}
                onClose={onClose}
                blockScrollOnMount={false}
                closeOnOverlayClick={false}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    Daftar Technoskill
                    <br /> Periode Presale
                  </ModalHeader>
                  <ModalCloseButton />
                  <Formik
                    initialValues={{
                      nama: "",
                      email: "",
                      jurusan: "",
                      angkatan: "",
                      metode: "",
                      bukti: null,
                    }}
                    onSubmit={(values, actions) => {
                      firebase
                        .firestore()
                        .collection("register")
                        .doc()
                        .set({
                          nama: values.nama,
                          email: values.email,
                          jurusan: values.jurusan,
                          angkatan: values.angkatan,
                          metode: values.metode,
                          bukti: imageName,
                        })
                        .then(() => {
                          firebase
                            .storage()
                            .ref(`image/${imageName}`)
                            .put(values.bukti)
                            .then(() => {
                              alert(
                                "Data sudah terkirim, terimakasih telah daftar! Tekan 'OK' untuk melanjutkan"
                              );
                              actions.setSubmitting(false);
                              window.location.reload();
                            });
                        });
                    }}
                  >
                    {(props) => (
                      <Form>
                        <ModalBody pb={6}>
                          <Field
                            name="nama"
                            validate={(value) => {
                              if (!value) return "Kamu pasti punya nama :D";
                            }}
                          >
                            {({ field, form }) => (
                              <FormControl
                                isInvalid={
                                  form.errors.nama && form.touched.nama
                                }
                                isRequired
                              >
                                <FormLabel htmlFor="nama">
                                  Nama Lengkap
                                </FormLabel>
                                <Input
                                  {...field}
                                  id="nama"
                                  placeholder="Nama Lengkap"
                                />
                                <FormErrorMessage>
                                  {form.errors.nama}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field
                            name="email"
                            validate={(value) => {
                              const re =
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                              if (!value)
                                return "Isi untuk informasi selanjutnya";
                              else if (!re.test(String(value).toLowerCase()))
                                return "Emailnya yang bener ya!";
                            }}
                          >
                            {({ field, form }) => (
                              <FormControl
                                isInvalid={
                                  form.errors.email && form.touched.email
                                }
                                isRequired
                                mt={4}
                              >
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                  {...field}
                                  id="email"
                                  type="email"
                                  placeholder="Email"
                                />
                                <FormErrorMessage>
                                  {form.errors.email}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field
                            name="jurusan"
                            validate={(value) => {
                              if (!value)
                                return "Bangga dong sama jurusan sendiri";
                            }}
                          >
                            {({ field, form }) => (
                              <FormControl
                                isInvalid={
                                  form.errors.jurusan && form.touched.jurusan
                                }
                                isRequired
                                mt={4}
                              >
                                <FormLabel htmlFor="jurusan">Jurusan</FormLabel>
                                <Select
                                  placeholder="Jurusan"
                                  {...field}
                                  id="jurusan"
                                >
                                  <option value="Teknik Elektro">
                                    Teknik Elektro
                                  </option>
                                  <option value="Teknik Komputer">
                                    Teknik Komputer
                                  </option>
                                  <option value="Teknik Biomedis">
                                    Teknik Biomedis
                                  </option>
                                </Select>
                                <FormErrorMessage>
                                  {form.errors.jurusan}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field
                            name="angkatan"
                            validate={(value) => {
                              if (!value)
                                return "Bangga dong sama angkatan sendiri";
                            }}
                          >
                            {({ field, form }) => (
                              <FormControl
                                isInvalid={
                                  form.errors.angkatan && form.touched.angkatan
                                }
                                isRequired
                                mt={4}
                              >
                                <FormLabel htmlFor="angkatan">
                                  Angkatan
                                </FormLabel>
                                <Select
                                  placeholder="Angkatan"
                                  {...field}
                                  id="angkatan"
                                >
                                  <option value="2018">2018</option>
                                  <option value="2019">2019</option>
                                  <option value="2020">2020</option>
                                  <option value="2021">2021</option>
                                </Select>
                                <FormErrorMessage>
                                  {form.errors.angkatan}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <FormControl mt={4} isReadOnly={true}>
                            <FormLabel>Harga</FormLabel>
                            <Input placeholder="50.000" isReadOnly={true} />
                          </FormControl>

                          <Field
                            name="metode"
                            validate={(value) => {
                              if (!value) return "Maaf, harus bayar bos :D";
                            }}
                          >
                            {({ field, form }) => (
                              <FormControl
                                isInvalid={
                                  form.errors.metode && form.touched.metode
                                }
                                isRequired
                                mt={4}
                              >
                                <FormLabel htmlFor="metode">
                                  Metode Pembayaran
                                </FormLabel>
                                <Select
                                  placeholder="Metode Pembayaran"
                                  {...field}
                                  id="metode"
                                >
                                  <option value="BCA">
                                    BCA (4219999124 a/n Muhammad Akmal Zuhdi)
                                  </option>
                                  <option value="Ovo">
                                    Ovo (081295852790 a/n Muhammad Akmal Zuhdi)
                                  </option>
                                  <option value="Gopay">
                                    Gopay (081295852790 a/n Muhammad Akmal
                                    Zuhdi)
                                  </option>
                                </Select>
                                <FormErrorMessage>
                                  {form.errors.metode}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field
                            name="bukti"
                            validate={(value) => {
                              if (
                                value != null &&
                                /\.(jpeg|jpg|png|PNG)$/.test(value.name) ==
                                  false
                              ) {
                                return "Format harus jpeg/jpg/png ya";
                              } else if (value == null) return "Isi file ya";
                            }}
                          >
                            {({ field, form }) => (
                              <FormControl
                                isInvalid={
                                  form.errors.bukti && form.touched.bukti
                                }
                                isRequired
                                mt={4}
                              >
                                <FormLabel htmlFor="bukti">
                                  Bukti Pembyaran
                                </FormLabel>
                                <Input
                                  type="file"
                                  p="3px"
                                  isRequired
                                  onChange={(event) => {
                                    props.setFieldValue(
                                      "bukti",
                                      event.target.files[0]
                                    );
                                    if (event.target.files[0] != null) {
                                      setImageName(event.target.files[0].name);
                                    }
                                  }}
                                />
                                <FormErrorMessage>
                                  {form.errors.bukti}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </ModalBody>

                        <ModalFooter>
                          <Button
                            backgroundColor="teal.500"
                            mr={3}
                            color="white"
                            type="submit"
                            isLoading={props.isSubmitting}
                          >
                            Kirim
                          </Button>
                        </ModalFooter>
                      </Form>
                    )}
                  </Formik>
                </ModalContent>
                                </Modal>*/}
            </motion.div>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default BannerTechno;
