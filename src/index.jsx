import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from './styles/theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
   <ChakraProvider theme={theme}>
      <StrictMode>
         <ColorModeScript initialColorMode={theme.config.initialColorMode} />
         <App />
      </StrictMode>
   </ChakraProvider>
);
