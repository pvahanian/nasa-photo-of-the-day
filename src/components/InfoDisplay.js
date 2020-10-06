import React, { useState, useEffect } from 'react'

import axios from 'axios'

import {API_KEY, BASE_URL,SECOND_URL} from '../constants/index'

import styled from "styled-components";

import {Button, Typography} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'; 
import PicMaker from "./PicMaker";



const StyledText = styled.div`
  background-color:#039be5;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-items:center;
  justify-content: center;
  @media ${(pr) => pr.theme.mobileBreakpoint} {
    width: initial;
  }
  h4{
    border: 1px solid black;

  }
 
`;



function InfoDisplay() {

    const [data, setData]= useState()
    const [yesterdaysData, setYesterdaysData]= useState()
 
  

    //   {
//     "copyright": "Raul Villaverde Fraile",
//     "date": "2020-09-09",
//     "explanation": "Have you ever seen the Pleiades star cluster? Even if you have, you probably have never seen it as large and clear as this. Perhaps the most famous star cluster on the sky, the bright stars of the Pleiades can be seen without binoculars from even the depths of a light-polluted city.  With a long exposure from a dark location, though, the dust cloud surrounding the Pleiades star cluster becomes very evident. The featured exposure covers a sky area several times the size of the full moon.  Also known as the Seven Sisters and M45, the Pleiades lies about 400 light years away toward the constellation of the Bull (Taurus).  A common legend with a modern twist is that one of the brighter stars faded since the cluster was named, leaving only six of the sister stars visible to the unaided eye. The actual number of Pleiades stars visible, however, may be more or less than seven, depending on the darkness of the surrounding sky and the clarity of the observer's eyesight.   Teachers & Students: Ideas for utilizing APOD in the classroom.",
//     "hdurl": "https://apod.nasa.gov/apod/image/2009/Pleiades_Fraile_3413.jpg",
//     "media_type": "image",
//     "service_version": "v1",
//     "title": "Pleiades: The Seven Sisters Star Cluster",
//     "url": "https://apod.nasa.gov/apod/image/2009/Pleiades_Fraile_960.jpg"
// }


const [yPicture, setYPicture] = useState([]);

useEffect(() => {
    //this is our "side effect" our random code we want to write this will happen AFTER DOM surgery
    axios.get(`${BASE_URL}${API_KEY}`)
    .then(res => {
        setData(res.data)
    })
    .catch(err =>{
    })
}, [])

useEffect(() => {
  //this is our "side effect" our random code we want to write this will happen AFTER DOM surgery
  axios.get(`${SECOND_URL}2020-09-09${API_KEY}`)
  .then(res => {
    setYesterdaysData(res.data)
    setYPicture(res.data.hdurl)
  })
  .catch(err =>{
  })
}, [])


return (
    <StyledText><Typography>
    <div>
    <h1>Welcome to Nasa Pic of the Day</h1>
    <ArrowBackIcon color="primary" fontSize="large" onClick={() => alert('click')}> </ArrowBackIcon><br></br>
    <Button variant="outlined" color="primary">{data && data.date}</Button>
    <h1> {data && data.title}<br></br>By {data && data.copyright}</h1> 
    {data && data.explanation}
    </div>
    <PicMaker picture={yPicture}/>
    </Typography>
    </StyledText>
    
    )
}



// onClick={}
export default InfoDisplay;