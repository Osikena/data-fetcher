import { useEffect, useState } from 'react'

function App() {

  const [gender, setGender] = useState('')
  const [name, setName] = useState('')

  async function datafetch(){
    const url = 'https://api.randomuser.me/'
    const response = await fetch(url)
    const data = await response.json();
    console.warn(data.results[0])
    setGender(data.results[0].gender)
    setName(data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last)
  }

  useEffect(() => {
    
    datafetch();
    
  }, []);



  return (
    <div className="App">
      
      <h1>Name: {name}</h1>
      <h1>Gender: {gender}</h1>
    
    </div>
  );
}

export default App;
