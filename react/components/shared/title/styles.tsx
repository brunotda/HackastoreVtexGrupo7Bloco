import styled from 'styled-components'

interface StyledPropsTitle {
  fontSize: number;
  margin: number;
}

export const Title = styled.h4`
  color: #1E1D20;
  font-size: ${(props: StyledPropsTitle) => `${props.fontSize}px`};
  margin: ${(props: StyledPropsTitle) => `20px ${props.margin}px`};
`