import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import GalleryCard from './GalleryCard'

const Body = styled.section`  
  min-height: 100vh;
  height: auto;
  background-color: ${ props => props.dark ? 'black' : 'white' };
  transition: 0.3s all ease;
`
const GalleryWrapper = styled.div`
  max-width: 1000px;
  padding: 100px 0;
  margin: 0 auto;

  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-template-rows: auto;
  grid-gap: 2rem;

  @media(max-width: 768px) {
    grid-template-columns: minmax(150px, 350px);  
  }
`
const StyledDivider = styled.div`
  display:block;
  height: 2px;
  width: 100%;
  background:${props => props.dark ? 'white' : 'black'};
`
const StyledTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-family: Poppins;
  padding: 100px 0 0;
  color: ${props => props.dark ? 'white' : 'black'};
`

const Gallery = ({ dark }) => {
  const cardArray = [
    1,2,3,4,5,6,  
  ]
  const [digitalPortraits, setDigitalPortraits] = useState([])
  const [showcase, setShowcase] = useState([])

  const getImgurData = async () => {
     const headers = {
      'Authorization': `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`
    }
    await axios.get('https://api.imgur.com/3/album/xlZR9xr', {headers})
      .then( res => {
        setShowcase(res.data.data.images)   
        
        console.log(res.data.data.images)              
      })
      .catch( res => {
        console.log('Err', res)
      })

    await axios.get('https://api.imgur.com/3/album/a4a8TrM', {headers})
      .then( res => {
        setDigitalPortraits(res.data.data.images)   
        
        console.log(res.data.data.images)              
      })
      .catch( res => {
        console.log('Err', res)
      })

  }

  
  useEffect(() => {
    getImgurData(); 
     
  }, [])

  const MappedShowcaseResults = showcase.map(img => {
    return (
      <GalleryCard dark={dark} key={img.id} img={img.link} />
    )
  })

  const MappedDigitalPortraits = digitalPortraits.map(img => {
    return (
      <GalleryCard dark={dark} key={img.id} img={img.link} />
    )
  })
  
 
  

  const MappedCards =  cardArray.map((Card) => {
           return (
             <GalleryCard dark={dark} key={Card} />
           )
         });

  return (
    <Body dark={dark}>
      
      <StyledTitle dark={dark}>Showcase</StyledTitle>
      <GalleryWrapper>        
       {MappedShowcaseResults}      
      </GalleryWrapper>
      <StyledDivider dark={dark} />
      <StyledTitle dark={dark}>Digital Portraits</StyledTitle>
      <GalleryWrapper>        
        {MappedDigitalPortraits}
      </GalleryWrapper>
      <StyledDivider dark={dark} />
      <StyledTitle dark={dark}>Poster Art</StyledTitle>
      <GalleryWrapper>        
        {MappedCards}
      </GalleryWrapper>
    </Body>
  )
}

export default Gallery
