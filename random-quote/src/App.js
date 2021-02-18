import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [dog, setDog] = useState('');

  useEffect(() => { 
    axios.get('https://random.dog/woof.json')
    .then(res => {
      setDog(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div>
      <h1>Random dog</h1>
      <br/>
      <img src={dog.url} alt=""/>
    </div>
  );
}

export default App;
