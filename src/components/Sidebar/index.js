import React from "react"
import styled from "styled-components"
import ProfilePage from "../Profile"
import SideMenu from "../SideMenu"
import SocialBar from "../SocialBar"

const Sidebar = () => (
  <Wrapper>
    <ProfilePage />
    <SocialBar />
    <SideMenu />
  </Wrapper>
)

const Wrapper = styled.aside`
  background-color: #072347;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
`

export default Sidebar
