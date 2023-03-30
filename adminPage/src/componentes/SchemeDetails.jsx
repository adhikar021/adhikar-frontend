import {
    Button,
    Container,
    Divider,
    Heading,
    Img,
    ListItem,
    Stack,
    Text,
    UnorderedList,
    VStack,
  } from "@chakra-ui/react";
import axios from "axios";
  import React, { useEffect, useState } from "react";
import { server } from "../main";
  import { data } from "./Data";
  
  const SchemeDetails = ({id}) => {

  const [schemeData, setSchemeData] = useState(data[0])

//   console.log(id)

useEffect( ()=>{
  try {
    
    axios
        .get(`${server}/scheme/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          const scheme = res.data.scheme;
          setSchemeData(scheme)
        })
        .catch((error) => {
          console.log(error) 
        });
  } catch (error) {
    console.log(error.message)
  }
})

    return (
      <div className="scheme-details">
        {/* scheme flare */}
        <Img src={schemeData.flare} w="100%" h="auto" paddingTop={"60px"}/>
  
        <VStack
          maxW={["auto", "1080px"]}
          margin={["0 auto 4rem auto", "0 auto 4rem auto"]}
          gap={"1rem"}
          alignItems={"flex-start"}
          p={["0 1rem", "0 2rem"]}
        >
          {/* scheme title and logo */}
          <Stack
            justifyContent={"flex-start"}
            alignItems={"center"}
            p={["1rem 0", "2rem 0"]}
            direction={['column', 'row']}
          >
            {" "}
            <Img src={schemeData.img} w={["100px", "100px"]}  />
            <Heading fontSize={["1.5rem", "1.5rem", "2rem", "2.3rem"]} textAlign={["center", "start"]}>
              {schemeData.title}
            </Heading>
          </Stack>
          {/* About this program */}
          <Container maxW={"1080px"}>
            <Heading fontSize={["1.5rem", "1.7rem"]} paddingBottom={"1rem"}>
              About the program
            </Heading>
            <Text>{schemeData.description}</Text>
          </Container>
          <Divider />
          {/* Scheme Eligibility */}
          <Container maxW={"1080px"}>
            <Heading fontSize={["1.5rem", "1.7rem"]} paddingBottom={"1rem"}>
            Eligibility Criteria
            </Heading>
            <UnorderedList>
              {schemeData.eligibility.map((e) => {
                return <ListItem>{e}</ListItem>;
              })}
            </UnorderedList>
          </Container>
          <Divider />
          <Container maxW={"1080px"}>
            <Heading fontSize={["1.5rem", "1.7rem"]} paddingBottom={"1rem"}>
            Documents Required
            </Heading>
            <UnorderedList>
              {schemeData.requiredDocuments.map((e) => {
                return <ListItem>{e}</ListItem>;
              })}
            </UnorderedList>
          </Container>
          <Divider />
          <Container maxW={"1080px"}>
            <Heading fontSize={["1.5rem", "1.7rem"]} paddingBottom={"1rem"}>
            How to apply
            </Heading>
            <VStack alignItems={"flex-start"}>
              {schemeData.steps.map((e, index) => {
                return (
                  <Text>
                    <strong>Step {index + 1}: </strong>
                    <spam>{e}</spam>
                  </Text>
                );
              })}
            </VStack>
          </Container>
          <Divider />
          <Text fontWeight="bold">Note - {schemeData.note}</Text>
          <a href={schemeData.link}>
          <Button variant="solid" colorScheme="blue" m={"0 1rem"}>
            Apply Now
          </Button></a>
        </VStack>
      </div>
    );
  };
  
  export default SchemeDetails;
  