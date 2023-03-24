import { Box, Center, Flex, Heading, Image, Link, Spacer, Text, Textarea } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { GoMarkGithub } from "react-icons/go";
import MyPhoto from "../Assests/MyPhoto.jpg"
import Skills from './Skills';
import AOS from "aos"
import "aos/dist/aos.css"
import Projects from './Projects';

function Home() {
  useEffect(()=>{
    AOS.init({delay:300});
},[])

  return (
    <Box >
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
            fontSize={"3xl"}
            id="user-detail-intro">
            A Passionate Full Stack Developer who loves building projects and work in a team.
          </Text>
          <Center>
            <Flex mt={"20px"}>
              <Box mr={"10px"}>
                <Link 
                href="https://www.linkedin.com/in/shubhangi-saini/" target="_blank" >
                  <Image
                  
                   src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="38px" alt="" />
                </Link>
              </Box>

              <Box ml={"10px"} >
                <Link 
                 
                 href="https://github.com/Shubhangisaini205" target="_blank" >
                  <Box>
                  <GoMarkGithub size="38px" color="black" /></Box>
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
            width={{ base: "250px", sm: "350px", md: "370px", lg: "400px" }}
            height="450px"
            margin={"auto"}
            borderRadius={"50%"}
            bgGradient='linear(to-b, #656865, #25cefd)'>
            <Image
           
              borderRadius={"50%"}
              className='myphoto home-img'
              width={{ base: "200px", sm: "230px", md: "250px", lg: "300px" }}
              height="350px"
              src={MyPhoto} />
          </Center>

        </Box>
      </Flex>
      <Skills />
      <Projects/>
    </Box>
  )
}

export default Home