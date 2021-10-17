import {
  Box,
  Heading,
  Wrap,
  WrapItem,
  Stack,
  Button,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router";
import { BeefSquare } from "../components/BeefSquare";
import { getAllBeefs } from "../util/getAllBeefs";

const allTheBeefs = getAllBeefs();

export const IndexPage = () => {
  return (
    <Box>
      <Heading textAlign="center" py={4}>
        every beef
      </Heading>
      <Center mb={4}>
        <ImFeelingLuckyButton />
      </Center>
      <Wrap spacing={1} justify="center">
        {allTheBeefs.map((beef) => (
          <WrapItem key={beef}>
            <BeefSquare id={beef} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

const ImFeelingLuckyButton = () => {
  const history = useHistory();

  const handleClick = () => {
    const idx = Math.floor(Math.random() * allTheBeefs.length);
    const randomBeef = allTheBeefs[idx];
    history.push(`/beefs/${randomBeef}`);
  };

  return (
    <Button onClick={handleClick} colorScheme="purple">
      I'm Feeling Lucky
    </Button>
  );
};
