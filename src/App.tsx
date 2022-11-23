import { Container } from "@chakra-ui/react";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
  Outlet,
} from "react-router-dom";
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
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/beefs/:id",
    element: <BeefPage />,
  },
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
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
