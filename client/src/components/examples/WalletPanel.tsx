import WalletPanel from '../WalletPanel';

export default function WalletPanelExample() {
  return (
    <WalletPanel
      tonBalance="125.50"
      minedTokens="3,450.00"
      isConnected={true}
      onConnect={() => console.log('Conectar wallet')}
      onDeposit={() => console.log('Depositar')}
      onWithdraw={() => console.log('Retirar')}
    />
  );
}
