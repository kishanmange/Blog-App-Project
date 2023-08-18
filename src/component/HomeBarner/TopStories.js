import React, { useContext } from "react";
import { Store } from "../Store/DataStore";
import { Link } from "react-router-dom";
const TopStories = () => {
  const [data] = useContext(Store);
  const Filter1 = data.filter(
    (item) => item.cat === "Home" && item.for === "Top-Stories"
  );
  const Filter2 = data.filter(
    (item) => item.cat === "Home" && item.for === "Top-Post"
  );
  return (
    <>
    <h2 className="hedtop">Top-Post</h2>
      <h2>Top-Stories</h2>
      
      <hr />
      <div className="a11">
        <div className="topstory">
          {Filter1.map((value, index) => {
            return (
                <Link to={`/Genrik/${value.titel}`} state={value} style={{textDecoration:"none"}} >
              <div className="stp">
                <img
                  src={value.urlforimage}
                  alt="data not found"
                  className="imagestory"
                />
                <div className="at56">
                  <h3>{value.titel}</h3>
                  <p>{value.content}</p>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
        <div className="kish">
        <div className="topposthome">
        
          {Filter2.map((value, index) => {
            return (
                <Link to={`/Genrik/${value.titel}`} state={value} style={{textDecoration:"none"}} >
              <div className="tphome">
                <img
                  src={value.urlforimage}
                  alt="images"
                  className="imghometop"
                />
                <h2>{value.titel}</h2>
              
              </div>
              </Link>
            );
          })}
          
        </div>
        <div className="addhome">ADVERTISEMENT</div>
      </div>
      </div>
    </>
  );
};

export default TopStories;
