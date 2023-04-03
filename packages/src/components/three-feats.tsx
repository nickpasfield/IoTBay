import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcAssistant, FcBullish, FcTreeStructure } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize="xl">
        {title}
      </Text>
      <Text color={useColorModeValue("gray.600", "gray.400")}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Test"}
          text={"Test"}
        />
        <Feature
          icon={<Icon as={FcBullish} w={10} h={10} />}
          title={"Test"}
          text={"Test"}
        />
        <Feature
          icon={<Icon as={FcTreeStructure} w={10} h={10} />}
          title={"Test"}
          text={"Test"}
        />
      </SimpleGrid>
    </Box>
  );
}
