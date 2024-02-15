import { useEffect, useState } from 'react'
import './App.css'

function App() {


    const [data, setData] = useState("")
     useEffect(() => {
         fetch('http://localhost:3001/api')
         .then(response => response.json())
          .then(data => setData(data))
      } ,[])
  console.log(data);
  return (
    <>
      
      
    </>
  )
}

export default App
