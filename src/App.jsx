import { useState } from "react";
import Form from "./form";
import getCountry from "./api";

function App() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState("");
  console.log(input);
  async function searchHandler(e) {
    setIsLoading(true);
    if (input === "") {
      setIsLoading(false);
      return;
    }
    e.preventDefault();
    try {
      const res = await getCountry(input);
      console.log(res);
      setCountryData(res);
    } catch (error) {
      setError("Error fetching country data: ", error);
    } finally {
      setIsLoading(false);
      setInput("");
    }
  }

  return (
    <div className="mx-auto my-15 flex flex-col justify-center items-center w-96 max-sm:w-[80%] bg-[#177BE0] shadow-md  rounded-2xl">
      <h1 className="text-white font-bold text-2xl pt-8 px-4">
        Country Finder App
      </h1>

      <Form
        searchHandler={searchHandler}
        setInput={setInput}
        isLoading={isLoading}
      />

      <div className="bg-[#F3F5F9] flex-2/3 rounded-2xl h-screen p-6 w-full flex flex-col gap-3 justify-center items-center">
        {error && <p className="text-red-500">{error}</p>}
        {countryData && (
          <>
            <p>{countryData.name.common}</p>
            <img src={countryData.flags.png} alt={countryData.name} className="w-24 h-24"/>
            <p>{countryData.capital[0]}</p>
            <p>{countryData.population}</p>
            <p>{countryData.timezones[0]}</p>
            {/* <p>{countryData.currencies.EGP.name}</p> */}
            {Object.entries(countryData.currencies).map(([code, currency]) => (
              <p key={code}>
                {currency.name} ({currency.symbol})
              </p>
            ))}
            {/* <p>{countryData.currencies}</p> */}
          </>
        )}
        {isLoading && <span className="animate-pulse">Loading ...</span>}
      </div>
    </div>
  );
}

export default App;
