import { Box, Heading, Flex, Text, Link } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link as RRLink, useParams } from "react-router-dom";
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
    <Flex
      padding={4}
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      gap={4}
    >
      <Heading bg={`#${id}`} textAlign="center" p={4}>
        {id}
      </Heading>
      <Text>Truly one of our finest beefs.</Text>
      <Link as={RRLink} to="/" css={{ color: "#22beef" }}>
        Let's see some more beefs.
      </Link>
    </Flex>
  );
};
