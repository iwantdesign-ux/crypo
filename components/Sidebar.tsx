import React from 'react';
import { LayoutDashboard, Coins, BriefcaseBusiness, Calculator, BotMessageSquare, Droplets, Zap } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-background border-r border-border flex flex-col h-screen fixed left-0 top-0 text-foreground p-6">
      <div className="flex items-center gap-2 mb-10">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
        </div>
        <span className="text-xl font-bold">Staket</span>
      </div>
      
      <nav className="flex-1 space-y-2">
        <a href="#" className="flex items-center gap-3 p-3 bg-surface rounded-xl text-foreground">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-3 text-muted hover:text-foreground transition-colors">
          <Coins size={20} />
          <span>Assets</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-3 text-muted hover:text-foreground transition-colors">
          <BriefcaseBusiness size={20} />
          <span>Staking Providers</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-3 text-muted hover:text-foreground transition-colors">
          <Calculator size={20} />
          <span>Staking Calculator</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-3 text-muted hover:text-foreground transition-colors">
          <BotMessageSquare size={20} />
          <span>Data API</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-3 text-muted hover:text-foreground transition-colors">
          <Droplets size={20} />
          <span>Liquid Staking <span className="bg-[#2d1b4e] text-[#a78bfa] text-xs px-2 py-0.5 rounded-full ml-1">Beta</span></span>
        </a>
      </nav>

      <div className="mt-auto border-t border-border pt-6">
        <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold">Active Staking</span>
            <span className="bg-surface text-xs px-2 py-0.5 rounded-md">6</span>
        </div>
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">E</div>
                <div>
                    <div className="text-sm">Asset Ethereum</div>
                    <div className="text-xs text-muted">$7,699.00</div>
                </div>
            </div>
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">A</div>
                <div>
                    <div className="text-sm">Asset Avalanche</div>
                    <div className="text-xs text-muted">$1,340.00</div>
                </div>
            </div>
        </div>
        <button className="w-full mt-6 flex items-center justify-center gap-2 bg-surface p-3 rounded-xl text-sm hover:bg-border transition-colors">
            <Zap size={16} className="text-yellow-500" />
            Activate Super
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
