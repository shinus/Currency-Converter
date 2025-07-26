import React from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = ""
}) {

  return (
    <div className="flex flex-col gap-1">
      <label className="text-white font-medium">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          className="w-full rounded-lg px-3 py-2 outline-none bg-white/80 text-gray-800 font-semibold shadow-inner"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
        <select
          className="w-28 rounded-lg px-2 py-2 bg-white/80 text-gray-800 font-semibold shadow-inner"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>{currency.toUpperCase()}</option>
          ))}
        </select>
      </div>
    </div>

  )
}

export default InputBox