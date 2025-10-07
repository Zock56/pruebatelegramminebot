import { useState } from "react";
import { Pickaxe, Zap } from "lucide-react";

interface MinerDisplayProps {
  minerType?: "basic" | "advanced" | "pro" | null;
  isMining: boolean;
}

export default function MinerDisplay({ minerType, isMining }: MinerDisplayProps) {
  if (!minerType) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="w-32 h-32 rounded-full bg-card border-2 border-dashed border-border flex items-center justify-center mb-4">
          <Pickaxe className="w-12 h-12 text-muted-foreground" />
        </div>
        <p className="text-muted-foreground text-center">
          No tienes un minero aún
          <br />
          <span className="text-sm">Compra uno en la tienda</span>
        </p>
      </div>
    );
  }

  const minerConfig = {
    basic: {
      name: "Minero Básico",
      color: "from-blue-500 to-cyan-500",
      power: "10 TH/s",
    },
    advanced: {
      name: "Minero Avanzado",
      color: "from-purple-500 to-pink-500",
      power: "50 TH/s",
    },
    pro: {
      name: "Minero Pro",
      color: "from-yellow-500 to-orange-500",
      power: "200 TH/s",
    },
  };

  const config = minerConfig[minerType];

  return (
    <div className="flex flex-col items-center py-8">
      <div className="relative">
        <div
          className={`w-48 h-48 rounded-2xl bg-gradient-to-br ${config.color} flex items-center justify-center relative overflow-hidden`}
        >
          {isMining && (
            <>
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
              <div className="absolute top-2 right-2">
                <Zap className="w-6 h-6 text-yellow-300 animate-pulse" />
              </div>
            </>
          )}
          <Pickaxe className="w-24 h-24 text-white" />
        </div>
        {isMining && (
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-chart-2"
                style={{
                  animation: `bounce 0.6s ease-in-out ${i * 0.1}s infinite`,
                }}
              />
            ))}
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mt-6 mb-2">{config.name}</h3>
      <div className="flex items-center gap-2 text-muted-foreground">
        <Zap className="w-4 h-4" />
        <span className="font-display text-lg">{config.power}</span>
      </div>
    </div>
  );
}
