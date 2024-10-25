import { useState } from 'react'
import reactLogo from './assets/react.svg'
import okitlogo from './assets/okitlogo.png'
import './App.css'
import MainContainer from './component/MainContainer'
import '@coinbase/onchainkit/styles.css';
import { ReactNode } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

const wagmiConfig = createConfig({
  chains: [baseSepolia],
  connectors: [
    coinbaseWallet({
      appName: 'onchainkitlib',
    }),
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
});

function App({children}: {children: ReactNode}) {
  const [count, setCount] = useState(0)

  return (
    <WagmiProvider config={wagmiConfig}>
      <div>
        <div className="flex justify-center items-center">
          <a href="https://onchainkit.xyz/" target="_blank">
            <img src={okitlogo} className="logo" alt="Onchainkit logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className='text-5xl'>OnchainKit + React</h1>
        <div className="card">
          <button className='p-2' onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <div>
        <MainContainer />
      </div>
    </WagmiProvider>
  )
}

export default App
