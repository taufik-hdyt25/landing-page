import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/button";
import "@fontsource/poppins";

const myCustomTheme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  textStyles: {
    lobster: {
      fontFamily: "var(--font-Lobster)",
    },
    caladea: {
      fontFamily: "var(--font-Caladea)",
    },
    dancing: {
      fontFamily: "var(--font-dancing)",
    },
    fontEsthetic: {
      fontFamily: "var(--font-esthetic)",
    },
    fontArabic: {
      fontFamily: "var(--font-arabic)",
    },
  },
  colors: {
    primary: "var(--bg)",
    myColor: {
      primary: "var(--primary) ",
      secondary: "var(--secondary)",
      text: "var(--text)",
      bg: "var(--bg)",
      "bg-sidebar": "var(--bg-sidebar)",
      "bg-content": "var(--bg-content)",
      "text-inActive": "var(--text-inActive)",
      "bg-primary": "var(--bg-primary)",
    },
  },
  components: {
    Button,
    Text: {
      baseStyle: {
        color: "white",
      },
    },
  },
});

export default myCustomTheme;
