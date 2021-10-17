import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { App } from "./App";

const root = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  root
);
