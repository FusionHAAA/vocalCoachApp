import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import TestAudio from "./Components/TestAudio.js";
import TestApiSpo from "./Components/TestApiSpo.js";
import token from "./Components/Token.js";
// console.log(t);
// const headers = {
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
//   auth: {
//     username: clientId,
//     password: clientSecret,
//   },
// };
// axios.get('https://api.spotify.com/v1/search?q=beatles', {
//   headers: Authorization
// }).then(res => {
//   console.log(res)
// })
// fetch(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {
//   headers: {
//     Accept: "application/json",
//     Authorization: "Bearer BQBYht1XLd9rY4yltENDBQtXA5VSqmaM0XrRs3CFscXdrfyYWM4F8ps3zCeJYL3TSRPGJfJsu7gIbzQyJIlAep_EDVntcdePVO5l7P3y_vlbOALWh3xBAagAJR6YUvlZet953nxg3cdOE4biTZdOQt8",
//     "Content-Type": "application/json"
//   }
// }).then(res => res.json())
//   .then(data => console.log(data))
function App() {
  let [artist, setArtist] = useState("beatles");
  let [artists, setArtists] = useState([]);
  useEffect(() => {
    fetch(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArtist(data.artists);
      });
  }, []);

  return (
    <div className="App">
      {/* <TestAudio />
      Convert audio to different key */}
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/TestAudio"
          render={(props) => <TestAudio {...props} />}
        />
        <Route
          exact
          path="/TestApiSpo"
          render={(props) => <TestApiSpo {...props} />}
        />
      </Switch>
    </div>
  );
}
export default App;
