import { useState } from 'react';
import MiningButton from '../MiningButton';

export default function MiningButtonExample() {
  const [isMining, setIsMining] = useState(false);
  
  return (
    <MiningButton 
      isMining={isMining} 
      onToggle={() => setIsMining(!isMining)} 
    />
  );
}
