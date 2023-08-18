import React, { useContext } from "react";
import { Store } from "../Store/DataStore";
import { Link } from "react-router-dom";

const TopBarner = () => {
  const [data] = useContext(Store);
//   console.log(data);
  const Filter1 = data.filter(
    (item) => item.cat === "Home" && item.for === "THE-banner"
  );
  const Filter2=data.filter(
    (item) => item.cat === "Home" && item.for === "banner"
  );
  return (
    <div className="bannerr">
      <div className="BigBanner">
        {Filter1.map((value, index) => {
          return (
            <Link to={`/Genrik/${value.titel}`} state={value} >
          <img src={value.urlforimage} alt="Malhar thakar" className="BB1" />
          </Link>
          );
        })}
      </div>
      <div className="BigBanner2">
        {Filter2.map((value, index) => {
          return (
            <Link to={`/Genrik/${value.titel}`} state={value} >
          <img src={value.urlforimage} alt="Malhar thakar" className="BB2" />
          </Link>
          );
        })}
      </div>

    </div>
  );
};

export default TopBarner;
