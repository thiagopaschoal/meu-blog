import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const menus = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Sobre mim",
    url: "/about",
  },
]

const SideMenu = () => (
  <Wrapper>
    <MenuList>
      {menus.map((menu, i) => {
        return (
          <MenuItem key={i}>
            <MenuLink to={menu.url}>{menu.label}</MenuLink>
          </MenuItem>
        )
      })}
    </MenuList>
  </Wrapper>
)

export const Wrapper = styled.nav`
  width: 100%;
`

export const MenuList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuItem = styled.li`
  padding: 0.5rem 0px;
`

export const MenuLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #fff;
  }
  &:active {
    color: #fff;
  }
`

export default SideMenu
