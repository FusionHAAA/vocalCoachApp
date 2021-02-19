import axios from "axios";
import qs from "qs";

const token = async () => {
  const clientId = "aa91cd63995546d0b46cf76d332a0be7";
  const clientSecret = "5a684249dae84c288d8405e6da9abe5a";
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
    
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};
export default token;
