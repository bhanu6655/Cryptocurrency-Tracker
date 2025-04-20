// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {id, currencyName, usdValue, euroValue, currencyLogo} = currencyDetails
  return (
    <li className="currencyItem">
      <div className="logo-name-section">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="item">{currencyName}</p>
      </div>
      <div className="values">
        <p className="item">{usdValue}</p>
        <p className="item">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
