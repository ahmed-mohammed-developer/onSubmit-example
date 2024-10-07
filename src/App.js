
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('')
  const [result, setResult] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    setResult(`تم إرسال النموذج بالقيمة ${value}`)
  }

  function handleChange(event){
    setValue(event.target.value)
    setResult('')
  }
  return (
    <>
    <div style={{textAlign: "center", margin: "auto"}}>
      <h1>مثال على إستخدام onSubmit في React</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={handleChange} required />
        <br /> <br />
        <button type='submit'>إرسال</button>
      </form>
      <br />
      <div>
        <h4>{result}</h4>
      </div>
    </div>
    </>
  );
}

export default App;
