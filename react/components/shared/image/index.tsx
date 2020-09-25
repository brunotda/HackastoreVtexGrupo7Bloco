import React from 'react'
import * as Styled from './styles'

interface ImageProps{
  src: string;
  size: number;
}

const Image = ({ src, size }: ImageProps) => {
  return(<Styled.Image size={size} src={src}></Styled.Image>)
}

export default Image;