import styled from 'styled-components'

interface ImageStyleProps {
  size: number
}

export const Image = styled.img`
  width: ${(props: ImageStyleProps) => `${props.size * 10}px`};
  height: ${(props: ImageStyleProps) => `${props.size * 10}px`};
  border-radius: 100%;
`