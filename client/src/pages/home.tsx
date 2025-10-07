import { useState, useEffect } from "react";
import MinerDisplay from "@/components/MinerDisplay";
import MiningButton from "@/components/MiningButton";
import StatsCard from "@/components/StatsCard";
import { Coins, Zap, Clock } from "lucide-react";

export default function Home() {
  //todo: remove mock functionality
  const [minerType] = useState<"basic" | "advanced" | "pro" | null>("advanced");
  const [isMining, setIsMining] = useState(false);
  const [earnings, setEarnings] = useState(0);
  const [miningTime, setMiningTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isMining) {
      interval = setInterval(() => {
        setEarnings((prev) => prev + 0.01);
        setMiningTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isMining]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen pb-20 bg-background">
      <div className="max-w-md mx-auto p-4">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-display font-bold mb-2">Mining dApp</h1>
          <p className="text-muted-foreground">Gana TON mientras minas</p>
        </div>

        <MinerDisplay minerType={minerType} isMining={isMining} />

        <div className="mt-6 space-y-3">
          <div className="grid grid-cols-3 gap-3">
            <StatsCard
              icon={Coins}
              label="Ganado"
              value={earnings.toFixed(2)}
              variant="success"
            />
            <StatsCard
              icon={Zap}
              label="Potencia"
              value="50"
              subtitle="TH/s"
            />
            <StatsCard
              icon={Clock}
              label="Tiempo"
              value={formatTime(miningTime)}
            />
          </div>

          <MiningButton
            isMining={isMining}
            onToggle={() => setIsMining(!isMining)}
            disabled={!minerType}
          />

          {!minerType && (
            <p className="text-center text-sm text-muted-foreground">
              Compra un minero en la tienda para comenzar
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
