import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, ArrowUpRight, ArrowDownLeft } from "lucide-react";

interface WalletPanelProps {
  tonBalance: string;
  minedTokens: string;
  isConnected: boolean;
  onConnect: () => void;
  onDeposit: () => void;
  onWithdraw: () => void;
}

export default function WalletPanel({
  tonBalance,
  minedTokens,
  isConnected,
  onConnect,
  onDeposit,
  onWithdraw,
}: WalletPanelProps) {
  if (!isConnected) {
    return (
      <Card className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Wallet className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Conecta tu Wallet</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Conecta tu wallet TON para depositar y retirar fondos
          </p>
          <Button onClick={onConnect} className="w-full" data-testid="button-connect-wallet">
            Conectar Wallet TON
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Wallet className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">Balance TON</span>
        </div>
        <p className="text-3xl font-display font-bold mb-1" data-testid="text-ton-balance">
          {tonBalance}
        </p>
        <p className="text-sm text-muted-foreground">TON</p>
      </Card>

      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-5 h-5 rounded-full bg-chart-2 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-background" />
          </div>
          <span className="text-sm text-muted-foreground">Tokens Minados</span>
        </div>
        <p className="text-3xl font-display font-bold mb-1 text-chart-3" data-testid="text-mined-tokens">
          {minedTokens}
        </p>
        <p className="text-sm text-muted-foreground">MINE</p>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <Button onClick={onDeposit} variant="default" data-testid="button-deposit">
          <ArrowDownLeft className="w-4 h-4 mr-2" />
          Depositar
        </Button>
        <Button onClick={onWithdraw} variant="outline" data-testid="button-withdraw">
          <ArrowUpRight className="w-4 h-4 mr-2" />
          Retirar
        </Button>
      </div>
    </div>
  );
}
