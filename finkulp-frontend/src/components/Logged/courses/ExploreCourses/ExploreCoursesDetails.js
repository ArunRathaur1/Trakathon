import React, { useState } from 'react';
import img1 from './title.png';

const VideoPage = () => {
  const [isHindi, setIsHindi] = useState(true); // Default language set to Hindi
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulating user login

  // Hindi Translations
  const translations = {
    title: "वित्तीय बाजारों का परिचय",
    description: "वित्तीय बाजारों में स्टॉक्स, बॉन्ड्स, और डेरिवेटिव्स जैसी वित्तीय संपत्तियों की खरीद-फरोख्त होती है। ये बाजार लिक्विडिटी प्रदान करते हैं, मूल्य निर्धारण की सुविधा प्रदान करते हैं, और वित्तीय जोखिम को प्रबंधित करने में मदद करते हैं। इन बाजारों को प्राथमिक और द्वितीयक बाजारों में वर्गीकृत किया जा सकता है।",
    recommendedVideos: "सुझावित वीडियो",
    courseProgress: "कोर्स प्रगति",
    coursePercentage: "60% पूरा हुआ",
    videos: [
      "वित्तीय बाजारों के प्रकार",
      "इक्विटी ट्रेडिंग की व्याख्या",
      "बॉन्ड बाजार",
      "डेरिवेटिव्स को समझना"
    ],
    descriptions: [
      "विभिन्न प्रकार के वित्तीय बाजारों और उनके प्रभाव का अन्वेषण करें।",
      "स्टॉक मार्केट ट्रेडिंग और इक्विटी निवेशों के बुनियादी सिद्धांतों को जानें।",
      "बॉन्ड बाजारों का संक्षिप्त अवलोकन और वे कैसे काम करते हैं।",
      "डेरिवेटिव्स का परिचय और वित्तीय बाजारों में उनका योगदान।"
    ],
  };

  // Handle language toggle
  const handleTranslate = () => {
    setIsHindi(!isHindi); // Toggle the language
  };

  // Generate random bank balance (balance will be between 10,000 and 100,000)
  const generateBankDetails = () => {
    const randomBalance = Math.floor(Math.random() * 100000) + 10000; // Random balance between 10,000 to 1,10,000
    return randomBalance;
  };

  const bankBalance = isLoggedIn ? generateBankDetails() : null;

  return (
    <div className="video-page flex p-6 bg-black text-yellow-400">
      {/* Left Side - Main Video */}
      <div className="main-video-section w-2/3 mr-8 bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="main-video w-full h-[450px] bg-gray-900 flex justify-center items-center relative">
          {/* Placeholder for the main video */}
          <img
            src={img1}
            alt="Main Video"
            className="w-full h-full object-cover"
            style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)", borderRadius: '10px' }}
          />
          <div className="absolute bottom-4 left-4 bg-opacity-60 bg-black text-yellow-400 px-4 py-2 rounded-lg">
            <h1 className="text-2xl font-semibold">{isHindi ? translations.title : "Introduction to Financial Markets"}</h1>
          </div>
        </div>

        <div className="video-info p-6">
          <p className="video-description text-yellow-200 text-lg">
            {isHindi ? translations.description : "Financial markets facilitate the buying and selling of financial assets such as stocks, bonds, and derivatives. They provide liquidity, enable price discovery, and help manage financial risk. These markets can be categorized into primary and secondary markets."}
          </p>
          <button
            onClick={handleTranslate}
            className="translate-button mb-4 bg-yellow-400 text-black p-2 rounded-lg shadow-md hover:bg-yellow-500 transition-colors duration-200"
          >
            {isHindi ? "English" : "हिंदी में अनुवाद करें"}
          </button>
        </div>
      </div>

      {/* Right Side - Recommended Videos and Course Progress */}
      <div className="right-side w-1/3">
        {/* Recommended Videos Section */}
        <div className="recommended-videos mb-8">
          <h2 className="recommended-videos-title text-2xl font-semibold mb-6">{isHindi ? translations.recommendedVideos : "Recommended Videos"}</h2>

          {/* Video List */}
          {[1, 2, 3].map((video, index) => (
            <div className="recommended-video flex mb-6 rounded-lg bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300" key={index}>
              <div className="recommended-video-image w-1/3 rounded-l-lg overflow-hidden">
                <div style={{ width: "150px", height: "110px", background: "black" }}></div>
              </div>
              <div className="recommended-video-info w-2/3 ml-4 p-4">
                <h3 className="recommended-video-title text-lg font-semibold text-yellow-400">
                  {isHindi ? translations.videos[index] : video === 1 ? "Types of Financial Markets" : video === 2 ? "Equity Trading Explained" : video === 3 ? "Bond Markets" : "Understanding Derivatives"}
                </h3>
                <p className="recommended-video-description text-yellow-200">
                  {isHindi ? translations.descriptions[index] : video === 1
                    ? "Explore different types of financial markets and their impact."
                    : video === 2
                    ? "Learn the basics of stock market trading and equity investments."
                    : "A brief overview of bond markets and how they work."}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Course Progress Bar */}
        <div className="course-progress mt-8">
          <h2 className="course-progress-title text-2xl font-semibold mb-6">{isHindi ? translations.courseProgress : "Course Progress"}</h2>
          <div className="progress-bar bg-gray-700 w-full h-2 mb-2 rounded-full">
            <div className="progress bg-yellow-400 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
          <div className="progress-percentage text-sm text-yellow-200">{isHindi ? translations.coursePercentage : "60% Completed"}</div>
        </div>

        {/* Bank Balance Display */}
        {isLoggedIn && bankBalance !== null && (
          <div className="bank-balance mt-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">{isHindi ? "बैंक बैलेंस" : "Bank Balance"}</h2>
            
            {/* Balance Progress Bar */}
            <div className="bg-gray-700 w-full h-2 mb-4 rounded-full">
              <div 
                className="bg-yellow-400 h-2 rounded-full"
                style={{ width: `${(bankBalance / 100000) * 100}%` }} // Display based on balance
              />
            </div>
            <p className="text-yellow-200 text-sm">{isHindi ? "बैलेंस: ₹" + bankBalance : "Balance: ₹" + bankBalance}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPage;
