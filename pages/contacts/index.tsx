import Footer from "@/packages/src/components/footer";
import { Header } from "@/packages/src/components/header";
import Contact from "@/packages/src/components/contact-form-info";

import { Box, useColorMode } from "@chakra-ui/react";

export default function Contacts() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Header />

      <Box
        w="100%"
        h="50px"
        bgGradient={
          colorMode === "light"
            ? "linear(to-b, white, gray.100)"
            : "linear(to-b, gray.800, gray.900)"
        }
      />
      <Contact />
      <Box
        w="100%"
        h="100px"
        bgGradient={
          colorMode === "light"
            ? "linear(to-b, gray.100, white)"
            : "linear(to-t, gray.900, gray.900)"
        }
      />
      <Footer />
    </>
  );
}
