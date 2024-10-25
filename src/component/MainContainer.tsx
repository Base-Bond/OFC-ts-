import { WalletComponents } from './WalletConnect'
import TransactionComponents from './TransactComp'
import SwapComponents from './SwapComp'
import CheckoutComp from './CheckoutComp'

function MainContainer() {
  return (
    <div className='mt-10 md:flex md:justify-center md:items-center gap-5 sm:flex-wrap'>
      <div className='flex justify-center items-center flex-col gap-2 border-2 border-blue-500 p-10'>
        <h1 className='text-3xl'>Connect Wallet</h1>
        <WalletComponents />
      </div>
      <div className="mt-5 md:mt-0 flex justify-center items-center flex-col gap-2 border-2 border-blue-500 p-10">
        <h1 className='text-3xl'>Initiate a Transaction</h1>
        <TransactionComponents />
      </div>
      <div className="mt-5 md:mt-0 flex justify-center items-center flex-col gap-2 border-2 border-blue-500 p-10">
        <h1 className='text-3xl'>Initiate a Swap</h1>
        <SwapComponents />
      </div>
      <div className="mt-5 md:mt-0 flex justify-center items-center flex-col gap-2 border-2 border-blue-500 p-10">
        <h1 className='text-3xl'>Sell your products</h1>
        <CheckoutComp />
      </div>
    </div>
  )
}

export default MainContainer