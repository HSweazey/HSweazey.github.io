import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // This points directly to your app folder in the root
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    // This points to your components folder in the root
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#1E3A5F', 
          800: '#2C4A75',
        },
        lightBlue: {
          50: '#E3F2FD', 
          100: '#BBDEFB',
        },
        action: '#1976D2',
      },
    },
  },
  plugins: [],
};
export default config;