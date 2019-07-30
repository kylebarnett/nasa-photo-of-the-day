import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function NasaPhotos(props) {
  const [pictures, setPicture] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=qmhUy9yMuXQcOs8PNEE978acegMnrl1mdKCZxMgn')
      .then(res => {
        setPicture(res.data.url)
        setIsLoading(false)
      })
  }, [pictures])
  return (
    <div>
      {isLoading && <h1>Your Nasa Picture is Loading...</h1>}
      <img src={pictures} alt="Nasa Picture of the Day" />
    </div>
  )
}
