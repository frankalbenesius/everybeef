import { Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { BeefSquare } from "../components/BeefSquare";
import { getAllBeefs } from "../util/getAllBeefs";

export const IndexPage = () => {
  const beefs = getAllBeefs();
  return (
    <Box>
      <Heading textAlign="center" py={4}>
        every beef
      </Heading>
      <Wrap spacing={1} justify="center">
        {beefs.map((beef) => (
          <WrapItem key={beef}>
            <BeefSquare id={beef} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};
