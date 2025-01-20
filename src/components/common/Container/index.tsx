import { ReactNode } from "react"
import styled from "styled-components"

type ContainerProps = {
  children: ReactNode
}

const ContainerStyle = styled.div`
  max-width: 1366px;
  width: 60%;
  margin-inline: auto;
  font-family: sans-serif;
`;

export const Container = ({ children }: ContainerProps) => {
  return (
    <ContainerStyle>{children}</ContainerStyle>
  )
}
