'use client';

import React from 'react';
import { motion } from 'framer-motion';

const InvestmentPeriodWidget = () => {
  return (
    <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-card border border-border p-8 rounded-3xl"
    >
      <h3 className="text-xl font-semibold mb-6">Investment Period</h3>
      <div className="text-xs text-muted mb-8">Contribution Period (Month)</div>
      
      <div className="relative h-2 bg-surface rounded-full mb-8">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-white rounded-full" />
        <div className="absolute left-1/2 -top-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs shadow-lg">||</div>
      </div>
      
      <div className="flex justify-between text-muted text-sm font-medium">
        <span>4 Month</span>
        <span>6 Month</span>
      </div>
    </motion.div>
  );
};

export default InvestmentPeriodWidget;
