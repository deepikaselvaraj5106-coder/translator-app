import { useState } from "react";

function App() {

  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [language, setLanguage] = useState("hi");

  const translateText = async () => {

    const url = "https://google-translate113.p.rapidapi.com/api/v1/translator/text";

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "google-translate113.p.rapidapi.com"
      },
      body: JSON.stringify({
        from: "en",
        to: language,
        text: text
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setTranslated(result.trans);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">
          🌍 Text Translator
        </h1>

        <textarea
          className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          rows="4"
          placeholder="Enter English text..."
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />

        <select
          className="w-full border p-3 rounded-lg mb-4"
          value={language}
          onChange={(e)=>setLanguage(e.target.value)}
        >
          <option value="hi">Hindi</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="kn">Kannada</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
          <option value="ja">Japanese</option>
          <option value="ml">Malayalam</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>

          <option value="ru">Russian</option>
          <option value="zh">Chinese</option>

          <option value="ko">Korean</option>
          <option value="ar">Arabic</option>

          <option value="bn">Bengali</option>
          <option value="ur">Urdu</option>
          <option value="id">Indonesian</option>
          <option value="tr">Turkish</option>
          <option value="nl">Dutch</option>
        </select>

        <button
          onClick={translateText}
          className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition"
        >
          Translate
        </button>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold mb-2">Translated Text:</h3>
          <p>{translated}</p>
        </div>

      </div>

    </div>
  );
}

export default App;
