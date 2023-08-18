import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navclass, setnavclass] = useState("close-navbar");
  const [fline,setfline] = useState("line")
  const [sline,setsline] = useState("line")
  const [tline,settline] = useState("line")
  const HandleClick = () => {
    navclass === "close-navbar"
      ? setnavclass("navbar")
      : setnavclass("close-navbar");


fline==="fline"?setfline("line"):setfline("fline")
tline==="tline"?settline("line"):settline("tline")
sline==="sline"?setsline("line"):setsline("sline")


  };

  return (
    <div className="headertop">
      <div className="top">
        <div style={{ textAlign: "center" }} className="thesiren">
          <span className="the">The</span>Siren&hearts;
        </div>
        <div className="hamberger" onClick={HandleClick}>
          <span className={fline}></span>
          <span className={sline}></span>
          <span className={tline}></span>
        </div>
      </div>

      <span className={navclass}>
        <Link to={"/"} className="a">
          Home
        </Link>
        <Link to={"/Bollywood"} className="a">
          Bollywood
        </Link>
        <Link to={"/Technology"} className="a">
          Technology
        </Link>
        <Link to={"/Hollywood"} className="a">
          Hollywood
        </Link>
        <Link to={"/Fitness"} className="a">
          Fitness
        </Link>
        <Link to={"/Food"} className="a">
          Food
        </Link>
      </span>
    </div>
  );
};

export default Header;
