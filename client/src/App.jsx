import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base,polygonMumbai,bscTestnet } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import {Toaster, toast} from 'react-hot-toast'

export const config = getDefaultConfig({
  appName: "Agro Finance",
  projectId: "1ade470e0a2103b5f8113ed21f634435",
  chains: [bscTestnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Toaster/>
          <Router>
            <Routes />
          </Router>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
