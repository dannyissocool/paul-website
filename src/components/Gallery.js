import React from 'react'
import styled from 'styled-components'
import GalleryCard from './GalleryCard'

const Body = styled.section`
  min-height: 100vh;
  height: auto;
  background-color: ${ props => props.dark ? 'black' : 'white' };
  transition: 0.3s all ease;
`
const GalleryWrapper = styled.div`
  max-width: 900px;
  padding: 100px 0;
  margin: 0 auto;

  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-template-rows: auto;
  grid-gap: 2rem;

  @media(max-width: 768px) {
    grid-template-columns: 400px;  
  }
`
const StyledDivider = styled.div`
  display:block;
  height: 2px;
  width: 100%;
  background:${props => props.dark ? 'white' : 'black'};
`
const StyledTitle = styled.h1`
  text-align: center;
  font-family: Poppins;
  padding: 100px 0 0;
  color: ${props => props.dark ? 'white' : 'black'};
`

const Gallery = ({ dark }) => {
  const cardArray = [
    1,2,3,4,5,6,  
  ]

  const MappedCards =  cardArray.map((Card) => {
           return (
             <GalleryCard dark={dark} key={Card} />
           )
         });

  return (
    <Body dark={dark}>
      <GalleryWrapper>
       {MappedCards}      
      </GalleryWrapper>
      <StyledDivider dark={dark} />
      <StyledTitle dark={dark}>Digital Portraits</StyledTitle>
      <GalleryWrapper>        
        {MappedCards}
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
