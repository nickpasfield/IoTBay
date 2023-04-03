import React from "react";
import { Box } from "@chakra-ui/react";

export const PageSpacer: React.FC<{
  isCentered?: boolean;
  isSmaller?: boolean;
  children: React.ReactNode;
}> = ({ isCentered = false, isSmaller = false, children }) => {
  if (isCentered) {
    return (
      <Box margin={"0 auto"} maxW={isSmaller ? "800px" : "1300px"}>
        <Box mt={[2, 2, 4]} mx={[2, 2, 4]}>
          {children}
        </Box>
      </Box>
    );
  }
  return (
    <Box mt={[2, 2, 4]} mx={[2, 2, 4]}>
      {children}
    </Box>
  );
};
