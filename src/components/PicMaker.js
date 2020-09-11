import React, { useState, useEffect } from "react";

import axios from "axios";

import { API_KEY, BASE_URL } from "../constants/index";

import styled, { keyframes } from "styled-components";

const StyledImage = styled.div`
  img {
    max-width:90%;
    height: auto;
  }
`;

function PicMaker(props) {
  
  const {picture} = props;


  return (
    <StyledImage>
    <div className="container">
    {<img src={picture}></img>}
    </div>
    </StyledImage>);

}

export default PicMaker;
