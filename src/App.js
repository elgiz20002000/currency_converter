import './App.css';
import { useEffect, useState } from 'react';
import Converter from './Service';



const App =  () => {

  const [currencies , setCurrencies] = useState({cur_1:'USD' , cur_2:'AZN'})
  const [firstValue , setFirstValue] = useState(1)
  const [secondValue , setSecondValue] = useState()




  useEffect(() => {
    console.log('update');
    Converter.getConvert(currencies.cur_1 , currencies.cur_2).then(res => {
    setSecondValue(+res.data.info.rate)
    })

  } , [currencies])
  


  return (
    <div className="app">
      <input type="number" value={+firstValue} onInput={(e) => setFirstValue(e.target.value)} className="convert_1"/>
      <input type="number" value={(+secondValue * +firstValue).toFixed(6)}  readOnly className="convert_2"/>
      
      <div className="select_wrapper">
        <div className="select">
        <span>Convert</span>
          <select name="select_1" on onChange={(e) => setCurrencies(currencies => ({...currencies , cur_1:e.target.value}))}  id="">
              <option value="USD">USD</option>
              <option value="AZN">AZN</option>
              <option value="EUR">EUR</option>
              <option value="RUB">RUB</option>
            </select>
        </div>

        <div className="select">
        <span>To</span>
          <select name="select_2" onChange={(e) => setCurrencies(currencies => ({...currencies , cur_2:e.target.value}))}    id="">
              <option value="AZN">AZN</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="RUB">RUB</option>
            </select>
        </div>
        
      </div>
    </div>
  )
}


export default App