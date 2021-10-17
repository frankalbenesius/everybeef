import { Flex, LinkBox, LinkOverlay } from "@chakra-ui/react";

type Props = {
  id: string;
};

export const BeefSquare = ({ id }: Props) => {
  return (
    <LinkBox>
      <Flex
        p={2}
        bgColor={`#${id}`}
        minW={20}
        minH={20}
        alignItems="center"
        justifyContent="center"
        fontFamily="monospace"
        fontSize="larger"
        borderRadius="lg"
        borderWidth="medium"
        borderColor="blackAlpha.500"
        borderStyle="inset"
      >
        <LinkOverlay href={`/beefs/${id}`}>{id}</LinkOverlay>
      </Flex>
    </LinkBox>
  );
};
