import React from "react";
import axios from "axios";

export default function Weaher() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}℃`);
  }
  let apiKey = "f8e6a9e3d6fde87cb38868da460b1371";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
