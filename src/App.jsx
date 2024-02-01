import axios from "axios";
import { useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=20629eff6e23c8a0ff2ba7f8bf03a473`;

  const searchLocation = async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      setData(data);
    } catch (error) {
      throw new Error("Couldn't get weather");
    }
    setLocation("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchLocation();
    }
  };

  return (
    <div className="bg-gradient-to-b from-indigo-600 to-orange-400 w-full h-screen text-white">
      <div className="search text-center p-4">
        <input
          className="py-3 px-6 text-xl rounded-3xl border border-solid border-white/80 bg-white/10 placeholder-gray-50 text-gray-50  "
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      {data.main && <Weather data={data} />}
    </div>
  );
}

export default App;
