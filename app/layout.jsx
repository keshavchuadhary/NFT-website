// pages/_app.js
"use client";
import "./globals.css"; // Adjust the path if necessary
import Navbar from "@/components/Navbar/Navbar"; // Ensure this path is correct

import React from 'react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
