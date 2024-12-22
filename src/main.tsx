import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ThemeProvider} from "styled-components";

import './index.css'
import App from './App.tsx'

import theme from "./theme";
import store from './store.ts';
import { Provider } from 'react-redux';
// import { Provider } from 'react-redux';
// import store from './store.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
      </Provider>,
    </StrictMode>,
)
