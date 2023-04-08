import React from "react"
import links from "./links"
import Icons from "./icons"
import styled from "styled-components"

const SocialBar = () => (
  <Wrapper>
    <LinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]
        return (
          <LinksItem key={i}>
            <LinksLink href={link.url} target="_blank" title={link.label}>
              <IconWrapper>
                <Icon />
              </IconWrapper>
            </LinksLink>
          </LinksItem>
        )
      })}
    </LinksList>
  </Wrapper>
)

export const Wrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const LinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const LinksItem = styled.li``

export const LinksLink = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #fff;
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`

export default SocialBar
