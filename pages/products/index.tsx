import Footer from "@/packages/src/components/footer";
import { Header } from "@/packages/src/components/header";
import { ProductCard } from "@/packages/src/components/product-card";
import { ProductCardV2 } from "@/packages/src/components/product-card-v2";
import { ProductCardV3 } from "@/packages/src/components/product-card-v3";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
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
            ? "linear(to-b, white, gray.100)"
            : "linear(to-b, gray.800, gray.900)"
        }
      />
      <Stack textAlign={"center"} bgColor={"gray.100"}>
        <Heading>Top Selling Products</Heading>
        <HStack bgColor={"gray.100"}>
          <ProductCardV3
            price="3.5"
            product="DHT11"
            description="The DHT11 sensors can measure humidity as well as
            temperature. Only one GPIO is used. "
          />
          <ProductCardV3
            price="4"
            product="DS18B20"
            description="The DS18B20 represents a very simple sensor. These Raspberry Pi sensors are addressed via the so-called 1-wire bus. "
          />
          <ProductCardV3
            price="5.5"
            product="BMP180"
            description="The BMP180, controlled via I2C on the Raspberry Pi, helps determine the air pressure for weather stations and similar projects."
          />
          <ProductCardV3
            price="4"
            product="DS18B20"
            description="The DS18B20 represents a very simple sensor. These Raspberry Pi sensors are addressed via the so-called 1-wire bus. "
          />
        </HStack>

        <Heading>Other Products</Heading>
        <ProductCardV2 />
      </Stack>

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
