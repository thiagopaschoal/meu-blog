import * as React from "react"
import styled from "styled-components"
import GlobalStyle from "../../styles/global"
import ProfilePage from "../Profile"
import Sidebar from "../Sidebar"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Sidebar />
      <Main>{children}</Main>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
`

const Main = styled.main``

export default Layout
