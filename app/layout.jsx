"use-client";
// import React, { Component } from 'react';
import { Navbar, Footer } from "@/components/componentindex";


import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Footer/>
        {children}
        
      </body>
    </html>
  );
}
