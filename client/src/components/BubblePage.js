import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";



const BubblePage = props => {
  const axios = require("axios");
  const [colorList, setColorList] = useState([]);
  const key = props.storage

  const getColors = async () => {
      const header = {
        headers: { authorization: key }
      }
      const res = await axios("http://localhost:5000/api/colors",header);
      setColorList(res.data)
    };
  useEffect(() => {
    getColors()
  },[]);

  return (
    <>
      <ColorList colors={colorList} updateColors={getColors} storage ={props.storage}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;