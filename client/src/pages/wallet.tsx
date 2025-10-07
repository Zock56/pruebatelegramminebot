import { useState } from "react";
import WalletPanel from "@/components/WalletPanel";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Wallet() {
  const { toast } = useToast();
  //todo: remove mock functionality
  const [isConnected, setIsConnected] = useState(true);
  const tonBalance = "125.50";
  const minedTokens = "3,450.00";

  const transactions = [
    { id: 1, type: "deposit", amount: "50.00 TON", date: "Hace 2 días" },
    { id: 2, type: "withdraw", amount: "25.00 TON", date: "Hace 5 días" },
    { id: 3, type: "deposit", amount: "100.00 TON", date: "Hace 1 semana" },
  ];

  const handleConnect = () => {
    setIsConnected(true);
    toast({
      title: "Wallet conectada",
      description: "Tu wallet TON ha sido conectada exitosamente",
    });
  };

  const handleDeposit = () => {
    toast({
      title: "Depósito iniciado",
      description: "Completa la transacción en tu wallet",
    });
  };

  const handleWithdraw = () => {
    toast({
      title: "Retiro iniciado",
      description: "Completa la transacción en tu wallet",
    });
  };

  return (
    <div className="min-h-screen pb-20 bg-background">
      <div className="max-w-md mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-display font-bold mb-2">Wallet</h1>
          <p className="text-muted-foreground">Administra tus fondos TON</p>
        </div>

        <WalletPanel
          tonBalance={tonBalance}
          minedTokens={minedTokens}
          isConnected={isConnected}
          onConnect={handleConnect}
          onDeposit={handleDeposit}
          onWithdraw={handleWithdraw}
        />

        {isConnected && transactions.length > 0 && (
          <div className="mt-6">
            <h2 className="font-semibold mb-3">Historial de Transacciones</h2>
            <div className="space-y-2">
              {transactions.map((tx) => (
                <Card key={tx.id} className="p-3 hover-elevate">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        tx.type === "deposit"
                          ? "bg-chart-3/10 text-chart-3"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {tx.type === "deposit" ? (
                        <ArrowDownLeft className="w-4 h-4" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">
                        {tx.type === "deposit" ? "Depósito" : "Retiro"}
                      </p>
                      <p className="text-sm text-muted-foreground">{tx.date}</p>
                    </div>
                    <p className="font-display font-semibold">{tx.amount}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
