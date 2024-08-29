"use-client";
// import React, { Component } from 'react';
import { Navbar } from "@/components/componentindex";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Navbar/>
      </body>
    </html>
  );
}