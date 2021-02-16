import axios from "axios";
import qs from "qs";

const token = async () => {
  const clientId = "aa91cd63995546d0b46cf76d332a0be7";
  const clientSecret = "2302e436a2704d4aaac67adbd93a8ae6";

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: "client_credentials",
  };

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      headers
    );
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

export default token;
