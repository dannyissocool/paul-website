import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import jawsImg from '../../images/jaws.png'
import Slider from './Slider/Slider'

const HeroWrapper = styled.div `
  height: 100vh; 

  position: relative;
`

const HeroCard = styled.section`
  max-width: 80%;
  min-width: 50%;
  min-height: 50%;
  background-color: ${props => props.dark ? 'rgba(0,0,0,0.8)' :  'rgba(255,255,255,0.8)'};
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 10px;  
  transition: 0.3s all ease; 
  
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media(max-width: 768px) {
    height: 800px;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
  }
`

const HeroCardContent = styled.div`
margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  

  h1 {
    text-align: center;
    font-family: Poppins;
    color: ${props => props.dark ? 'white' : 'black'};
  }

  button {
    font-family: Poppins;
    font-size: 15px;
    padding: 10px 30px;
    cursor: pointer;
    color: ${props => props.dark ? 'black' : 'white'};
    background-color: ${props => props.dark ? 'white' : 'black'};

    :hover {
      opacity: 0.8;
    }
  }
`

const SliderWrapper = styled.div`
  width: 100%;
  position: relative;
`

const HeroCardImg = styled.img`
  max-width : 90%;
  min-width: 180px;
  max-height: 90%;
  object-fit: contain;
  padding: 20px;
  
  border-radius: 6%;
  
  
  @media(max-width: 768px) {
    margin: 20px 5px;
  }
`

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  z-index: 0;
`

const Hero = ({ dark }) => {
  return (
    <HeroWrapper>
      <HeroCard dark={dark}>
        <HeroCardContent dark={dark}>
          <h1>Paul Meuse Art</h1>
          <Link to='/gallery'>
            <button >Enter</button>
          </Link>          
        </HeroCardContent>
        <SliderWrapper>
          <Slider dark={dark} />
        </SliderWrapper>
        
      </HeroCard>
      <HeroImg src={jawsImg}/>
    </HeroWrapper>
  )
}

export default Hero
