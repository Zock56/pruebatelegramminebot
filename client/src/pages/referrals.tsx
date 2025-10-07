import ReferralSection from "@/components/ReferralSection";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users } from "lucide-react";

export default function Referrals() {
  //todo: remove mock functionality
  const referralCode = "ABC123XYZ";
  const totalReferrals = 12;
  const totalEarnings = "45.80 TON";
  
  const referredUsers = [
    { id: 1, name: "Usuario 1", earnings: "12.50 TON" },
    { id: 2, name: "Usuario 2", earnings: "8.30 TON" },
    { id: 3, name: "Usuario 3", earnings: "15.00 TON" },
    { id: 4, name: "Usuario 4", earnings: "10.00 TON" },
  ];

  return (
    <div className="min-h-screen pb-20 bg-background">
      <div className="max-w-md mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-display font-bold mb-2">Referidos</h1>
          <p className="text-muted-foreground">Invita amigos y gana comisiones</p>
        </div>

        <ReferralSection
          referralCode={referralCode}
          totalReferrals={totalReferrals}
          totalEarnings={totalEarnings}
        />

        {referredUsers.length > 0 && (
          <div className="mt-6">
            <h2 className="font-semibold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Tus Referidos
            </h2>
            <div className="space-y-2">
              {referredUsers.map((user) => (
                <Card key={user.id} className="p-3 hover-elevate">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Ha generado {user.earnings}
                      </p>
                    </div>
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
