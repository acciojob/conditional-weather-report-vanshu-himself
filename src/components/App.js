
import React from "react";
import './../styles/App.css';

const App = () => {
  const weather={
      temparature:25,
      condition:"Sunny",
  }
  return (
    <div>
         <p style={weather.temparature>20?{backgroundColor:"red"}:{backgroundColor:"blue"}}>weather.temparature</p>
        <span>weather.condition</span>
    </div>
  )
}

export default App
