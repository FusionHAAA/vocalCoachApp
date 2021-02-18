<<<<<<< HEAD
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
=======
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Artist } from "react-spotify-api";

// function TestApiSpo(props) {
//   console.log(props);
//   return (
//     <div>
//       <Artist id="1XpDYCrUJnvCo9Ez6yeMWh">
//         {({ artist, loading, error }) =>
//           artist ? <h1>{artist.name}</h1> : null
//         }
//       </Artist>
//     </div>
//   );
// }
>>>>>>> a42e4f270ca1a246bde64b0ea659176185b582c6

// export default TestApiSpo;
