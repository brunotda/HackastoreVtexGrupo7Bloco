import styled from 'styled-components'

interface StyledPropsTitle {
  fontSize: number
}

export const Title = styled.h4`
  color: red;
  font-size: ${(props: StyledPropsTitle) => `${props.fontSize}px`};
`