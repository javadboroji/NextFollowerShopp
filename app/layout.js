 'use client'
 import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "./store/store";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <Head>  
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      </Head>
  
      <body className={inter.className}>
      <Provider store={store}>
        {children}
        </Provider>
        </body>
    </html>
  );
}
