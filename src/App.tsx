import { Container, Heading, Wrap, WrapItem } from "@chakra-ui/layout";
import { Beef } from "./components/Beef";
import { getAllBeefs } from "./util/getAllBeefs";

export function App() {
  const beefs = getAllBeefs();
  return (
    <Container maxW="container.lg">
      <Heading textAlign="center" py={4}>
        every beef
      </Heading>
      <Wrap spacing={1} justify="center">
        {beefs.map((beef) => (
          <WrapItem key={beef}>
            <Beef id={beef} />
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
}
