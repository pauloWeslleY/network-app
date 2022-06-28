import { extendTheme } from '@chakra-ui/react';
//? Dark Mode
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}
const breakpoints = {
   sm: '320px',
   md: '768px',
   lg: '960px',
   xl: '1200px',
   '2xl': '1536px',
}
// * Include custom option in here, like colors, fonts...
const customTheme = {
   components: {}
};
const colors = {
   transparent: 'transparent',
   black: 'hsl(0, 0%, 0%)',
   white: 'hsl(75, 6%, 87%)',
   white_lighten: {
      50: 'hsla(0, 0%, 100%, 0.137)',
      100: 'hsl(0, 0%, 90%)',
      150: 'hsl(210, 14%, 89%)',
      200: 'hsl(75, 6%, 87%)',
      300: 'hsla(0, 0%, 79%, 0.781)',
      400: 'hsl(150, 14%, 84%)',
   },
   gray: {
      50: 'hsl(204, 45%, 98%)',
      100: 'hsl(210, 38%, 95%)',
      200: 'hsl(214, 32%, 91%)',
      300: 'hsl(211, 25%, 84%)',
      400: 'hsl(214, 20%, 69%)',
      500: 'hsl(216, 15%, 52%)',
      600: 'hsl(218, 17%, 35%)',
      700: 'hsl(218, 23%, 23%)',
      800: 'hsl(220, 26%, 14%)',
      900: 'hsl(230, 21%, 11%)',
      950: 'hsl(218, 23%, 21%)',
      850: 'hsl(150, 2%, 49%)',
   },
   red: {
      900: 'hsl(0, 100%, 24%)',
      800: 'hsl(356, 83%, 41%)',
      700: 'hsl(350, 96%, 43%)',
      600: 'hsl(357, 62%, 24%)',
      500: 'hsl(0, 54%, 33%)',
      400: 'hsl(0, 56%, 39%)',
      300: 'hsl(0, 61%, 48%)',
      200: 'hsl(0, 76%, 57%)',
      100: 'hsl(0, 88%, 68%)',

   },
   blue: {
      900: 'hsl(207, 95%, 8%)',
      800: 'hsl(215, 56%, 23%)',
      700: 'hsl(240, 28%, 14%)',
      600: 'hsl(221, 51%, 16%)',
      500: 'hsl(211, 53%, 11%)',
      400: 'hsl(219, 37%, 17%)',
      300: 'hsl(212, 71%, 34%)',
      200: 'hsl(213, 49%, 34%)',
      100: 'hsl(197, 100%, 50%)',
      50: 'hsl(202, 81%, 86%)',
   }
}

const theme = extendTheme({
   config,
   customTheme,
   breakpoints,
   colors,
   fonts: {
      heading: 'Roboto',
      body: 'Roboto'
   },
});

export default theme;