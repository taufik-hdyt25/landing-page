import { extendTheme, type ThemeOverride } from "@chakra-ui/react";
import { Button } from "./components/button";
import { Text } from "./components/text";

const myCustomTheme: ThemeOverride = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "var(--font-fontText)",
    body: "var(--font-poppins)",
    poppins: "var(--font-poppins)",
  },
  colors: {
    myColor: {
      "bg-primary": "var(--var-bg-primary)",
    },
  },
  components: {
    Button,
    Text: Text,
  },
});

export default myCustomTheme;
