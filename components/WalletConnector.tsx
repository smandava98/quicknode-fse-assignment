import React from 'react'
import { ConnectArgs } from "@wagmi/core";
import { Connector } from "wagmi";
import Button from '@mui/material/Button';

export interface WalletConnectorProps {
  connectors: Connector[];
  connect(args?: Partial<ConnectArgs>): any;
}

const WalletConnector = ({ 
  connectors,
  connect,
 }: WalletConnectorProps) => {
  return (
    <div className="mx-auto flex flex-col items-center">
        <div className="fs-5 fs-lg-1">View Trending NFT Collections</div>
        {connectors.map((connector) => (
           <Button key={connector.id} onClick={() => connect({ connector })} > Connect ETH Wallet </Button>
        ))}
    </div>
  )
}

export default WalletConnector;