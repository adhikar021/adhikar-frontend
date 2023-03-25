import {
  Button,
  Container,
  Heading,
  HStack,
  Img,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../mainSection/Data";

const SchemeDetails = () => {
  const param = useParams();
  const schemeData = data[param.id];
  return (
    <>
      {/* scheme flare */}
      <Img src={schemeData.flare} w="100%" h="100%" paddingTop={"60px"}/>

      <VStack
        maxW={["auto", "1080px"]}
        margin={["0 auto 4rem auto", "0 auto 4rem auto"]}
        gap={"1rem"}
        alignItems={"flex-start"}
        p={["0 1rem", "0 2rem"]}
      >
        {/* scheme title and logo */}
        <HStack
          justifyContent={"flex-start"}
          alignItems={"center"}
          p={["1rem 0", "2rem 0"]}
        >
          {" "}
          <Img src={schemeData.img} w={["0px", "100px"]} />
          <Heading fontSize={["1.5rem", "1.5rem", "2rem", "2.3rem"]}>
            {schemeData.name}
          </Heading>
        </HStack>
        {/* About this program */}
        <Container maxW={"1080px"}>
          <Heading fontSize={["1.5rem", "1.7rem"]} paddingBottom={"1rem"}>
            About the program
          </Heading>
          <Text>{schemeData.desc}</Text>
        </Container>

        {/* Scheme Eligibility */}
        <Container maxW={"1080px"}>
          <Heading fontSize={["1.5rem", "1.7rem"]} paddingBottom={"1rem"}>
            Eligibility
          </Heading>
          <UnorderedList>
            {schemeData.eligibility.map((e) => {
              return <ListItem>{e}</ListItem>;
            })}
          </UnorderedList>
        </Container>
        <Container maxW={"1080px"}>
          <Heading fontSize={["1.5rem", "1.7rem"]} paddingBottom={"1rem"}>
            Documents
          </Heading>
          <UnorderedList>
            {schemeData.requiredDocuments.map((e) => {
              return <ListItem>{e}</ListItem>;
            })}
          </UnorderedList>
        </Container>
        <Container maxW={"1080px"}>
          <Heading fontSize={["1.5rem", "1.7rem"]} paddingBottom={"1rem"}>
            How can you apply?
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

        <Text fontWeight="bold">Note - {schemeData.note}</Text>
        <a href={schemeData.link}>
        <Button variant="solid" colorScheme="blue" m={"0 1rem"}>
          Apply Now
        </Button></a>
      </VStack>
    </>
  );
};

export default SchemeDetails;
