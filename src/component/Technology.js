import React from 'react'
import { useContext } from "react";
import { Store } from "./Store/DataStore";
import { Link } from 'react-router-dom';

const Technology = () => {
  const [techdata] = useContext(Store);
  const Filter =techdata.filter((item)=>item.cat==="Technology"&&item.for==="Top-Post")

  return (
    <div>
      <h1 style={{ marginLeft: "60PX" }} className="bolly">
       Technology
      </h1>
      <h1 className="tp">Top Posts...</h1>
      <div className="mainbox">
        <div className="articalside">
          {techdata
            .filter((item) => item.cat === "Technology" && item.for==="Articalpost")
            .map((value, index) => {
              // console.log(value);
              // console.log(bollywooddata);
              return (
                <Link to={`/Genrik/${value.titel}`} state={value}  style={{textDecoration:"none"}}>
                <div className="a1">
                  <img
                    src={value.urlforimage}
                    alt="salman bhai"
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
          {techdata
            .filter(
              (item) => item.cat === "Technology" && item.for === "The-Top-Post"
            )
            .map((value, index) => {
              // console.log(value);
              return(
                <Link to={`/Genrik/${value.titel}`} state={value}  style={{textDecoration:"none"}}>
                <div className="topmain">
<img src={value.urlforimage} alt="Pushpa bhai"  className="mphoto"/>
<h2>{value.titel } here new annoucement coming soon...</h2>
<p> 17 aug 2023</p>
                </div>
                </Link>
              )
            })}
            <div className="smalltop">
              {Filter.map((value,index)=>{
                console.log(value);
                return(
                  <Link to={`/Genrik/${value.titel}`} state={value}  style={{textDecoration:"none"}}>
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
            <div className="advertech">
                Advertistement
                {/* <img className="addphoto" src="https://imgnew.outlookindia.com/public/uploads/articles/2021/1/5/indexnew123n.jpg" alt="advertistment" /> */}
                {/* <img className="addphoto" src="https://static.startuptalky.com/2022/12/gift-industry-startuptalky--2-.jpg" alt="advertistment" /> */}
              </div>
        </div>
      </div>
    </div>
  );
}

export default Technology
