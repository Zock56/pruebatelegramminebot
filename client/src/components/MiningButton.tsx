import { Play, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MiningButtonProps {
  isMining: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

export default function MiningButton({ isMining, onToggle, disabled }: MiningButtonProps) {
  return (
    <Button
      onClick={onToggle}
      disabled={disabled}
      size="lg"
      variant={isMining ? "destructive" : "default"}
      className="w-full min-h-16 text-lg font-semibold"
      data-testid={isMining ? "button-stop-mining" : "button-start-mining"}
    >
      {isMining ? (
        <>
          <Square className="w-5 h-5 mr-2" />
          DETENER MINERÍA
        </>
      ) : (
        <>
          <Play className="w-5 h-5 mr-2" />
          INICIAR MINERÍA
        </>
      )}
    </Button>
  );
}
