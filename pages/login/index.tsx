import Footer from "@/packages/src/components/footer";
import { Header } from "@/packages/src/components/header";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Contacts() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Header />
      <Box
        w="100%"
        h="80px"
        bgGradient={
          colorMode === "light"
            ? "linear(to-b, white, gray.50)"
            : "linear(to-b, gray.800, gray.900)"
        }
      />
      <Flex
        minH={"60vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Box
        w="100%"
        h="100px"
        bgGradient={
          colorMode === "light"
            ? "linear(to-b, gray.50, white)"
            : "linear(to-t, gray.900, gray.900)"
        }
      />
      <Footer />
    </>
  );
}
