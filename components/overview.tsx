import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Overview = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "Let's navigate the present, and create the future.",
    "Built in Michigan, Built for the World.",
    "Follow us on all socials!",
    "Let's shape the future together."
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000); 

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <h1 className="font-pixel text-3xl">
          [Think]
        </h1>
        <p>
          Welcome, and thank you for choosing to use Think!
        </p>
        <p>
          At Think Technologies, we leverage the power of artificial intelligence to provide tailored data solutions that revolutionize the way businesses operate and creatives innovate.
        </p>
        <motion.p 
          key={messageIndex} // Key change triggers animation
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-customGreen"
        >
          {messages[messageIndex]}
        </motion.p>
      </div>
    </motion.div>
  );
};