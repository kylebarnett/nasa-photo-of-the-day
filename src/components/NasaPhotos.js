import React, { useState, useEffect } from 'react';
import Photo from './Photo';
import axios from 'axios'

export default function NasaPhotos(props) {
  const [pictures, setPicture] = useState([])
  const [copyright, setCopyright] = useState([])
  const [date, setDate] = useState([])
  const [explanation, setExplanation] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=qmhUy9yMuXQcOs8PNEE978acegMnrl1mdKCZxMgn')
      .then(res => {
        console.log(res)
        setPicture(res.data.url)
        setCopyright(res.data.copyright)
        setDate(res.data.date)
        setExplanation(res.data.explanation)
        setIsLoading(false)
      })
  }, [pictures])
  return (
    <div>
      {isLoading && <h1>Your Nasa Picture is Loading...</h1>}
      <h1 style={{ textAlign: "center" }}>Photographer: {copyright}</h1>
      <h2 style={{ textAlign: "center" }}>Date: {date}</h2>
      <p>{explanation}</p>
      <Photo img={pictures} />
    </div>
  )
}
