import Footer from "@/packages/src/components/footer";
import Header from "@/packages/src/components/header";
import Stats from "@/packages/src/components/stats-feat";
import Showcase from "@/packages/src/components/showcase-feat";

import { Box, Stack, useColorMode } from "@chakra-ui/react";

export default function CallToActionWithVideo() {
  return (
    <>
      <Stack
        bgGradient={"linear(to-tr, pink.200, green.100, pink.200)"}
        spacing={0}
      >
        <Header />
        <Box height={7} bgGradient={"linear(to-b, transparent, gray.300)"} />
        <Stack align={"center"} spacing={10}>
          <Showcase />
        </Stack>
        <Box height={7} bgGradient={"linear(to-t, transparent, gray.300)"} />
        <Footer />
      </Stack>
    </>
  );
}
