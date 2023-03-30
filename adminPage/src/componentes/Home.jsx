import {Container,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
import { server } from "../main";



const Home = () => {

    const [schemes, setSchemes] = useState([]);
  
  
  
    useEffect(() => {
        axios
        .get(`${server}/scheme/getAll`, {
          withCredentials: true,
        })
        .then((res) => {
          const userData = res.data.schemes;
          console.log(userData)
          setSchemes(userData)
        })
        .catch((error) => {
          console.log(error) 
        });
    },[]);
  
  return (
    <div>
      <SimpleGrid
      columns={[1, 1, 2, 2, 2]} spacing='10'
        m={[0, 0, 0, "auto"]}
        maxW={["auto","auto","auto", "1080px"]}
        p={"2rem 0"}
        placeItems={"center"}
      >
        {schemes.map((e, index) => {
          return (
            <Card maxW={["md","lg","md","lg","lg",]}>
              <CardBody>
                <Image
                  src={e.flare}
                  alt={e.name}
                  borderRadius="lg"
                  w={"auto"}
                  h={["auto","156px"]}
                  m={[ "auto"]}
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" noOfLines={1}>
                    {e.title}
                  </Heading>
                  <Text noOfLines={3}>{e.description}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Link to={`/setScheme/${e._id}`}>
                    <Button variant="solid" colorScheme="blue">
                      More Info
                    </Button>
                  </Link>
                  <a href={e.link} target={"blank"}>
                    <Button variant="ghost" colorScheme="blue">
                      Apply Now
                    </Button>
                  </a>
                </ButtonGroup>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default Home;
