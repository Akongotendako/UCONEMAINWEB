import { createSystem, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      backgroundColor: "#121A21",
      fontFamily: `"Plus Jakarta Sans", sans-serif`,
      width: "100%",
      height: "100vh"
    }
  },
  theme: {
    tokens: {
      colors: {
        danger: { value: "{colors.red}" },
      },
      fontSizes: {
        sm: {value: "0.875rem"},
        md: {value: "1rem"},
        lg: {value: "1.125rem"},
        xl: {value: "1.25rem"},
        "2xl": {value: "1.5rem"},
      }
    },
  },
  
})

export const system = createSystem(config)