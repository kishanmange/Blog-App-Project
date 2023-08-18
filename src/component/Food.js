import React from 'react'
import { useContext } from "react";
import { Store } from "./Store/DataStore";
import { Link } from 'react-router-dom';




const Food = () => {
  const [Fooddata] = useContext(Store);
  const Filter =Fooddata.filter((item)=>item.cat==="Food"&&item.for==="Top-Post")

  return (
    <div>
      <h1 style={{ marginLeft: "60PX" }} className="bolly">
        Indian Food
      </h1>
      <h1 className="tp">Top Posts...</h1>
      <div className="mainbox">
        <div className="articalside">
          {Fooddata
            .filter((item) => item.cat === "Food" && item.for==="Articalpost")
            .map((value, index) => {
              // console.log(value);
              // console.log(bollywooddata);
              return (
                <Link to={`/Genrik/${value.titel}`} state={value} style={{textDecoration:"none"}}> 
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
          {Fooddata
            .filter(
              (item) => item.cat === "Food" && item.for === "The-Top-Post"
            )
            .map((value, index) => {
              // console.log(value);
              return(
                <Link to={`/Genrik/${value.titel}`} state={value} style={{textDecoration:"none"}}> 
                <div className="topmain">
<img src={value.urlforimage} alt="Pushpa bhai"  className="mphoto"/>
<h2>{value.titel }</h2>
<p> 17 aug 2023</p>
                </div>
                </Link>
              )
            })}
            <div className="smalltop">
              {Filter.map((value,index)=>{
                console.log(value);
                return(
                  <Link to={`/Genrik/${value.titel}`} state={value} style={{textDecoration:"none"}}> 
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
            <div className="adverticement">
                {/* <img src="https://img.freepik.com/free-psd/food-social-media-banner-post-template_202595-362.jpg" alt="Fast food" /> */}
                <img className='addphoto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR48jn7-GLXZZGG5TqQa3puhNjnnOnlVVaAQ&usqp=CAU" alt="Fast food" />
                <img  className='addphoto'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR48jn7-GLXZZGG5TqQa3puhNjnnOnlVVaAQ&usqp=CAU" alt="Fast food" />
              </div>
        </div>
      </div>
    </div>
  );
}

export default Food
