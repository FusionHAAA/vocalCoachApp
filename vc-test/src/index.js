import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { SpotifyApiContext, SpotifyApiAxiosContext } from "react-spotify-api";
import axios from "axios";

ReactDOM.render(
  <SpotifyApiAxiosContext.Provider value={axios}>
    <SpotifyApiContext.Provider
      value={
        "BQBTTkmrdvClJCbVWgX1BpyTSdczjbVJ9qjUC1JWBXgF30RunirktoMKIxG89oCwrRiVc3Ux9Ayr8NL_lw61XjYqVpNsjk96wsUSWs52j4OZwHi7m4EPGh2EgJDeiU0TYKwBx84Rae3DnAgvx_z-3mIE34Y-iYk"
      }
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SpotifyApiContext.Provider>
  </SpotifyApiAxiosContext.Provider>,
  document.getElementById("root")
);

reportWebVitals();
