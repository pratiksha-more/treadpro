"use client";
import { ArrowRight, Divide, TrendingUp, X } from "lucide-react";
import { Menu } from "lucide-react";
import { BarChart2 } from "lucide-react";
import { useState } from "react";
import Globe from "./path/to/Globe";

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
      <main className="container mx auto px-4">
        <div className="text-center py-20">
          <h1 className="text-6xl font-bold mb-6">Trade Smarter,Not Harder</h1>
          <p className="text-2xl text-gray-400 mb-12">
            Access Global Market with real-time data and advaced training tool
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-md text hover:bg-blue-700 transition-color flex items-center mx-auto">
            Open Free Account <ArrowRight className="ml-2" />
          </button>
        </div>

        <div className="py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Advanced Trading Tools
              </h2>
              <ul className="space-y-6">
                {[
                  "Real-Time market data",
                  "Advanced Charting",
                  "Risk management tools",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-300 text-xl"
                  >
                    <BarChart2 className="mr-4 text-blue-500" size={28} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
              <img
                className="w-full rounded-xl"
                src="https://media.istockphoto.com/id/1465618017/photo/businessmen-investor-think-before-buying-stock-market-investment-using-smartphone-to-analyze.jpg?s=612x612&w=0&k=20&c=YNEkfoME1jbz6FUJImxCQtaGZZntrf7u-Byxmgk4pOY="
                alt="Stock Image"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        <div>
          <div className="py-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
                <img
                  className="w-full rounded-xl"
                  src="https://media.istockphoto.com/id/1465618017/photo/businessmen-investor-think-before-buying-stock-market-investment-using-smartphone-to-analyze.jpg?s=612x612&w=0&k=20&c=YNEkfoME1jbz6FUJImxCQtaGZZntrf7u-Byxmgk4pOY="
                  alt="Stock Image"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  Market Analysis at your Fingertips
                </h2>
                <p className="text-gray-300 text-xl mb-8">
                  Get in-depth market analysis and informed tarading
                </p>
                <div className="flex items-center bg-gray-800 p-6 rounded-xl relative overflow-hidden group">
                  <TrendingUp
                    className="text-blue-500 mr-6 relative z-10"
                    size={48}
                  />
                  <div className="relative z-10">
                    <div className="text-blue-500 text-5xl font-bold">+500</div>
                    <p className="text-gray-300 text-xl">
                      Global markets available for trading
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
