
import React from "react";
import './../styles/App.css';

const App = () => {
  const weather={
      temparature:25,
      condition:"Sunny"
  }
  return (
    <div>
         <p style={weather.temparature>20?{color:"red"}:{color:"blue"}}>Temparature:{weather.temparature}</p>
        <span>Condition:{weather.condition}</span>
    </div>
  )
}

export default App
