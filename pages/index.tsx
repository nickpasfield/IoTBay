import Footer from "@/packages/src/components/footer";
import { Header } from "@/packages/src/components/header";
import Main from "@/packages/src/components/main-feat";
import Stats from "@/packages/src/components/stats-feat";
import Notes from "@/packages/src/components/three-feats";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Highlight,
  HStack,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiRightArrowCircle } from "react-icons/bi";
import { useRouter } from "next/router";
import Fade from "@/packages/src/framer-motion/fade-in";

export default function CallToActionWithVideo() {
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <>
      <Stack bgGradient={"linear(to-tr, pink.200, green.100, pink.200)"}>
        <Header />
        <Stack align={"center"}>
          <Container maxW={"7xl"} mb={10}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Stack
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 18 }}
                direction={{ base: "column", md: "row" }}
                mb={20}
              >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                  <Stack spacing={10}>
                    <Heading
                      lineHeight={1.1}
                      fontWeight={600}
                      fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                    >
                      <Text as={"span"} position={"relative"}>
                        <Highlight
                          query="IoTBay"
                          styles={{
                            px: "3",
                            py: "1",
                            rounded: "full",
                            bgGradient: "linear(to-l, teal.300, pink.400)",
                          }}
                        >
                          IoTBay,
                        </Highlight>
                      </Text>

                      <br />
                      <Text
                        as={"span"}
                        bgGradient="linear(to-l, teal.400, pink.600)"
                        bgClip="text"
                        fontSize="5xl"
                      >
                        your online IoTBay Store!
                      </Text>
                    </Heading>

                    <Text fontWeight="bold">
                      Your one-stop-shop for all your utting-edge devices and
                      sensors that are perfect for home automation, industrial
                      control, and much more. Shop with us today and join the
                      IoT revolution!
                    </Text>

                    <Stack
                      mt={10}
                      spacing={{ base: 4, sm: 6 }}
                      direction={{ base: "column", sm: "row" }}
                    >
                      <motion.div
                        className="box"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Button
                          rounded={"full"}
                          size={"lg"}
                          fontWeight={"normal"}
                          px={6}
                          bgGradient="linear(to-l, teal.200, pink.400)"
                          _hover={{
                            bgGradient: "linear(to-r, red.500, yellow.500)",
                          }}
                          rightIcon={<BiRightArrowCircle />}
                          onClick={() => router.push("/contacts")}
                        >
                          <Text fontWeight="bold">Get started</Text>
                        </Button>
                      </motion.div>
                      <motion.div
                        className="box"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Button
                          rounded={"full"}
                          size={"lg"}
                          fontWeight={"normal"}
                          px={6}
                          colorScheme="gray"
                          rightIcon={<AiOutlineQuestionCircle />}
                        >
                          How It Works
                        </Button>
                      </motion.div>
                    </Stack>
                  </Stack>
                  <Divider borderColor={"teal"} />

                  <Stack spacing={1}>
                    <Text
                      bgGradient="linear(to-l, purple.600, pink.400)"
                      bgClip="text"
                      fontWeight="medium"
                    >
                      Leveraging cutting-edge technology
                    </Text>
                  </Stack>
                </Stack>
                <Flex
                  flex={1}
                  justify={"center"}
                  align={"center"}
                  position={"relative"}
                  w={"full"}
                >
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      default: {
                        duration: 0.6,
                        ease: [0, 0.71, 0.2, 1.01],
                      },
                      scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001,
                      },
                    }}
                  >
                    <Box
                      position={"relative"}
                      height={"700px"}
                      rounded={"2xl"}
                      boxShadow={"2xl"}
                      width={"full"}
                      overflow={"hidden"}
                    >
                      <Image
                        alt={"Hero Image"}
                        fit={"cover"}
                        align={"center"}
                        w={"100%"}
                        h={"100%"}
                        src={
                          "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                        }
                      />
                    </Box>
                  </motion.div>
                </Flex>
              </Stack>
            </motion.div>
            <Notes />
            <Box h={10} />
            <Main />
          </Container>
        </Stack>
        <Stats />
        <Footer />
      </Stack>
    </>
  );
}
