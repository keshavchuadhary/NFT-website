"use-client";
// import React, { Component } from 'react';
import { Navbar, Footer, Service, BigNFTSlider } from "@/components/componentindex";



import "./globals.css";





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body>
      <Navbar/>
      {children}
      <Service/>
      <BigNFTSlider/>
      <Footer/>
        
      </body>
    </html>
  );
}
