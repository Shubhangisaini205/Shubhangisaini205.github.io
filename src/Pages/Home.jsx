import { Box, Button, Center, Flex, Heading, Image, Link, Progress, Spacer, Text, Textarea } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { GoMarkGithub } from "react-icons/go";
import MyPhoto from "../Assests/MyPhoto.jpg"
import Skills from './Skills';

import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import AOS from "aos"
import "aos/dist/aos.css"
import Shubhangi_Saini_Resume from "../Assests/Shubhangi_Saini_Resume.pdf"


function Home() {
  useEffect(() => {
    AOS.init({ delay: 300 });
  }, [])
  function handleResume() {
    window.open("https://drive.google.com/file/d/12mUGqd-2co0SbEabIIm0d8veQebDaYX2/view?usp=share_link");

  }

  return (
    <Box height={"100%"}  id="home"  pt={"30px"} >

      <Flex
        className='home-main'
        flexDirection={{ base: "column", sm: "colomn", md: "column", lg: "row" }}
        justifyContent="space-evenly"
        width={"90%"} margin="50px auto"
        alignItems={{ base: "center", sm: "center", md: "center" }}
        gap="50px">
        <Box
          border={"0px solid black"}
          width={{ base: "100%", sm: "100%", md: "100%", lg: "60%" }}
          data-aos="fade-right" >
          <Text bgGradient='linear(to-r, #25cefd, #FF0080)'
            bgClip='text'
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: '6xl' }}
            fontWeight='extrabold'>
            I AM,
          </Text>
          <Text
            bgGradient='linear(to-r, #25cefd, #FF0080)'
            bgClip='text'
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: '6xl' }}
            fontWeight='extrabold'
            id="user-detail-name">
            SHUBHANGI SAINI

          </Text>
          <Text
            fontWeight={"500"}
            mt={"20px"}
            fontSize={"4xl"}
            color="#25cefd"
          >
            A Passionate Full Stack Developer
          </Text>
          <Center>
            <Flex mt={"20px"} flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }}>
              <Flex>
                <Box mr={"10px"} data-aos="zoom-in"  >
                  <Link
                    href="https://www.linkedin.com/in/shubhangi-saini/" target="_blank" >
                    <Box border="3px solid white" padding={4} borderRadius="50%"
                      _hover={{ backgroundColor: "white" }} className="home-icon">
                      <Image

                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="38px" alt="" /></Box>
                  </Link>
                </Box>

                <Box ml={"10px"} data-aos="zoom-in"   >
                  <Link

                    href="https://github.com/Shubhangisaini205" target="_blank" >
                    <Box border="3px solid white" padding={4} borderRadius="50%" _hover={{ backgroundColor: "white" }} className="home-icon">
                      <GoMarkGithub size="38px" color="rgb(0 119 183)"
                        _hover={{ color: "black" }} /></Box>
                  </Link>
                </Box>

              </Flex>
              <Box ml={"10px"} data-aos="zoom-in"   >
                <Link href={Shubhangi_Saini_Resume} download={true} target='_blank' id="resume-link-2" _hover={{textDecoration:"none"}}>
                  <Box padding={4} className="home-icon"  >
                    <Button
                      id="resume-button-2"
                      onClick={handleResume} border="1px solid white"
                      colorScheme="pink" >
                      Resume
                    </Button>
                  </Box>
                </Link>

              </Box>
            </Flex>
          </Center>
        </Box>

        <Box
          border={"0px solid black"}
          width={{ base: "100%", sm: "100%", md: "100%", lg: "40%" }}
          data-aos="fade-left" >
          <Center
            width={{ base: "230px", sm: "310px", md: "330px", lg: "400px" }}
            height={{ base: "280px", sm: "360px", md: "380px", lg: "450px" }}
            margin={"auto"}
            borderRadius={"50%"}
            boxShadow="#337f94 0px 19px 38px, #4b636a 0px 15px 12px"
            bgGradient='linear(to-b, #656865, #25cefd)'>
            <Image
              borderRadius={"50%"}
              className='myphoto home-img'
              width={{ base: "200px", sm: "250px", md: "270px", lg: "300px" }}
              height={{ base: "250px", sm: "300px", md: "320px", lg: "350px" }}
              src={MyPhoto} />
          </Center>

        </Box>
      </Flex>
  
    </Box>
  )
}

export default Home