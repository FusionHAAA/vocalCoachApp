import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { SpotifyApiContext, SpotifyApiAxiosContext } from "react-spotify-api";
import axios from "axios";
import token from "./Components/Token.js";
console.log(token());

ReactDOM.render(
  <SpotifyApiAxiosContext.Provider value={axios}>
    <SpotifyApiContext.Provider value={token()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SpotifyApiContext.Provider>
  </SpotifyApiAxiosContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
