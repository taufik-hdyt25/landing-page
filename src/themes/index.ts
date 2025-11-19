import { extendTheme, type ThemeOverride } from "@chakra-ui/react";
import { Button } from "./components/button";
import { Text } from "./components/text";
import { Link } from "./components/Link";

const myCustomTheme: ThemeOverride = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "var(--font-fontText)",
    body: "var(--font-poppins)",
    poppins: "var(--font-poppins)",
    "font.title": "var(--font-fontText)",
  },
  colors: {
    myColor: {
      "bg-primary": "var(--bg-primary)",
      primary: "var(--primary)",
      "text-primary": "var(text-primary)",
    },
  },
  components: {
    Button,
    Text,
    Link,
  },
});

export default myCustomTheme;
