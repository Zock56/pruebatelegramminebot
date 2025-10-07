import { Toaster } from "@/components/ui/toaster";
import ReferralSection from '../ReferralSection';

export default function ReferralSectionExample() {
  return (
    <>
      <ReferralSection 
        referralCode="ABC123XYZ" 
        totalReferrals={12} 
        totalEarnings="45.80 TON" 
      />
      <Toaster />
    </>
  );
}
