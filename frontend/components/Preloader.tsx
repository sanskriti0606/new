import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative">
        <div className="w-16 h-16 border-t-2 border-green-500 border-solid rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-8 h-8 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
