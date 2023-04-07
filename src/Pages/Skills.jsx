import { Box, Grid, Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import chakra from "../Assests/chakra-ui.jpg"
import css from "../Assests/css.png"
import github from "../Assests/github.png"
import html1 from "../Assests/html1.png"
import js from "../Assests/js.png"
import nextjs from "../Assests/nextjs.png"
import npm from "../Assests/npm.png"
import redux from "../Assests/redux.png"
import vscode from "../Assests/vscode.png"
import react from "../Assests/react1.png"
import AOS from "aos"
import "aos/dist/aos.css"

function Skills() {
  useEffect(()=>{
    AOS.init({delay:300});
},[])
  return (
    <Box margin="50px auto" width="80%" className='skills-card' >
      <Heading
        display={"inline-block"}
        padding="10px"
        bgGradient='linear(to-r, #25cefd, #f14d9f)'
        borderRadius={"15px"}
        className="tech-skill-heading"
        data-aos="fade-right">
        MY TECHNICAL SKILLS
      </Heading>
      <Grid
        className='tech-stacks'
        templateColumns={{base: "repeat(2,1fr)", lg: "repeat(5,1fr)" }}
        gap={"30px"}
        rowGap="60px"
        margin="50px auto"
        alignItems={{ base: "center", sm: "center", md: "center" }}
        marginLeft="10%" >
       
        <Box
           width="60%" className='skills-card'  id='chakra' data-aos="fade-up" >
          <Image width="60%" src={chakra} margin="auto" className="skills-card-img"></Image>
          <Heading fontSize={"1.2rem"} color={"gray"}  className="skills-card-name">Chakra</Heading>
        </Box>
      
        
        
        <Box width="60%" className='skills-card'  id='css' data-aos="fade-up" >
          <Image width="60%" src={css} margin="auto" className="skills-card-img"></Image>
          <Heading fontSize={"1.2rem"} color={"gray"} className="skills-card-name">CSS</Heading>
        </Box>
        

        
        <Box id='html' className='skills-card'  width="60%" data-aos="fade-up" >
          <Image width="60%" src={html1} margin="auto" className="skills-card-img"></Image>
          <Heading fontSize={"1.2rem"} color={"gray"} className="skills-card-name">HTML</Heading>
        </Box>
        

        
        <Box  width="60%" className='skills-card'  id='js' data-aos="fade-up" >
          <Image width="60%" src={js} margin="auto" className="skills-card-img"></Image>
          <Heading fontSize={"1.2rem"} color={"gray"} className="skills-card-name">JS</Heading>
        </Box>
       

        
        <Box  width="60%" className='skills-card' id='redux' data-aos="fade-up" >
          <Image width="60%" src={redux} margin="auto" className="skills-card-img"></Image>
          <Heading fontSize={"1.2rem"} color={"gray"} className="skills-card-name">Redux</Heading>
        </Box>
        

       
        <Box  width="60%" className='skills-card'  id='vscode' data-aos="fade-up" >
          <Image width="60%" src={react} margin="auto" className="skills-card-img"></Image>
          <Heading fontSize={"1.2rem"} color={"gray"} className="skills-card-name">React</Heading>
        </Box>
       

        
        <Box  width="60%" className='skills-card' id='github' data-aos="fade-up" >
          <Image width="60%" src={github} margin="auto" className="skills-card-img"></Image>
          <Heading fontSize={"1.2rem"} color={"gray"} className="skills-card-name">Github</Heading>
        </Box>
      

        
        <Box width="60%" className='skills-card'  id='npm' data-aos="fade-up" >
          <Image width="60%" src={npm} margin="auto" className="skills-card-img"></Image>
          <Heading fontSize={"1.2rem"} color={"gray"} className="skills-card-name">NPM</Heading>
        </Box>
        

        
        <Box width="60%"  className='skills-card' id='vscode' data-aos="fade-up" >
          <Image width="60%" src={vscode} margin="auto" className="skills-card-img"></Image>
          <Heading fontSize={"1.2rem"} color={"gray"} className="skills-card-name">VSCode</Heading>
        </Box>
        
      </Grid>




    </Box>
  )
}

export default Skills