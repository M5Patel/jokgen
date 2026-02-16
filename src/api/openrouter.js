import axios from "axios";

export const generateJokeAPI = async () => {
  const res = await axios.get(
    "https://v2.jokeapi.dev/joke/Any?safe-mode"
  );

  if (res.data.type === "single") {
    return res.data.joke;
  } else {
    return `${res.data.setup} — ${res.data.delivery}`;
  }
};
