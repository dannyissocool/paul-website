import React from 'react'
import styled from 'styled-components'
import jawsImg from '../images/jaws.png'

const CardBody = styled.div`
  border: 1px solid ${ props => props.dark ? 'white' : 'black'};
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  h3 {
    color: ${props => props.dark ? 'white' : 'black'}
  }
`

const GalleryCard = ( {dark, img} ) => {
  return (
    <CardBody dark={dark}>
      <img src={img} alt='shark' />      
    </CardBody>
  )
}

GalleryCard.defaultProps = {
  img: jawsImg
}

export default GalleryCard
