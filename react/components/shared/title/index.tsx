import React from "react"
import './title.styles.css'

interface TitlePros {
  children: string;
}

const Title = ({ children }: TitlePros) => {
  return <h4 className='opinion__title'>{children}</h4>;
};

export default Title;
