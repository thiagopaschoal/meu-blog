import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const Avatar = () => (
  <Wrapper>
    <StaticImage alt="johndoe" src="../../images/avatar.png"></StaticImage>
  </Wrapper>
)

const Wrapper = styled.div`
  .gatsby-image-wrapper {
    border-radius: 50%;
    height: 4rem;
    margin: auto;
    width: 4rem;
  }
`

export default Avatar
