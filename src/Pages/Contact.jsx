import React, { useEffect } from 'react'
import { Box, Center, Flex, Heading, Image, Link, Text } from "@chakra-ui/react"
import { GoMarkGithub } from 'react-icons/go'
import AOS from "aos"
import "aos/dist/aos.css"




function Contact() {
    useEffect(() => {
        AOS.init({ delay: 300 });
    }, [])
    return (
        <Box mt={"80px"} pb="5px" id="contact">
            <Heading
                display={"inline-block"}
                padding="10px"
                bgGradient='linear(to-r, #25cefd, #f14d9f)'
                color={"black"}
                borderRadius={"15px"}
                className="section_title"
                data-aos="fade-right"
                id='contact-heading'
            >
                CONTACT ME
            </Heading>
            <Box mt={"50px"}>
                <Text color={"whiteAlpha.800"}
                    fontSize={"20px"} className="contact_message" >I am currently specializing in MERN development.<br />
                    Feel free to drop a message for any suggestion,<br />and we can get in touch.</Text>
            </Box>

            <Flex width={"90%"} margin={"50px auto 20px auto"} flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }} justifyContent={"center"} gap="20px" align={"center"}>
                <Box
                data-aos="fade-right"
                    fontSize="20px"
                    width="285px"
                    borderRadius={"20px"}
                    color={"white"}
                    padding={"10px 0 10px 0"}
                    boxShadow="rgb(193, 61, 61) 0px 10px 20px, rgba(138, 60, 60, 0.982) 0px 6px 6px"
                    id="contact-phone"
                    _hover={{ cursor: "pointer" }} >
                    <Text fontWeight={"bold"} fontSize={"22px"} color={"#25cefd"} > 📞 Call</Text>
                    +91 6396765981
                </Box>
                <Box
                data-aos="zoom-in"
                    fontSize="20px"
                    width="285px"
                    color={"white"}
                    borderRadius={"20px"}
                    padding={"10px 0 10px 0"}
                    boxShadow="rgb(235, 214, 214) 0px 10px 20px, rgba(159, 146, 146, 0.982) 0px 6px 6px" id="contact-email" _hover={{ cursor: "pointer" }}>
                    <Text fontWeight={"bold"} fontSize={"22px"} color={"#25cefd"}>📧 Email</Text>
                    shubhangisaini205@gmail.com

                </Box>
                <Box
                data-aos="fade-left"
                    fontSize="20px"
                    width="285px"
                    borderRadius={"20px"}
                    color={"white"}
                    padding={"10px 0 10px 0"}
                    boxShadow="rgb(61, 164, 193) 0px 10px 20px, rgba(60, 138, 131, 0.982) 0px 6px 6px" _hover={{ cursor: "pointer" }}>
                    <Text fontWeight={"bold"} fontSize={"22px"} color={"#25cefd"}>🌏 Address</Text>
                    Saharanpur, Uttar Pradesh
                </Box>
            </Flex>
            <Box >
                <Center>
                    <Flex mt={"20px"}>
                        <Box mr={"10px"} data-aos="zoom-in"  >
                            <Link
                                href="https://www.linkedin.com/in/shubhangi-saini/" target="_blank" >
                                <Box border="3px solid white"
                                    padding={4} borderRadius="50%"
                                    _hover={{ backgroundColor: "white" }}
                                    className="home-icon"
                                    id="contact-linkedin">
                                    <Image

                                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="38px" alt="" /></Box>
                            </Link>
                        </Box>

                        <Box ml={"10px"} data-aos="zoom-in"   >
                            <Link

                                href="https://github.com/Shubhangisaini205" target="_blank" >
                                <Box border="3px solid white" padding={4} borderRadius="50%" _hover={{ backgroundColor: "white" }} className="home-icon" id="contact-github">
                                    <GoMarkGithub size="38px" color="rgb(0 119 183)"
                                        _hover={{ color: "black" }} /></Box>
                            </Link>
                        </Box>
                    </Flex>
                </Center>

            </Box>
            <Box
                height={10}
                mt={"50px"}
                mb={"50px"}
                bgGradient='linear(to-r, #25cefd, #FF0080)'
                color={"white"}
                fontSize={{ base: "80%", sm: "100%", lg: "100%" }}
               alignContent={"center"}
               >
                <Text fontSize={"20px"}>Made by Shubhangi Saini 💫
                    ❤️
                </Text>
            </Box>
        </Box>
    )
}

export default Contact



