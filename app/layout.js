 'use client'
 import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "./store/store";
 import {createTheme} from "@mui/material/styles";
 import  createGlobalStyle  from '@emotion/react';
 import { ThemeProvider } from '@emotion/react';
 import stylisRTL from 'stylis-plugin-rtl';
const inter = Inter({ subsets: ["latin"] });


 // const globalStyle = createGlobalStyle();
 // globalStyle.addGlobal(stylisRTL.create());
export default function RootLayout({ children }) {

    const theme = createTheme({
        direction: 'rtl',
        typography: {
            fontFamily: 'iranSans',
        },
        components: {
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        direction: 'rtl',
                    },
                },
            },
            MuiInput: {
                styleOverrides: {
                    root: {
                        fontFamily: 'iranSans',
                    },
                },
            },
        },
    })

  return (
    <html lang="en" dir='rtl'>
       
      <Head>  
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      </Head>
  
      <body className={inter.className}>
      <ThemeProvider theme={theme}>


              <Provider store={store}>
                  {children}
              </Provider>


      </ThemeProvider>
      </body>

    </html>
  );
}
