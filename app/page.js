"use client";
import { Divide, X } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";
import React from "react";

const Home = () => {
  const [ismenuopen, setismenuopen] = useState(false);
  return (
    <div className="bg-gray-900 min-h-screen font-sans text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-20">
        <div className="text-3xl font-bold text-blue-500">TradePro</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {["Markets", "Trading", "Analysis", "Learn"].map((item, index) => (
              <li key={index}>
                <span className="text-gray-300 hover:text-blue-500 transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </nav>
        <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors  transform hover:scale-105">
          Start Trading
        </button>
        <button
          className="md:hidden text-white"
          onClick={() => setismenuopen(!ismenuopen)}
        >
          {ismenuopen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>
      {ismenuopen && (
        <div className="md:hidden bg-gray-800 px-4 py-2">
          <ul className="space-y-3">
            {["Markets", "Trading", "Analysis", "Learn"].map((item, index) => (
              <li key={index}>
                <span className="block text-gray-300 hover:text-blue-500 transition-colors">
                  {item}
                </span>
              </li>
            ))}
            <li>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors  transform hover:scale-105">
                Start Trading
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
