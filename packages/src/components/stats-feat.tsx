import { ReactNode } from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";

export default function StatsGridWithImage() {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "gray.800" : "gray.600"}
      position={"relative"}
    >
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage={`/lp-background2.jpg`}
        backgroundSize={"cover"}
        backgroundPosition="left"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"50%"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={
            colorMode === "light"
              ? "linear(to-r, gray.800 10%, transparent)"
              : "linear(to-r, gray.600 10%, transparent)"
          }
          w={"full"}
          h={"full"}
        />
      </Flex>
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"gray.400"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 40 }}
          >
            <Box mb={{ base: 8, md: 5 }}>
              <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"gray.500"}
              >
                Technology
              </Text>
              <Heading
                color={"white"}
                mb={5}
                fontSize={{ base: "3xl", md: "3xl" }}
              ></Heading>
              <Text fontSize={"md"} color={"gray.400"}></Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={"heading"}
                    fontSize={"3xl"}
                    color={"white"}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={"md"} color={"gray.400"}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "~ 1.44s",
    content: (
      <>
        <StatsText>Test</StatsText> test
      </>
    ),
  },
  {
    title: "24/7",
    content: (
      <>
        <StatsText>Test</StatsText> test
      </>
    ),
  },
  {
    title: "100%",
    content: (
      <>
        <StatsText>Test</StatsText> test
      </>
    ),
  },
  {
    title: "10k+",
    content: (
      <>
        <StatsText>Test</StatsText> test
      </>
    ),
  },
];
