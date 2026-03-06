import TopBar from "@/components/TopBar";
import AssetCard from "@/components/AssetCard";
import ActiveStakingSection from "@/components/ActiveStakingSection";
import InvestmentPeriodWidget from "@/components/InvestmentPeriodWidget";
import LiquidStakingPortfolioCard from "@/components/LiquidStakingPortfolioCard";
import { Zap } from "lucide-react";

export default function Home({ toggleSidebar }: { toggleSidebar?: () => void }) {
  return (
    <div className="flex flex-col gap-8">
      <TopBar toggleSidebar={toggleSidebar} />
      
      <section>
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Top Staking Assets</h2>
            <div className="flex gap-2">
                <button className="px-4 py-2 bg-card border border-border rounded-xl text-sm text-muted hover:text-foreground">24H</button>
                <button className="px-4 py-2 bg-card border border-border rounded-xl text-sm text-muted hover:text-foreground">Proof of Stake</button>
                <button className="px-4 py-2 bg-card border border-border rounded-xl text-sm text-muted hover:text-foreground">Desc</button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                <AssetCard 
                    title="Ethereum (ETH)" 
                    rate="13.62%" 
                    growth="+6.25%" 
                    icon={<Zap size={20} />} 
                    chartData={[20, 40, 30, 50, 40, 60, 55, 70]} 
                />
                <AssetCard 
                    title="BNB Chain" 
                    rate="12.72%" 
                    growth="+5.67%" 
                    icon={<Zap size={20} />} 
                    chartData={[30, 50, 40, 60, 50, 70, 60, 80]} 
                />
                <AssetCard 
                    title="Polygon (Matic)" 
                    rate="6.29%" 
                    growth="-1.89%" 
                    icon={<Zap size={20} />} 
                    chartData={[60, 40, 50, 30, 40, 20, 30, 10]} 
                />
            </div>
            <div className="lg:col-span-1">
                <LiquidStakingPortfolioCard />
            </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <ActiveStakingSection />
        </div>
        <div className="lg:col-span-1">
            <InvestmentPeriodWidget />
        </div>
      </div>
    </div>
  );
}
