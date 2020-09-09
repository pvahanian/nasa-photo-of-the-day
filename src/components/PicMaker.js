import React, { useState, useEffect } from 'react'

import axios from 'axios'

import {API_KEY, BASE_URL} from '../constants/index'





function PicMaker() {
  const [picture, setPicture] = useState([])
  const [date, setDate]= useState([])



useEffect(() => {
    //this is our "side effect" our random code we want to write this will happen AFTER DOM surgery
    axios.get(`${BASE_URL}${API_KEY}`)
    .then(res => {
        setPicture(res.data.hdurl)
        setDate(res.data.date)
        console.log(res.data)
    })
    .catch(err =>{
    
    })
  }, []) // the Empty array [] run this code after First DOM surgery only so its not constanitly pulling new data

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


//   const Friend = ({ nfo }) => (
//     <div className='friend'>
//       {info.name}
//       <button onClick={() => openDetails(info.id)}>
//         See details
//       </button>
//     </div>
//   )

  return (
    <div className='container'>
    <h1>Test of my Photo:</h1>
    <h2>{date}</h2>
    {
     <img src={picture} ></img>
    }
    
    </div>
)
}


export default PicMaker;