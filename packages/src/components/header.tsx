import {
  AddIcon,
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { ReactNode } from "react";

const Links = ["Home", "Products", "Contacts", "FAQ"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={children === "Home" ? "/" : `/${children?.toString().toLowerCase()}`}
    fontWeight="bold"
  >
    {children}
  </Link>
);

export const Header: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { colorMode, toggleColorMode } = useColorMode();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <Box>
      <Flex
        minH={"90px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        borderStyle={"solid"}
        borderColor={"teal.400"}
      >
        <Box pos="absolute">
          {colorMode === "light" ? (
            <Image
              src={`/IoTBay-1.png`}
              alt="logo"
              width={230}
              height={230}
              priority={true}
            />
          ) : (
            <Image
              src={`/IoTBay-1.png`}
              alt="logo"
              width={230}
              height={230}
              priority={true}
            />
          )}
        </Box>

        <HStack spacing={8} alignItems={"center"} ml={5}>
          <HStack
            as={"nav"}
            spacing={16}
            display={{ base: "none", md: "flex" }}
            ml={240}
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>

        <Flex alignItems={"center"}>
          <Button
            variant={"solid"}
            colorScheme={"teal"}
            size={"sm"}
            mr={10}
            onClick={() => router.push("/login")}
          >
            Login / Register
          </Button>

          <IconButton
            mr={5}
            size={"sm"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
