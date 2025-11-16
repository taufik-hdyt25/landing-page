"use client";

import myCustomTheme from "@/themes";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Fragment, ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

interface IProps {
  children: ReactNode;
}

const Providers: React.FC<IProps> = ({ children }) => {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <ColorModeScript initialColorMode="light" />
        <ChakraProvider theme={myCustomTheme}>{children}</ChakraProvider>
      </QueryClientProvider>
    </Fragment>
  );
};

export default Providers;
