import Header from "./components/header";
import Content from "./components/Content";
import { useState } from "react";
import Footer from "./components/footer";

function App() {
  const [citySearch, setCitySearch] = useState("");
  const [locationName, setLocationName] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState(273);
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();
  const [description, setDescription] = useState("");
  const [wind, setWind] = useState();

  function handleLocationSearch(e) {
    e.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLocationName(data.name);
        setCountry(data.sys.country);
        setTemp(data.main.temp);
        setHumidity(data.main.humidity);
        setPressure(data.main.pressure);
        setDescription(data.weather[0].description);
        setWind(data.wind.speed);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="max-w-xs mx-auto p-2">
      <Header
        handleLocationSearch={handleLocationSearch}
        citySearch={citySearch}
        setCitySearch={setCitySearch}
      />
      <Content
        locationName={locationName}
        country={country}
        temp={temp}
        humidity={humidity}
        pressure={pressure}
        description={description}
        wind={wind}
      />
      <Footer />
    </div>
  );
}

export default App;
