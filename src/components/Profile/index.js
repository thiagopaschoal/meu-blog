import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Avatar from "../Avatar"

const ProfilePage = () => (
  <Wrapper>
    <ProfileLink>
      <Avatar />
      <ProfileAuthor>
        Thiago Paschoal
        <ProfilePosition>QA Engineer</ProfilePosition>
      </ProfileAuthor>
    </ProfileLink>
    <ProfileDescription>
      Viciado em códigos e quadrinhos! Escrevo sobre o mundo front end,
      qualidade, backend e mais.
    </ProfileDescription>
  </Wrapper>
)

const Wrapper = styled.section`
  color: #8899a6;
  display: flex;
  flex-direction: column;
`

const ProfileLink = styled(Link)`
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #fff;
  }
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
  font-weight: bold;
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`

export default ProfilePage
