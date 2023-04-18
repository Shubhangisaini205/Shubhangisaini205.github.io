import { Box, Center, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"


function About() {
  useEffect(()=>{
    AOS.init({delay:300});
},[])
  return (
    <Box  pt={"100px"}pb={"20px"} id="about" className="about section" >
      <Heading
        display={"inline-block"}
        padding="10px"
        bgGradient='linear(to-r, #25cefd, #f14d9f)'
        borderRadius={"15px"}
        className="tech-skill-heading"
        data-aos="fade-right"
        marginBottom={{ base: "30px", sm: "50px" }}>
       <Link display={"none"}>About</Link>
       ABOUT ME
      </Heading>

      <Flex flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }} width={{ base: "90%", sm: "90%", md: "90%", lg: "80%" }} margin={"auto"} gap={20}    >
        <Box
          // border={"1px solid white"}
          width="70%" margin="auto" data-aos="fade-right">
          <Text color={"white"} fontSize={20} id="user-detail-intro"   >
            Detail-orientated full-stack web developer,who loves working with tech stacks like HTML,CSS,Javascript and React etc. and passionate 
            about developing user-friendly web applications . Team
            player with an eye for detail. An enthusiastic individual with zeal to grow, curious to explore and learn new things and dedicated to company growth and
            improvements.
          </Text>
        </Box>
        <Box 
        // border={"1px solid white"} 
        width={{ base: "90%", sm: "70%", md: "50%", lg: "40%" }} margin="auto" data-aos="fade-left">
          <Image
            borderTopRadius={"50%"}
            borderLeftRadius={"50%"}
            src="https://camo.githubusercontent.com/c1dcb74cc1c1835b1d716f5051499a2814c683c806b15f04b0eba492863703e9/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966" /></Box>
      </Flex>
    </Box>
  )
}

export default About