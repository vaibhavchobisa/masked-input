import { useState } from 'react';
import './App.css';
import MaskedInput from './components/masked-input.component';

const App = () => {
  const [val, setVal] = useState('');
  const [unmaskedStr, setUnmaskedStr] = useState('');

  const onChangeHandler = (e) => {
    setVal(e.target.value);
    setUnmaskedStr(e.target.value);
  }

  const maskInput = (e) => {
    let len = e.target.value.length;
    let newVal = '*';

      if (len < 13) {
        // for (let i = 0; i < len; i++) {
        //   newVal = newVal + '*';
        // }
        newVal = newVal.repeat(len);
      }
      else {
        // for (let i = 0; i < len-1; i++) {
        //   newVal = newVal + '*';
        // }
        // newVal = newVal + e.target.value.substring(13);
        newVal = newVal.repeat(12);
        newVal = newVal + e.target.value.substring(12);
      }
      setVal(newVal);
  }

  const unmaskInput = (e) => {
    setVal(unmaskedStr);
  }

  return (
    <div className="App">
      <h1>Masked Input</h1>
      <br />
      <MaskedInput value={val} onChange={onChangeHandler} onBlur={maskInput} onFocus={unmaskInput} />
    </div>
  );

}

export default App;
