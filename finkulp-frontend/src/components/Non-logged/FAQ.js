import React, { useState } from "react";
import BlueBackground4 from '../../Animations/BlueBackground2.jpg';
const url="https://static.vecteezy.com/system/resources/thumbnails/006/201/844/small_2x/abstract-background-with-black-and-yellow-color-combination-gold-color-combination-vector.jpg"

export default function FAQ() {
  const [isHindi, setIsHindi] = useState(true);

  const toggleLanguage = () => {
    setIsHindi(!isHindi);
  };

  return (
    <div style={{ 
        background: `url(${url}) no-repeat center center`,  
        backgroundSize: 'cover', // Ensures the image covers the screen
        paddingTop: '50px', 
        marginTop: '-30px', 
        paddingBottom: "100px", 
        color: 'white' // Default text color to white for better contrast with black/yellow theme
    }}>
      <div className="container mx-auto px-4">
        <section className="mt-10">
          <h3 className="text-center mb-4 pb-2 text-yellow-400 font-bold text-3xl">
            Frequently Asked Questions
          </h3>
          
          {/* Language Toggle Button */}
          <div className="text-center mb-5">
            <button 
              onClick={toggleLanguage} 
              className="bg-yellow-400 text-black py-2 px-4 rounded"
            >
              {isHindi ? 'Translate to English' : 'हिंदी में अनुवाद करें'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <h6 className="mb-3 text-yellow-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 4L12 14.01l-3-3" />
                </svg>
                {isHindi ? "फिंकुल्प क्या है, और यह कैसे काम करता है?" : "What is Finkulp, and how does it work?"}
              </h6>
              <p style={{ color: 'yellow' }}>
                {isHindi 
                  ? "फिंकुल्प एक उपयोगकर्ता-मित्रता ट्रेडिंग प्लेटफॉर्म है जो उपयोगकर्ताओं को वैश्विक वित्तीय बाजारों से जोड़ता है।"
                  : "Finkulp is a user-friendly trading platform that connects users with global financial markets."}
              </p>
            </div>
            <div className="mb-4">
              <h6 className="mb-3 text-yellow-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                {isHindi ? "क्या मुझे फिंकुल्प पर ट्रेडिंग शुरू करने के लिए किसी पूर्व अनुभव की आवश्यकता है?" : "Do I need any prior experience to start trading on Finkulp?"}
              </h6>
              <p style={{ color: 'yellow' }}>
                {isHindi 
                  ? "नहीं, पूर्व ट्रेडिंग अनुभव की आवश्यकता नहीं है। फिंकुल्प शैक्षिक संसाधन जैसे पाठ्यक्रम प्रदान करता है ताकि शुरुआती लोग ट्रेडिंग के मूल बातें समझ सकें और प्लेटफॉर्म का प्रभावी उपयोग कर सकें।"
                  : "No prior trading experience is required. Finkulp offers educational resources like courses to help beginners understand trading basics and use the platform effectively."}
              </p>
            </div>
            <div className="mb-4">
              <h6 className="mb-3 text-yellow-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4-4m4 0l-4 4" />
                </svg>
                {isHindi ? "क्या मेरी व्यक्तिगत और वित्तीय जानकारी फिंकुल्प पर सुरक्षित है?" : "How secure is my personal and financial information on Finkulp?"}
              </h6>
              <p style={{ color: 'yellow' }}>
                {isHindi 
                  ? "फिंकुल्प सुरक्षा को प्राथमिकता देता है, एन्क्रिप्शन, सुरक्षित सर्वर और प्रमाणीकरण प्रोटोकॉल के साथ उपयोगकर्ता डेटा की सुरक्षा करता है और एक सुरक्षित ट्रेडिंग वातावरण प्रदान करता है।"
                  : "Finkulp prioritizes security with encryption, secure servers, and authentication protocols to protect user data and ensure a safe trading environment."}
              </p>
            </div>
            <div className="mb-4">
              <h6 className="mb-3 text-yellow-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m0-14a9 9 0 110 18 9 9 0 010-18z" />
                </svg>
                {isHindi ? "क्या फिंकुल्प पर ट्रेडिंग से संबंधित कोई शुल्क या कमीशन है?" : "Are there any fees or commissions associated with trading on Finkulp?"}
              </h6>
              <p style={{ color: 'yellow' }}>
                {isHindi 
                  ? "फिंकुल्प का शुल्क संरचना पारदर्शी है और यह ट्रेड किए गए उत्पाद के प्रकार, व्यापार के आकार और खाता प्रकार पर आधारित है। उपयोगकर्ता ट्रेडिंग से पहले शुल्क तालिका देख सकते हैं।"
                  : "Finkulp's fee structure is transparent and based on the type of instrument traded, trade size, and account type. Users can review the fee schedule before trading."}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
