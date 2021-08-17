import React from 'react'
import styled from 'styled-components'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export const ButtonSlide = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.dark ? 'black' : 'white'};
  border: 1px solid ${props => props.dark ? 'rgba(221,221,221,0.287)' : 'rgba(34, 34, 34, 0.287)'};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => props.dark ? 'white' : 'black'}; 
  transition: 0.3s all ease;

  img {
    width: 25px;
    height: 25px;
    pointer-events: none;
  }

  :hover {
    background: ${props => props.dark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)'};
  }
`

const PrevButton = styled(ButtonSlide)`
  top: 50%;
  left: 20px;
  transform: translateY(-60%);
`
const NextButton = styled(ButtonSlide)`
  top: 50%;
  right: 20px;
  transform: translateY(-60%);
`

const ButtonSlider = ({ dark, direction, moveSlide }) => {
  return (
    <>
      { 
        direction === "next" ? 
          <NextButton dark={dark} onClick={moveSlide}>
            <AiOutlineRight />
          </NextButton> 
          : 
          <PrevButton dark={dark} onClick={moveSlide}>
            <AiOutlineLeft />
          </PrevButton>
      }
    </>
  )
}

export default ButtonSlider
