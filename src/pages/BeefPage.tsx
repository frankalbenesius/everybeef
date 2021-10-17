import { Box, Heading, Center } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router";
import { getAllBeefs } from "../util/getAllBeefs";

const allBeefs = getAllBeefs();

export const BeefPage = () => {
  const { id } = useParams<{ id: string }>();
  const isValidBeef = allBeefs.includes(id);

  if (!isValidBeef) {
    return (
      <Box>
        <Heading textAlign="center" py={4}>
          this is not a beef and you should be ashamed of yourself
        </Heading>
      </Box>
    );
  }

  return (
    <Box bg={`#${id}`}>
      <Heading textAlign="center" py={4}>
        {id}
      </Heading>
    </Box>
  );
};
