"use client";
import {
  ArrowRight,
  BarChart2,
  Bell,
  Book,
  Globe,
  Menu,
  PieChart,
  Shield,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import React from "react";

const buttonTransitionDelay = 0.4;
// Add Animation Part 1
const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
};

const FeatureBox = ({ icon, title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 40px rgba(59,130,246,0.3)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center h-full relative overflow-hidden"
    >
      <motion.div
        animate={{ scale: isHovered ? 1.2 : 1, rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-blue-500 mb-4 relative z-10"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 text-white relative z-10">
        {title}
      </h3>
      <p className="text-gray-300 mb-4 flex-grow relative z-10">
        {description}
      </p>
      <motion.button
        whileHover={{ x: 5 }}
        className="mt-auto text-blue-500 flex items-center text-sm font-medium relative z-10"
      >
        Learn More <ArrowRight className="ml-1" size={16} />
      </motion.button>
      <motion.div
        className="absolute inset-0 bg-blue-600 opacity-0"
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Home = () => {
  const containeref = useRef(null);
  const tradingFeatures = [
    {
      icon: <Globe size={32} />,
      title: "Global Markets",
      description:
        "Access a wide range of international markets and trade various assets from a single platform.",
    },
    {
      icon: <Zap size={32} />,
      title: "Real-time Data",
      description:
        "Stay informed with lightning-fast, real-time market data and instant trade execution.",
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Trading",
      description:
        "Trade with confidence using our advanced encryption and multi-factor authentication systems.",
    },
    {
      icon: <PieChart size={32} />,
      title: "Portfolio Analysis",
      description:
        "Gain insights into your portfolio performance with comprehensive analysis tools and reports.",
    },
    {
      icon: <Bell size={32} />,
      title: "Price Alerts",
      description:
        "Never miss a trading opportunity with customizable price alerts and notifications.",
    },
    {
      icon: <Book size={32} />,
      title: "Trading Education",
      description:
        "Enhance your trading skills with our extensive library of educational resources and webinars.",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      ref={containeref}
      className="bg-gray-900 min-h-screen font-sans text-white"
    >
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-blue-500"
        >
          TradePro
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {["Markets", "Trading", "Analysis", "Learn"].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: buttonTransitionDelay }}
              >
                <span className="text-gray-300 hover:text-blue-500 transition-colors">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: buttonTransitionDelay }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors transform hover:scale-105"
        >
          Start Trading
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </header>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.6 }}
          className="md:hidden bg-gray-800 px-4 py-2"
        >
          <ul className="space-y-3">
            {["Markets", "Trading", "Analysis", "Learn"].map((item, index) => (
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: buttonTransitionDelay }}
                key={index}
              >
                <span className="block text-gray-300 hover:text-blue-500 transition-colors">
                  {item}
                </span>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: buttonTransitionDelay }}
            >
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors transform hover:scale-105">
                Start Trading
              </button>
            </motion.li>
          </ul>
        </motion.div>
      )}
      <main className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center py-20">
            <h1 className="text-6xl font-bold mb-6">
              Trade Smarter, Not Harder
            </h1>
            <p className="text-2xl text-gray-400 mb-12">
              Access Global Market with real-time data and advanced trading
              tools
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors flex items-center mx-auto">
              Open Free Account <ArrowRight className="ml-2" />
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection>
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
        </AnimatedSection>

        <AnimatedSection>
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
                <ul className="space-y-6">
                  {[
                    "In-depth Analysis Reports",
                    "Trends & Patterns Identification",
                    "Expert Recommendations",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-300 text-xl"
                    >
                      <TrendingUp className="mr-4 text-blue-500" size={28} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="py-20">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Why Choose TradePro?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tradingFeatures.map((feature, index) => (
                <FeatureBox
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; 2024 TradePro. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
