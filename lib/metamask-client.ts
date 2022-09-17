import { createClient} from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { chain } from 'wagmi'
import { getDefaultProvider } from "ethers";

const metamaskClient = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
  connectors: [
    new MetaMaskConnector({
        chains: [chain.mainnet, chain.optimism],
      }),
  ],
});

export default metamaskClient;