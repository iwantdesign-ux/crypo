'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AssetCard = ({ title, rate, growth, icon, chartData }: { title: string; rate: string; growth: string; icon: React.ReactNode; chartData: number[] }) => {
  return (
    <motion.div 
        whileHover={{ y: -5 }}
        className="bg-card p-6 rounded-2xl border border-border w-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center">
                {icon}
            </div>
            <div>
                <div className="text-xs text-muted">Proof of Stake</div>
                <div className="font-semibold">{title}</div>
            </div>
        </div>
        <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor"><path d="M1 11L11 1M11 1H3M11 1V9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>
      <div className="mb-4">
        <div className="text-xs text-muted">Reward Rate</div>
        <div className="text-2xl font-bold">{rate}</div>
        <div className="text-emerald-400 text-sm flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor"><path d="M1 11L11 1M11 1H3M11 1V9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {growth}
        </div>
      </div>
      <div className="h-20 flex items-end gap-1">
        {chartData.map((val, i) => (
            <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${val}%` }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-1 bg-blue-500/20 rounded-t-sm"
            />
        ))}
      </div>
    </motion.div>
  );
};

export default AssetCard;
