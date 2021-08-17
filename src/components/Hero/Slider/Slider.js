import React, { useState, useEffect } from 'react'
import dataSlider from './dataSlider'
import styled from 'styled-components'
import ButtonSlider from './ButtonSlider'

const SliderContainer = styled.div`
 
 border-radius: 10px;
`
const Slide = styled.div.attrs(props => ({
  className: props.className,
}))`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${props => props.active ? '1' : '0'};
  transition: opacity ease-in-out 0.4s;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 10px 10px 0;
  }

  @media(max-width: 768px){
    img {
      border-radius: 0 0 10px 10px;
    }
  }

  
`




const ContainerDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;  
`
const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid ${props => props.dark ? 'black' : 'white'};
  margin: 0 5px;
  background:  ${props => props.dark ? 'black' : 'white'};
  cursor:pointer;
  transition: 0.3s all ease;
`
const ActiveDot = styled(Dot)`
   background: ${props => props.dark ? 'white' : 'black'};
`


const Slider = ({dark}) => {

  const [slideIndex, setSlideIndex] = useState(1);
  

  useEffect(() => {
    
  })

  const nextSlide = () => {
    if(slideIndex !== dataSlider.length){
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === dataSlider.length){
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1){
      setSlideIndex(dataSlider.length)
    }
  }

  const moveDot = (i) => {
    setSlideIndex(i);
  }


  return (
    <SliderContainer>
      {
          dataSlider.map((obj, index) => (                  
              <Slide key={obj.id} active={slideIndex === index + 1}>
                <img src={process.env.PUBLIC_URL + `/Img/Slider/img${index + 1}.jfif`} alt=''/>
              </Slide> 
              )            
          )
      }
      

      <ButtonSlider dark={dark} moveSlide={nextSlide} direction={"next"} />
      <ButtonSlider dark={dark} moveSlide={prevSlide} direction={"prev"} />

      <ContainerDots dark={dark} >
        {Array.from({length: 4}).map((item, index) => (
          slideIndex === index + 1 ? 
            <ActiveDot dark={dark} onClick={() => moveDot(index+1)} /> 
            : 
            <Dot dark={dark} onClick={() => moveDot(index+1)} />
        ))}
      </ContainerDots>

    </SliderContainer>
  )
}

export default Slider
