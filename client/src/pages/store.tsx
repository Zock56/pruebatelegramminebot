import { useState } from "react";
import MinerCard from "@/components/MinerCard";
import { useToast } from "@/hooks/use-toast";
import Confetti from "react-confetti";

export default function Store() {
  const { toast } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);
  
  //todo: remove mock functionality
  const miners = [
    {
      id: 1,
      name: "Minero Básico",
      power: "10 TH/s",
      price: "5",
      dailyEarnings: "1.2 TON",
      gradient: "from-blue-500 to-cyan-500",
      isOwned: false,
    },
    {
      id: 2,
      name: "Minero Avanzado",
      power: "50 TH/s",
      price: "10",
      dailyEarnings: "2.5 TON",
      gradient: "from-purple-500 to-pink-500",
      isOwned: true,
    },
    {
      id: 3,
      name: "Minero Pro",
      power: "200 TH/s",
      price: "25",
      dailyEarnings: "8.0 TON",
      gradient: "from-yellow-500 to-orange-500",
      isOwned: false,
    },
    {
      id: 4,
      name: "Minero Elite",
      power: "500 TH/s",
      price: "50",
      dailyEarnings: "18.5 TON",
      gradient: "from-red-500 to-pink-500",
      isOwned: false,
    },
  ];

  const handlePurchase = (minerName: string) => {
    setShowConfetti(true);
    toast({
      title: "¡Compra exitosa!",
      description: `Has adquirido ${minerName}`,
    });
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="min-h-screen pb-20 bg-background">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      <div className="max-w-md mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-display font-bold mb-2">Tienda de Mineros</h1>
          <p className="text-muted-foreground">Mejora tu poder de minería</p>
        </div>

        <div className="grid gap-4">
          {miners.map((miner) => (
            <MinerCard
              key={miner.id}
              name={miner.name}
              power={miner.power}
              price={miner.price}
              dailyEarnings={miner.dailyEarnings}
              gradient={miner.gradient}
              isOwned={miner.isOwned}
              onPurchase={() => handlePurchase(miner.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
