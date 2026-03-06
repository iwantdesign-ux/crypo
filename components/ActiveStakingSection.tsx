'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ActiveStakingSection = () => {
  return (
    <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border p-8 rounded-3xl"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold">Your active staking</h2>
        <div className="flex gap-2 text-muted">
            <button className="p-2 hover:bg-surface rounded-lg"><span className="text-xs">Stats</span></button>
            <button className="p-2 hover:bg-surface rounded-lg">+</button>
            <button className="p-2 hover:bg-surface rounded-lg">⟳</button>
            <button className="p-2 hover:bg-surface rounded-lg">Filter</button>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="flex-1">
            <div className="text-muted text-xs mb-1">Last Update - 45 minutes ago</div>
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">A</div>
                <h3 className="text-2xl font-bold">Stake Avalanche (AVAX)</h3>
                <span className="text-muted text-sm">↗</span>
            </div>
            <div className="text-muted text-xs mb-1">Current Reward Balance, AVAX</div>
            <div className="text-5xl font-bold mb-8">31.39686</div>
            <div className="flex gap-4">
                <button className="bg-surface hover:bg-border px-8 py-3 rounded-2xl font-semibold">Upgrade</button>
                <button className="border border-border hover:bg-surface px-8 py-3 rounded-2xl font-semibold">Unstake</button>
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ActiveStakingSection;
