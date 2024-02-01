/* eslint-disable react/prop-types */
const Weather = ({ data }) => {
  return (
    <div className="container flex flex-col justify-between max-w-3xl h-auto m-auto py-0 px-4 relative top-24">
      <div className="top w-full my-4 mx-auto">
        <div className="location">
          <p className="text-base mx-6">{data.name}</p>
        </div>
        <div className="temp">
          <h1 className="text-8xl font-bold ml-6 mt-10">{data.main && data.main.temp.toFixed()} °C</h1>
        </div>
        <div className="description relative origin-top-left -rotate-90">
          <p className="text-base">{data.weather && data.weather[0].main}</p>
        </div>
      </div>
      <div className="bottom flex justify-evenly text-center w-full mt-24 mb-4 mx-auto p-4 rounded-2xl bg-white/20 ">
        <div className="feels">
          <p className="text-base font-bold">{data.main && data.main.feels_like.toFixed()}</p>
          <p className="text-base">Feels Like</p>
        </div>
        <div className="humidity">
          <p className="text-base font-bold">{data.main && data.main.humidity} %</p>
          <p className="text-base">Humidity</p>
        </div>
        <div className="wind">
          <p className="text-base font-bold">{data.wind && data.wind.speed.toFixed()} Km/h</p>
          <p className="text-base">Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
