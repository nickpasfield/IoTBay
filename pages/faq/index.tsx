import Footer from "@/packages/src/components/footer";
import Header from "@/packages/src/components/header";
import Main from "@/packages/src/components/main-feat";
import Stats from "@/packages/src/components/stats-feat";
import { Stack, useColorMode } from "@chakra-ui/react";

export default function CallToActionWithVideo() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Header />
      <Stack align={"center"} spacing={10}>
        <Main />
        <br />
        <br />
      </Stack>
      <Stats />
      <Footer />
    </>
  );
}
