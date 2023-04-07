import { Box, Center, Flex, Heading, Image, Link, Spacer, Text, Textarea } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { GoMarkGithub } from "react-icons/go";
import MyPhoto from "../Assests/MyPhoto.jpg"
import Skills from './Skills';

import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import AOS from "aos"
import "aos/dist/aos.css"


function Home() {
  useEffect(() => {
    AOS.init({ delay: 300 });
  }, [])

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
            id="user-detail-intro">
            A Passionate Full Stack Developer
          </Text>
          <Center>
            <Flex mt={"20px"}>
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
            boxShadow="#337f94 0px 19px 38px, #4b636a 0px 15px 12px"
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
      <About />
      <Skills />
      <Projects />


      <Box className="react-activity-calendar">
        <Box >
          <Heading
            display={"inline-block"}
            padding="10px"
            bgGradient='linear(to-r, #25cefd, #f14d9f)'
            borderRadius={"15px"}

            data-aos="fade-right"
            marginBottom={{ base: "30px", sm: "50px" }}>
            GITHUB STATISTICS & CALENDER
          </Heading>
        </Box>

        <Flex id="git-stat" flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }} width="80%" margin="auto"gap={10} >
          <Box margin={"auto"}>

            <Image id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=Shubhangisaini205&theme=react&border_radius=6.5&date_format=M%20j%5B%2C%20Y%5D"
              alt="streak-stat" />
          </Box>
          <Box margin={"auto"}>
            <Image id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=Shubhangisaini205&count_private=true&theme=react"
              alt="stat-card" /></Box>

          <Box margin={"auto"}>
            <Image id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Shubhangisaini205&theme=react"
              alt="top_languages" />
          </Box>
        </Flex>
      </Box>
      <Contact/>

    </Box>
  )
}

export default Home