import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pickaxe, Zap, TrendingUp } from "lucide-react";

interface MinerCardProps {
  name: string;
  power: string;
  price: string;
  dailyEarnings: string;
  gradient: string;
  isOwned?: boolean;
  onPurchase?: () => void;
}

export default function MinerCard({
  name,
  power,
  price,
  dailyEarnings,
  gradient,
  isOwned,
  onPurchase,
}: MinerCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className={`h-32 bg-gradient-to-br ${gradient} flex items-center justify-center relative`}>
        <Pickaxe className="w-16 h-16 text-white" />
        {isOwned && (
          <Badge className="absolute top-2 right-2" variant="secondary">
            Adquirido
          </Badge>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-3">{name}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-1">
              <Zap className="w-4 h-4" />
              Potencia
            </span>
            <span className="font-display font-semibold">{power}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              Ganancia/día
            </span>
            <span className="font-display font-semibold text-chart-3">{dailyEarnings}</span>
          </div>
        </div>
        <Button
          onClick={onPurchase}
          disabled={isOwned}
          className="w-full"
          variant={isOwned ? "secondary" : "default"}
          data-testid={`button-buy-${name.toLowerCase().replace(/\s/g, '-')}`}
        >
          {isOwned ? "Ya tienes este minero" : `Comprar por ${price} TON`}
        </Button>
      </div>
    </Card>
  );
}
