import React, { useContext } from "react";
import { Store } from "../Store/DataStore";
import { Link } from "react-router-dom";

const TheLatest = () => {
  const [data] = useContext(Store);
  const Filter1 = data.filter(
    (item) => item.cat === "Home" && item.for === "The-Latest"
  );

  return (
    <>
     <h1 className="latest66">The Latest</h1>
        <hr />
    <div  className="lt">
       
      {Filter1.map((value, index) => {
        return (
          <div>
            <div className="ltelemennt">
            <Link to={`/Genrik/${value.titel}`} state={value}  style={{textDecoration:"none"}} >
              <img src={value.urlforimage} alt="No Data Available"  className="ltimage"/>
              <h3 className="p9595">{value.titel}</h3>
              <p className="p9595">{value.content}</p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default TheLatest;
