import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Country from "./Country";
import Weather from "./Weather";
import axios from "axios";

const Form = () => {
  const [countryName, setCountryName] = useState("");
  const [isSubmitted, setIssubmitted] = useState(false);

  const [countryCapital, setCountryCapital] = useState("");
  const [country, setCountry] = useState({});
  const [weather, setWeather] = useState({});

  const handleCountry = (capital: string) => {
    axios
      .get(`https://restcountries.com/v2/capital/${capital}`)
      .then((response) => {
        const result = response.data[0];
        // console.log("result-country", result);
        setCountry(result);
      })
      .catch((err) => {
        const error = err.message;
        console.log("error", error);
      });
  };

  const handleCountryName = () => {
    const accessKey = "2e8a396396faa5e6de0be7f4f92f715e";
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${accessKey}&query=${countryName}`
      )
      .then((response) => {
        const result = response.data;
        setWeather(result);
        setCountryCapital(result.location.name);
        handleCountry(result.location.name);
        setIssubmitted(true);
      })
      .catch((err) => {
        const error = err.message;
        console.log("error", error);
      });
  };

  return (
    <Box
      style={{
        margin: "10px",
      }}
    >
      {!isSubmitted ? (
        <>
          <TextField
            required
            size="small"
            label="Country Name"
            variant="outlined"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
          />
          <br />
          <Button
            style={{ margin: "10px" }}
            size="medium"
            variant="contained"
            color="primary"
            disabled={!countryName}
            onClick={handleCountryName}
          >
            Submit
          </Button>
        </>
      ) : (
        <>
          {countryCapital && Object.keys(country).length > 0 && (
            <Country
              country={country}
              countryName={countryName}
              countryCapital={countryCapital}
              weather={weather}
            />
          )}
        </>
      )}
    </Box>
  );
};

export default Form;