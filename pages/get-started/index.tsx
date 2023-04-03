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

export default function CallToActionWithVideo() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Stack bgGradient={"linear(to-tr, pink.200, green.100, pink.200)"}>
        <Header />

        <Main />
        <Footer />
      </Stack>
    </>
  );
}
