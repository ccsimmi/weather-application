import Card from "./Card";

export default function Content({
  locationName,
  country,
  temp,
  humidity,
  pressure,
  description,
  wind,
}) {
  return (
    <section className="flex flex-col">
      <div className="p-2">
        {locationName && (
          <h1 className="text-center text-2xl font-semibold mb-2">
            {locationName}, {country}
          </h1>
        )}
        <p className="text-center text-lg mb-2 capitalize">{description}</p>
        <p className="text-center text-7xl mb-4">
          {parseInt(temp - 273.15)}
          <span className="text-lg">&#8451;</span>
        </p>
        <p className="text-center mb-2">{new Date().toDateString()}</p>
      </div>
      <div className="flex flex-col p-2">
        <Card label="Humidity" number={humidity} unit="%" />
        <Card label="Pressure" number={pressure} unit="mb" />
        <Card label="Wind" number={wind} unit="m/s" />
      </div>
    </section>
  );
}
