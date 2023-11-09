import CountryData from "../CountryData/CountryData";
const CountryDetail = (props) => {
  // const { country, handleVisitedCountry, handleVisitedFlags } = props;
  console.log("im testing");
  return (
    <div>
      <h4>Country Details:</h4>
      <hr />
      {/* Option: 1 */}
      {/* <CountryData
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryData> */}
      {/* Option : 2 */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;
