import React from 'react';
import { LayoutDashboard, Coins, BriefcaseBusiness, Calculator, BotMessageSquare, Droplets, Zap, ChevronDown, Bell, Search, Settings, Menu } from 'lucide-react';

const TopBar = ({ toggleSidebar }: { toggleSidebar?: () => void }) => {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-4">
        <button className="lg:hidden" onClick={toggleSidebar}>
            <Menu size={24} />
        </button>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-xl text-sm text-muted">
            <Search size={16} />
            <span>Search..</span>
        </div>
        <div className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center relative">
            <Bell size={16} className="text-foreground" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-[10px] flex items-center justify-center rounded-full text-white">2</span>
        </div>
        <div className="flex items-center gap-2 bg-card border border-border px-3 py-1.5 rounded-xl">
            <div className="w-7 h-7 rounded-full bg-zinc-600" />
            <div className="flex flex-col">
                <span className="text-xs font-medium text-foreground">Ryan Crawford</span>
                <span className="text-[10px] text-muted">PRO</span>
            </div>
            <ChevronDown size={14} className="text-muted" />
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
          Deposit
        </button>
        <button className="p-2.5 bg-card border border-border rounded-xl text-muted hover:text-foreground"><Settings size={18} /></button>
      </div>
    </header>
  );
};

export default TopBar;
