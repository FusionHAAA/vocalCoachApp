import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Artist } from "react-spotify-api";

function TestApiSpo(props) {
  console.log(props);

  return (
    <div>
      <Artist id="1XpDYCrUJnvCo9Ez6yeMWh">
        {({ artist, loading, error }) =>
          artist ? <h1>{artist.name}</h1> : " wtf "
        }
      </Artist>
    </div>
  );
}

export default TestApiSpo;
