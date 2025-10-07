import StatsCard from '../StatsCard';
import { Coins } from 'lucide-react';

export default function StatsCardExample() {
  return <StatsCard icon={Coins} label="Ganancias Totales" value="125.50 TON" variant="success" />;
}
