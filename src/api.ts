import axios from "axios";

export default async function getCountry(country) {
  const res = await axios.get(`https://restcountries.com/v3.1/name/${country}`);

  return res.data[0];
}
