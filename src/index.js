import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import custom_theme from './styles/theme';

ReactDOM.render(
  <ChakraProvider theme={custom_theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

