import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "source-code": ['"Source Code Pro"', "monospace"],
      },
      colors: {
        foreground: "var(--foreground)",
        background: {
          blue: "#4A90E2",
          gray: "#212121"
        },
        text: "#e2e2e2",
        accent: {
          pink: "#ff69b4",
          green: "#39ff14",
          blue: "#1e90ff",
          yellow: "#f7e018",
          purple: "#8a2be2",
          orange: "#ff4500",
        },
      },
    },
  },
  corePlugins: {
    overflow: false,
    maxHeight: false,
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
