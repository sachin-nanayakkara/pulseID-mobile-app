import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ThemeProvider} from "styled-components";

import './index.css'
import App from './App.tsx'

import theme from "./theme";
import store from './redux/store.ts';
import { Provider } from 'react-redux';
import { CustomThemeProvider } from './utils/contexts/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CustomThemeProvider>
            <App/>
          </CustomThemeProvider>
        </ThemeProvider>
      </Provider>
      </ThemeProvider>
    </StrictMode>,
)
