import React from 'react';
import img1 from './title.png';

const VideoPage = () => {
  return (
    <div className="video-page flex p-6 bg-gray-50">
      {/* Left Side - Main Video */}
      <div className="main-video-section w-2/3 mr-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="main-video w-full h-[450px] bg-gray-200 flex justify-center items-center relative">
          {/* Placeholder for the main video */}
          <img
            src={img1}
            alt="Main Video"
            className="w-full h-full object-cover"
            style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", borderRadius: '10px' }}
          />
          <div className="absolute bottom-4 left-4 bg-opacity-60 bg-black text-white px-4 py-2 rounded-lg">
            <h1 className="text-2xl font-semibold">Introduction to Financial Markets</h1>
          </div>
        </div>

        <div className="video-info p-6">
          <p className="video-description text-gray-700 text-lg">
            Financial markets facilitate the buying and selling of financial assets such as stocks, bonds, and derivatives. They provide liquidity, enable price discovery, and help manage financial risk. These markets can be categorized into primary and secondary markets.
          </p>
        </div>
      </div>

      {/* Right Side - Recommended Videos and Course Progress */}
      <div className="right-side w-1/3">
        {/* Recommended Videos Section */}
        <div className="recommended-videos mb-8">
          <h2 className="recommended-videos-title text-2xl font-semibold mb-6">Recommended Videos</h2>

          {/* Video List */}
          {[1, 2, 3, 4].map((video, index) => (
            <div className="recommended-video flex mb-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300" key={index}>
              <div className="recommended-video-image w-1/3 rounded-l-lg overflow-hidden">
               <div style={{width:"150px",height:"110px",background:"black"}}></div>
              </div>
              <div className="recommended-video-info w-2/3 ml-4 p-4">
                <h3 className="recommended-video-title text-lg font-semibold text-gray-800">
                  {video === 1 ? "Types of Financial Markets" : video === 2 ? "Equity Trading Explained" : video === 3 ? "Bond Markets" : "Understanding Derivatives"}
                </h3>
                <p className="recommended-video-description text-gray-600">
                  {video === 1
                    ? "Explore different types of financial markets and their impact."
                    : video === 2
                    ? "Learn the basics of stock market trading and equity investments."
                    : video === 3
                    ? "A brief overview of bond markets and how they work."
                    : "An introduction to derivatives and their role in financial markets."}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Course Progress Bar */}
        <div className="course-progress mt-8">
          <h2 className="course-progress-title text-2xl font-semibold mb-6">Course Progress</h2>
          <div className="progress-bar bg-gray-200 w-full h-2 mb-2 rounded-full">
            <div className="progress bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
          <div className="progress-percentage text-sm text-gray-600">60% Completed</div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
