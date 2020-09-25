import React from "react"
// import './title.styles.css'
import * as Styled from './styles'

interface TitleProps {
  children: string;
  fontSize: number;
  margin: number;
}

const Title = ({ children, fontSize, margin }: TitleProps) => {
  return (
  <Styled.Title fontSize={fontSize} margin={margin}>{children}</Styled.Title>
  );
};

export default Title;
