import { Box, Heading, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllBeefs } from "../util/getAllBeefs";

const allBeefs = getAllBeefs();

export const BeefPage = () => {
  const { id } = useParams<{ id: string }>();
  const isValidBeef = allBeefs.includes(id || "");

  useEffect(() => {
    if (id && isValidBeef) {
      document.title = id;
    }
  }, [isValidBeef, id]);

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
