import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Users, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ReferralSectionProps {
  referralCode: string;
  totalReferrals: number;
  totalEarnings: string;
}

export default function ReferralSection({ referralCode, totalReferrals, totalEarnings }: ReferralSectionProps) {
  const { toast } = useToast();

  const copyReferralLink = () => {
    const link = `https://t.me/miningbot?start=${referralCode}`;
    navigator.clipboard.writeText(link);
    toast({
      title: "¡Copiado!",
      description: "Link de referido copiado al portapapeles",
    });
  };

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Invita a tus amigos</h3>
            <p className="text-sm text-muted-foreground">Gana 10% de sus ganancias</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Input
            value={`https://t.me/miningbot?start=${referralCode}`}
            readOnly
            className="font-mono text-sm"
            data-testid="input-referral-link"
          />
          <Button onClick={copyReferralLink} size="icon" data-testid="button-copy-referral">
            <Copy className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Referidos</span>
          </div>
          <p className="text-2xl font-display font-bold" data-testid="text-total-referrals">
            {totalReferrals}
          </p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Comisiones</span>
          </div>
          <p className="text-2xl font-display font-bold text-chart-3" data-testid="text-referral-earnings">
            {totalEarnings}
          </p>
        </Card>
      </div>
    </div>
  );
}
