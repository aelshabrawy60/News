import React, { useEffect, useState } from 'react'

import './Prices.css'
import Price from '../../Components/Price/Price'
import axios from 'axios';

const currencies = ['EUR', 'JPY', 'AUD', 'CAD', 'EGP', 'CHF', 'GBP', 'QAR', 'HKD', 'NZD']
function Prices() {
    const [data, setData] = useState([])
    
    
    useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://v6.exchangerate-api.com/v6/65f0f1a4f5360dd14682df49/latest/USD');
        setData(response.data['conversion_rates']);
      } catch (err) {
        
      } finally {

      }
    };

    fetchExchangeRate();
    console.log(data)
  }, []);

  var currencies_list = currencies.map((curr) => <Price data={{first: 'USD' ,second: curr, price: data[curr] }}/>)
  return (
    <div className='prices_container'>
        <div className="group">
            {currencies_list}

        </div>
        <div aria-hidden className="group">
            {currencies_list}
        </div>
    </div>
  )
}

export default Prices