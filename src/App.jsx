import { useState } from "react";
import { generateJokeAPI } from "./api/openrouter";

function App() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);


  const generateJoke = async () => {
  setLoading(true);

  try {
    const joke = await generateJokeAPI();
    setJoke(joke);
  } catch {
    setJoke("Error getting joke 😢");
  }

  setLoading(false);
};


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">

      <h1 className="text-4xl font-bold mb-6">
        😂 AI Joke Generator
      </h1>

      <button
        onClick={generateJoke}
        className="bg-green-500 px-6 py-2 mt-4 rounded"
      >
        {loading ? "Generating..." : "Generate Joke"}
      </button>

      {joke && (
        <div className="mt-8 bg-gray-800 p-6 rounded-lg w-96 text-center">
          {joke}
        </div>
      )}
    </div>
  );
}

export default App;
