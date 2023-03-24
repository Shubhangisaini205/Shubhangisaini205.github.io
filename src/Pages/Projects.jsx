// import React, { useEffect } from 'react'
// import AOS from "aos"
// import "aos/dist/aos.css"
// import { Box, Button, Heading, Image, Link, Text } from "@chakra-ui/react"
// import { SiBlackberry, SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux } from "react-icons/si";
// function Projects() {

//   useEffect(() => {
//     AOS.init({ delay: 300 });
//   }, [])

//   return (
//     <Box>
//       <Box data-aos="fade-right">
//         <Heading
//           mt={10}
//           display={"inline-block"}
//           padding="10px"
//           bgGradient='linear(to-r, #25cefd, #f14d9f)'
//           borderRadius={"15px"}
//           className="tech-skill-heading"
//           data-aos="fade-right">
//           MY PROJECTS
//         </Heading>
//       </Box>

//       <Box
//         border={"1px solid black"}
//         width={"90%"}
//         margin="50px auto"
//       >

//         <Box border={"1px solid black"}
//           width={"90%"}
//           margin="50px auto"
//           display="flex"
//           flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}

//         >
//           <Box border={"1px solid black"}
//             width={"90%"}
//             margin="50px auto"

//           >
//             <Heading
//               fontSize={"2rem"} color={"teal"}
//               marginTop={8}
//               >
//               MyGlamm Clone
//             </Heading>
//             <Text
//             m={"20px 50px 30px 50px"}
//             fontSize={"1.06rem"}

//             >
//              MyGlamm is an  E-commerce site. This is a shopping website of cosmetic products belongs to women such as makeup product, lipstick, eyeliner, sunscreen ans many more.
//             </Text>
//             <Box display="flex"  justifyContent={"center"} justifyItems="center" gap={"6"} mt={5} mb={10}>
//               <Box className="project-tech-stacks" size><SiHtml5  size="32px" color="#e34c26" /></Box>
//               <Box className="project-tech-stacks" size><SiJavascript size="32px" color="yellow" /></Box>
//               <Box className="project-tech-stacks" size ><SiReact size="32px" color="#61DBFB" /></Box>
//               <Box className="project-tech-stacks" size><SiCss3 size="32px" color="#264de4" /></Box>
//               <Box className="project-tech-stacks" size><SiRedux size="32px" color="#764abc" /></Box>
//             </Box>
//             <Box
//              display="flex"  
//              justifyContent="space-between"
//              width="35%"
//              margin={"auto"}
//              my={5}
//              >
//               <Box>
//                 <Button colorScheme='teal' size='md' color={'black'}>Github</Button>
//               </Box>
//               <Box>
//                 <Button colorScheme='teal' size='md' color={'black'}>Watch</Button>
//               </Box>
//             </Box>
//           </Box>

//           <Box border={"1px solid black"}
//             width={"90%"}
//             margin="50px auto"
//             padding={10}
//             >

//             <Image  width="90%" height="250px" 
//              margin="auto" 
//              borderRadius={"30px"}
//              src="https://plus.unsplash.com/premium_photo-1679079456035-aad20e7768a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60" />

//           </Box>
//         </Box>

//       </Box>
//     </Box>
//   )
// }

// export default Projects;


// {/* <Box>
//           <img />
//         </Box> */}
// {/* <Box>
//           <h3 >Product Title</h3>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis
//             sit error quasi id. Repellat rerum recusandae alias iure illo?
//             <br />
//             <span>⚙️TECH STACK :</span>
//             <br />
//             <span>HTML5 | CSS3 | JavaScript | Node.js | Express.js | MongoDB </span>
//           </p>
// <SiCss3/> <SiReact/>
//         </Box> */}
// {/* <Box>
//           <a >View Live</a>
//           <a >Source Code</a>
//         </Box> */}

// import Image from 'next/image';
import {
  Image,
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux } from "react-icons/si"


