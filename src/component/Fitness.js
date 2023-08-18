import React from 'react'
import { useContext } from "react";
import { Store } from "./Store/DataStore";
import { Link } from 'react-router-dom';

const Fitness = () => {
  const [Fitnessdata] = useContext(Store);
  const Filter =Fitnessdata.filter((item)=>item.cat==="Fitness"&&item.for==="Top-Post")

  return (
    <div>
      <h1 style={{ marginLeft: "60PX" }} className="bolly">
       Fitness...
      </h1>
      <h1 className="tp">Top Posts...</h1>
      <div className="mainbox">
        <div className="articalside">
          {Fitnessdata
            .filter((item) => item.cat === "Fitness"&&item.for==="Articalpost")
            .map((value, index) => {
              // console.log(value);
              // console.log(bollywooddata);
              return (
                <Link to={`/Genrik/${value.titel}`} state={value} style={{textDecoration:"none"}} >
                <div className="a1">
                  <img
                    src={value.urlforimage}
                    alt="Error"
                    className="photo"
                  />
                  <div className="subbox">
                  <h3>{value.titel}</h3>

                    <p>{value.content}</p>
                    <p> 17 aug 2017</p>
                  </div>
                </div>
                </Link>
              );
            })}
        </div>
        <div className="top-postside">
          {Fitnessdata
            .filter(
              (item) => item.cat === "Fitness" && item.for === "The-Top-Post"
            )
            .map((value, index) => {
              // console.log(value);
              return(
                <Link to={`/Genrik/${value.titel}`} state={value} style={{textDecoration:"none"}} >
                <div className="topmain">
<img src={value.urlforimage} alt="Pushpa bhai"  className="mphoto"/>
<h2>{value.titel } </h2>
<p> 17 aug 2023</p>
                </div>
                </Link>
              )
            })}
            <div className="smalltop">
              {Filter.map((value,index)=>{
                console.log(value);
                return(
                  <Link to={`/Genrik/${value.titel}`} state={value} style={{textDecoration:"none"}} >
                <div className="topsmallp">

                  <img src={value.urlforimage} alt="top-posts" className="smallp"/>
                  <div>
                    <h1>{value.titel}</h1>
                    <p>15 may 2025</p>
                  </div>
                </div>
</Link>
)
              })}
             
            </div>
            <div className='adverr'>
            
              Advertistement

            </div>
        </div>
      </div>
    </div>
  );
}

export default Fitness
