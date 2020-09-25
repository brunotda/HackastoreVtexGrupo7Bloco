import React from "react"
// import './title.styles.css'
import * as Styled from './styles'

interface TitleProps {
  children: string;
  fontSize: number;
}

const Title = ({ children, fontSize }: TitleProps) => {
  return (
  <Styled.Title fontSize={fontSize}>{children}</Styled.Title>
  );
};

export default Title;
