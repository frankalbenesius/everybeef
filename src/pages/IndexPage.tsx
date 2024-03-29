import { Box, Heading, Wrap, WrapItem, Button, Center } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BeefSquare } from "../components/BeefSquare";
import { getAllBeefs } from "../util/getAllBeefs";

const allTheBeefs = getAllBeefs();

export const IndexPage = () => {
  return (
    <Box>
      <Heading textAlign="center" py={4}>
        every beef
      </Heading>
      <Center mb={4} gap={2}>
        <ImFeelingLuckyButton />
        <Button as={Link} to="/beefify" bgColor="#ffbeef">
          Beefify an Image
        </Button>
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
  const navigate = useNavigate();

  const handleClick = () => {
    const idx = Math.floor(Math.random() * allTheBeefs.length);
    const randomBeef = allTheBeefs[idx];
    navigate(`/beefs/${randomBeef}`);
  };

  return (
    <Button onClick={handleClick} bgColor="#b4beef">
      I'm Feeling Lucky
    </Button>
  );
};
