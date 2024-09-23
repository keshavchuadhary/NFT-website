'use client';
import React from 'react'

//INTERNAL IMPORT 
import Style from "./index.module.css";
import { HeroSection } from '../components/componentindex';
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
    </div>
    
  )
}

export default Home