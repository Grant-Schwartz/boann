import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    800: "#13284F",
    700: "#274682",
    600: "#4169B5",
    500: "#6190E8",
    400: "#ACC8FC",
    300: "#F0F5FF"
  },
}

const fonts = {
  heading: "Inter",
  body: "Inter"
}

const components = {
  Heading: {
    baseStyle: {
      letterSpacing: "-0.05em"
    }
  }
}

const theme = extendTheme({ colors, fonts, components });

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