export default function Projects() {
  return (
    <Box className='nav-link projects'>

    <Heading
    mt={10}
    display={"inline-block"}
    padding="10px"
    bgGradient='linear(to-r, #25cefd, #f14d9f)' borderRadius={"15px"}
    className="tech-skill-heading"
    data-aos="fade-right">       
       MY PROJECTS
  </Heading>
    <Center py={50}>
      
        
      
      <Box
      data-aos="fade-up" display={"grid"} gridTemplateColumns={{ base: "repeat(1,1fr)", sm: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(2,1fr)" }} justifyContent="center" gap={10}>

        <Box
         boxShadow={"#618690 0px 19px 38px"}
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}

          rounded={'md'}
          p={6}
          overflow={'hidden'}
          className="project-card" >
          <Box
            h={'210px'}

            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
              height={"250px"}
              width={"100%"}
              p={4}
              borderRadius="40px"
              src={
                'https://tse2.mm.bing.net/th?id=OIP.aVd8ZpjYzIiuuAogFGBvWQHaEK&pid=Api&P=0'
              }
              layout={'fill'}
            />
          </Box>
          <Stack>
            <Text
              mt={5}
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'lg'}
              letterSpacing={1.1}
              className="project-title">
              MyGlamm (Clone)
              
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              An E-Commerce Website
            </Heading>
            <Text color={'gray.500'} className="project-description">
              MyGlamm is an  E-commerce site. This is a shopping website of cosmetic products belongs to women such as makeup product, lipstick, eyeliner, sunscreen ans many more.
            </Text>

          </Stack>

          <Center>
            <HStack
              mt={{ lg: 5, md: 5, sm: 5 }}
              spacing={3}
              px={5}
              alignItems="flex-start"
              className="project-tech-stack"
            >

              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiCss3 size="28px" />}
              />
              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"

                
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiHtml5 size="28px" />}
              />
              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiJavascript size="28px" />}
              />
              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiReact size="28px" />}
              />
            </HStack>
          </Center>
          <Center>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Button
              data-aos="fade-right"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={5}
                colorScheme={'red'}
                bgGradient='linear(to-r, #25cefd, #f14d9f)'

                _hover={{ bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)" }}
                className="project-github-link">
                CODE
              </Button>
              <Button
              data-aos="fade-left"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={5}
                colorScheme={'red'}
                bgGradient='linear(to-r, #25cefd, #f14d9f)'

                _hover={{ bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)" }}
                className="project-deployed-link" >
                LIVE
              </Button>

            </Stack>
          </Center>
        </Box>
        <Box
         boxShadow={"#618690 0px 19px 38px"}
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}

          rounded={'md'}
          p={6}
          overflow={'hidden'}
          className="project-card" >
          <Box
            h={'210px'}

            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
              height={"250px"}
              width={"100%"}
              p={4}
              borderRadius="40px"
              src={
                'https://tse2.mm.bing.net/th?id=OIP.aVd8ZpjYzIiuuAogFGBvWQHaEK&pid=Api&P=0'
              }
              layout={'fill'}
            />
          </Box>
          <Stack>
            <Text
              mt={5}
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'lg'}
              letterSpacing={1.1}
              className="project-title">
              MyGlamm (Clone)
              
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              An E-Commerce Website
            </Heading>
            <Text color={'gray.500'} className="project-description">
              MyGlamm is an  E-commerce site. This is a shopping website of cosmetic products belongs to women such as makeup product, lipstick, eyeliner, sunscreen ans many more.
            </Text>

          </Stack>

          <Center>
            <HStack
              mt={{ lg: 5, md: 5, sm: 5 }}
              spacing={3}
              px={5}
              alignItems="flex-start"
              className="project-tech-stack"
            >

              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiCss3 size="28px" />}
              />
              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"

                
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiHtml5 size="28px" />}
              />
              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiJavascript size="28px" />}
              />
              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiReact size="28px" />}
              />
            </HStack>
          </Center>
          <Center>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Button
              data-aos="fade-right"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={5}
                colorScheme={'red'}
                bgGradient='linear(to-r, #25cefd, #f14d9f)'

                _hover={{ bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)" }}
                className="project-github-link">
                CODE
              </Button>
              <Button
              data-aos="fade-left"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={5}
                colorScheme={'red'}
                bgGradient='linear(to-r, #25cefd, #f14d9f)'

                _hover={{ bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)" }}
                className="project-deployed-link" >
                LIVE
              </Button>

            </Stack>
          </Center>
        </Box>
        <Box
         boxShadow={"#618690 0px 19px 38px"}
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}

          rounded={'md'}
          p={6}
          overflow={'hidden'}
          className="project-card" >
          <Box
            h={'210px'}

            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
              height={"250px"}
              width={"100%"}
              p={4}
              borderRadius="40px"
              src={
                'https://tse2.mm.bing.net/th?id=OIP.aVd8ZpjYzIiuuAogFGBvWQHaEK&pid=Api&P=0'
              }
              layout={'fill'}
            />
          </Box>
          <Stack>
            <Text
              mt={5}
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'lg'}
              letterSpacing={1.1}
              className="project-title">
              MyGlamm (Clone)
              
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              An E-Commerce Website
            </Heading>
            <Text color={'gray.500'} className="project-description">
              MyGlamm is an  E-commerce site. This is a shopping website of cosmetic products belongs to women such as makeup product, lipstick, eyeliner, sunscreen ans many more.
            </Text>

          </Stack>

          <Center>
            <HStack
              mt={{ lg: 5, md: 5, sm: 5 }}
              spacing={3}
              px={5}
              alignItems="flex-start"
              className="project-tech-stack"
            >

              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiCss3 size="28px" />}
              />
              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"

                
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiHtml5 size="28px" />}
              />
              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiJavascript size="28px" />}
              />
              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiReact size="28px" />}
              />
            </HStack>
          </Center>
          <Center>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Button
              data-aos="fade-right"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={5}
                colorScheme={'red'}
                bgGradient='linear(to-r, #25cefd, #f14d9f)'

                _hover={{ bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)" }}
                className="project-github-link">
                CODE
              </Button>
              <Button
              data-aos="fade-left"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={5}
                colorScheme={'red'}
                bgGradient='linear(to-r, #25cefd, #f14d9f)'

                _hover={{ bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)" }}
                className="project-deployed-link" >
                LIVE
              </Button>

            </Stack>
          </Center>
        </Box>
        <Box
         boxShadow={"#618690 0px 19px 38px"}
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}

          rounded={'md'}
          p={6}
          overflow={'hidden'}
          className="project-card" >
          <Box
            h={'210px'}

            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
              height={"250px"}
              width={"100%"}
              p={4}
              borderRadius="40px"
              src={
                'https://tse2.mm.bing.net/th?id=OIP.aVd8ZpjYzIiuuAogFGBvWQHaEK&pid=Api&P=0'
              }
              layout={'fill'}
            />
          </Box>
          <Stack>
            <Text
              mt={5}
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'lg'}
              letterSpacing={1.1}
              className="project-title">
              MyGlamm (Clone)
              
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              An E-Commerce Website
            </Heading>
            <Text color={'gray.500'} className="project-description">
              MyGlamm is an  E-commerce site. This is a shopping website of cosmetic products belongs to women such as makeup product, lipstick, eyeliner, sunscreen ans many more.
            </Text>

          </Stack>

          <Center>
            <HStack
              mt={{ lg: 5, md: 5, sm: 5 }}
              spacing={3}
              px={5}
              alignItems="flex-start"
              className="project-tech-stack"
            >

              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiCss3 size="28px" />}
              />
              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"

                
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiHtml5 size="28px" />}
              />
              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiJavascript size="28px" />}
              />
              <IconButton
data-aos="zoom-in"
                variant="ghost"
                size="lg"
                bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                color="white"
                isRound={true}
                _hover={{ bg:"black" }}
                icon={<SiReact size="28px" />}
              />
            </HStack>
          </Center>
          <Center>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Button
              data-aos="fade-right"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={5}
                colorScheme={'red'}
                bgGradient='linear(to-r, #25cefd, #f14d9f)'

                _hover={{ bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)" }}
                className="project-github-link">
                CODE
              </Button>
              <Button
              data-aos="fade-left"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={5}
                colorScheme={'red'}
                bgGradient='linear(to-r, #25cefd, #f14d9f)'

                _hover={{ bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)" }}
                className="project-deployed-link" >
                LIVE
              </Button>

            </Stack>
          </Center>
        </Box>
      
        



      </Box>
     
    </Center>
    </Box>
  );
}
