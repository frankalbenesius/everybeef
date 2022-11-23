import { Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
  Outlet,
} from "react-router-dom";
import { BeefifyPage } from "./pages/BeefifyPage";
import { BeefPage } from "./pages/BeefPage";
import { IndexPage } from "./pages/IndexPage";

const Root = () => {
  return (
    <Container maxW="container.lg">
      <Outlet />
    </Container>
  );
};

const ErrorPage = () => {
  return (
    <Container maxW="container.lg">
      <Heading>404</Heading>
      <Text>Beef not found.</Text>
    </Container>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "beefs/:id",
        element: <BeefPage />,
      },
      {
        path: "beefify",
        element: <BeefifyPage />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
