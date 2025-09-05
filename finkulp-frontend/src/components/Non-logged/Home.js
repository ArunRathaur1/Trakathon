import React, { useEffect } from "react";
import vid from '../../Animations/landingpage1.mp4';
import TradingLaptop from '../../Animations/TradingLaptop.png';
import TradingPhone from '../../Animations/TradingPhone.png';
import iamge from './home.jpg';
import YouGet from './YouGet';
import StepPage from "./StepPage";
import Stats from "./Stats";
import Stats2 from "./Stats2";
import WhatPeopleSay from "./whatPeopleSay";
import Code from '../../Animations/codetyping.mp4';
import FAQ from './FAQ';
import Navbar from "./Nevbar";
import { useState } from "react";
import ResourcesHome from "./Resources/ResourcesHome";
import '../../CSS/Algoshopping.css';

const Home = () => {
  const words = ["Hello!", "Welcome to Dhanrashi!"];
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150); // Slow down typing speed (e.g., 150ms per character)
  const [list, setlist] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setCurrentWord(prev => 
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentWord === fullText) {
        setTimeout(() => setIsDeleting(true), 500); // Pause after typing finishes
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, typingSpeed, words]);

  return (
    <>
      <nav style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#333', width: '100%' }}>
        {list &&
          <div style={{ position: 'absolute', zIndex: "10001", left: '715px', top: '50px' }}>
            <ResourcesHome></ResourcesHome>
          </div>}

        <Navbar setlist={setlist} list={list}></Navbar>
      </nav>

      <div style={{ position: "absolute", top: "60px", zIndex: "100", left: "500px", overflow: "hidden" }}>
        <div className="w-full h-full flex justify-center items-center" style={{ marginTop: '100px' }}>
          <h1 id="typewriter" className="text-4xl font-bold"></h1>
        </div>
      </div>

      <div className="relative bg-black pb-[110px] pt-[120px] dark:bg-black lg:pt-[150px]" style={{ position: "relative", zIndex: 1 }}>
        <div className="container" style={{ marginTop: "-50px" }}>
          <div style={{ display: 'flex', justifyContent: "center" }}>
            <div style={{ width: "70%" }}>
              <div className="my-10" style={{ textAlign: 'center' }}>
                <div className="mb-5 text-4xl font-bold !leading-[1.208] text-black dark:text-yellow-500 xl:text-5xl my-10" style={{ marginTop: "100px" }}>
                  Empowering Rural People for a Brighter Future
                </div>
                <div className="text-4xl font-bold text-black dark:text-yellow-200 xl:text-5xl" style={{ marginBottom: "30px", height: "30px" }}>
                  {currentWord}
                </div>
                <div className="text-yellow-500" style={{ marginBottom: "30px" }}>
                  A Platform for Financial Literacy, Micro-Investments, and Community Support
                </div>
                <a
                  href="/#"
                  className="Featuresbutton inline-flex items-center justify-center rounded-md px-6 py-3 text-center text-base font-medium text-white hover:bg-yellow-600 lg:px-7"
                  style={{ color: "black" ,background:"yellow"}}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div style={{width:"100%",position:'absolute',top:"0px",left:"0px"}}>
            <img 
              src={iamge} 
              style={{ 
                position: "relative", 
                top:"100px",
                zIndex: "-1", 
                filter: "blur(8px)", // Apply the blur effect to the image
                width: "100%",
                height:"100vh",
                objectFit:"cover" // Ensure the image spans the full width
              }} 
            />
          </div>
        </div>
      </div>

      <div style={{ overflow: 'hidden' ,marginTop:"250px"}}>
        {/* <StepPage></StepPage>
        <YouGet></YouGet> */}
        {/* <Stats></Stats>
        <Stats2></Stats2> */}
        {/* <WhatPeopleSay></WhatPeopleSay> */}
        <FAQ></FAQ>
      </div>
    </>
  );
};

export default Home;
