import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { SpotifyApiContext, SpotifyApiAxiosContext } from "react-spotify-api";
import axios from "axios";

ReactDOM.render(
  
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    
  document.getElementById("root")
);

reportWebVitals();
