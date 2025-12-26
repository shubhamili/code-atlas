
import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [name, setName] = useState('')
  const [result, setResult] = useState('');

  // useEff
  setName("shubhamili")
  const getDetails = async () => {
    const res = await axios.get(`https://api.github.com/users/${name}`)


    setResult(res.data)
  }

  getDetails()
  // const 

  return (
    <>

      {
        result ? <div> {result}</div> : <div> apis will show data here soon..</div>
      }



      {/* {(result) &&  apis will show data here soon..} */}
    </>
  )
}

export default App
