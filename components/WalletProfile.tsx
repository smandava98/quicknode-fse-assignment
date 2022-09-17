import { useEffect, useState, MouseEvent } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import Button from '@mui/material/Button';
import WalletConnector from "./WalletConnector";

export interface ProfileProps {
  onWalletConnectionChange?(isConnected: boolean): void;
}

export function Profile({ onWalletConnectionChange }: ProfileProps) {
  const { address, connector, isConnected } = useAccount();

  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    setIsWalletConnected(isConnected);
    if (onWalletConnectionChange) {
      onWalletConnectionChange(isConnected);
    }
  }, [isConnected, onWalletConnectionChange]);

  const onDisconnectClick = (event: MouseEvent<HTMLButtonElement>) => {
    disconnect();
  };

  return isWalletConnected ? (
    <div className="flex justify-between">
      Please disconnect from Metamask app.
      <Button onClick={onDisconnectClick}>Go Back To Home</Button>
    </div>
  ) : (
    <WalletConnector
      connect={connect}
      connectors={connectors}
    />
  );
}