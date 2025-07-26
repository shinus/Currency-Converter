import { useState } from 'react'
import './App.css'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [form, setForm] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(form)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    const temp = form
    setForm(to)
    setTo(temp)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    if (amount <= 0 || !currencyInfo[to]) return
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/33039009/pexels-photo-33039009.jpeg')`
      }}
    >
      <div className="w-full px-4">
        <div className="w-full max-w-md mx-auto rounded-2xl shadow-xl p-6 backdrop-blur-md bg-white/20 border border-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            {/* First InputBox */}
            <div className="w-full mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setForm(currency)}
                selectCurrency={form}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* Swap Button Centered */}
            <div className="w-full flex justify-center my-4">
              <button
                type="button"
                onClick={swap}
                className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white text-2xl flex items-center justify-center shadow-lg hover:scale-110 hover:rotate-180 transition-all duration-500 border border-white/40 backdrop-blur-lg"
              >
                🔄
              </button>
            </div>

            {/* Second InputBox */}
            <div className="w-full mb-6">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-4 py-3 rounded-xl shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Convert 
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
