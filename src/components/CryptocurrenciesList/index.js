import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CurrenciesList extends Component {
  state = {
    isloading: true,
    currencylist: [],
  }

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({currencylist: formattedData, isloading: false})
  }

  render() {
    const {currencylist, isloading} = this.state
    return isloading ? (
      <div className="loader-container">
        <Loader
          type="Rings"
          color="#ffffff"
          height={80}
          width={80}
          data-testid="loader"
        />
      </div>
    ) : (
      <div className="currencylist">
        <h1 className="cryptocurrency-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-tracker-logo"
        />

        <ul className="currency-items">
          <div className="currency-header">
            <div>
              <p className="header-item">Coin</p>
            </div>
            <p className="header-item">USD</p>
            <p className="header-item">EURO</p>
          </div>
          {currencylist.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} currencyDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CurrenciesList
