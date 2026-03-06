import React from 'react';
import { Wallet, ArrowRight } from 'lucide-react';

const LiquidStakingPortfolioCard = () => {
  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-3xl border border-border flex flex-col justify-between h-full min-h-[300px]">
      <div>
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4">
            <div className="w-5 h-5 bg-black rounded-sm rotate-45" />
        </div>
        <h3 className="text-xl font-bold mb-2">Liquid Staking Portfolio</h3>
        <p className="text-sm text-muted">An all-in-one portfolio that helps you make smarter investments into Ethereum Liquid Staking</p>
      </div>
      
      <div className="space-y-3 mt-6">
        <button className="w-full bg-white text-black py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
            <Wallet size={16} />
            Connect with Wallet
        </button>
        <button className="w-full bg-surface border border-border py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
            Enter a Wallet Address
        </button>
      </div>
    </div>
  );
};

export default LiquidStakingPortfolioCard;
