import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as Li, Navigate as Nav, useNavigate } from "react-router-dom";
import { server } from "../..";
import { toast, Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useRef();
  const { login } = useSelector((state) => state.user);
  let navigate = useNavigate();

  /* ================ create user ===============*/
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: form.current.firstName.value + " " + form.current.lastName.value,
      email: form.current.email.value,
      password: form.current.password.value,
    };
    try {
      const response = await fetch(`${server}/users/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      if (json.success) {
        toast.success("Account created");
        navigate(`/login`)
      } else {
        console.log(json);
        toast.error(json.message);
      }
    } catch (error) {
      toast.error("some error occure try after some time");
    }
  };

  // redirect to login page after singup 
 

  // redirect to home page if users is loged in
  if (login) {
    return <Nav to={`/`} />;
  }
  

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.50"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
          <form onSubmit={handleSubmit} ref={form}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" name="firstName" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" name="lastName" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type={"submit"}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Li to="/login">
                    <Link color={"blue.400"}>Login</Link>
                  </Li>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Toaster position="top-center" reverseOrder={false} />
    </Flex>
  );
}
