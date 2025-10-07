import MinerCard from '../MinerCard';

export default function MinerCardExample() {
  return (
    <MinerCard
      name="Minero Avanzado"
      power="50 TH/s"
      price="10"
      dailyEarnings="2.5 TON"
      gradient="from-purple-500 to-pink-500"
      onPurchase={() => console.log('Comprar minero')}
    />
  );
}
